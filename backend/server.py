from itertools import count
from flask import Flask, request
from flask_cors import CORS
from scraper_wikipedia import scrape, transform
from wiki import query_search_string, generate_wiki_page_url, fetch_html_content

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

    exact_match = next(filter(lambda p: p["title"] == query, pages), False)
    if not exact_match and len(response) > 0:
        response["suggestions"] = [ p["title"] for p in pages ]
    
    if "count" not in filters:
        filters.append("count")
        
    response["filters"] = filters

    pageid = exact_match["pageid"] if exact_match else pages[0]["pageid"]

    scraped_data = transform(scrape(fetch_html_content(pageid)), filters)
    
    response["result"] = scraped_data
    
    
    try:
        response["success"] = True if scraped_data else False
        return response
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

    # return scrape_by_url("https://en.wikipedia.org/wiki/List_of_chess_grandmasters")

    # return scrape_by_url(generate_wiki_page_url(results[1]["pageid"]))


if __name__ == "__main__":
    app.run(debug=True)
