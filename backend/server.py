from itertools import count
from flask import Flask, request
from flask_cors import CORS
from scraper_wikipedia import scrape, transform
from wiki import query_search_string, generate_wiki_page_url, fetch_html_content
import traceback
import simplejson


app = Flask(__name__)
CORS(app)


@app.route("/")
def helloWorld():
    return "Hello, cross-origin-world!"


@app.route('/v1/query', methods=['GET'])
def query():
    query = request.args.get('query', default="", type=str)
    filters = request.args.getlist('filter') if request.args.getlist('filter') else []
    pages = query_search_string(query.strip('"'))
    
    response = {
        "version": "1",
        "query": query,  
    }

    exact_match = next(filter(lambda p: p["title"].lower() == query.lower(), pages), False)
    
    if "count" not in filters:
        filters.append("count")
        
    response["filters"] = filters

    index = 0
    try:
        pageid = exact_match["pageid"] if exact_match else pages[index]["pageid"]
    except:
        return {
            "version": "1",
            "success": False,
            "query": query,            
        }

    scraped_data = {}
    is_success = False
    while index < 3:
        try:
            app.logger.warn("{}-{}".format(pages[index]["title"], pages[index]["pageid"]))
            scraped_data = transform(scrape(fetch_html_content(pageid)), filters)
            response["result"] = scraped_data
            is_success = True if scraped_data else False
            
            if is_success:
                break
        except Exception as e:
            app.logger.warn(e)
            traceback.print_exc()
        index = index + 1
        pageid = pages[index]["pageid"]
        
    
    
    if is_success:
        response["filters"] = list(filter(lambda k: k != 'data', scraped_data.keys()))

    if not exact_match and len(response) > 0 and not is_success:
        response["suggestions"] = [ p["title"] for p in pages ]
        response["suggestions"].insert(0, "List of Chess Grandmasters per country")
    try:
        response["success"] = is_success
        return simplejson.dumps(response, ignore_nan=True)
    except:
        return {
            "version": "1",
            "success": False,
            "query": query,            
        }


@app.route("/testWiki")
def test_wiki_scrape():
    results = query_search_string("List of Michelin 3-star restaurants")
    print(generate_wiki_page_url(results[0]["pageid"]))
    print(fetch_html_content(results[0]["pageid"]))
    scraped_data = scrape(fetch_html_content(results[0]["pageid"]))
    return transform(scraped_data, "Country (Regions)")


if __name__ == "__main__":
    app.run(debug=True)
