from flask import Flask
from flask_cors import CORS
from scraper_wikipedia import scrape, scrape_by_url
from wiki import query_search_string, generate_wiki_page_url, fetch_html_content

app = Flask(__name__)
CORS(app)

@app.route("/")
def helloWorld():
  return "Hello, cross-origin-world!"

@app.route('/v1/query',  methods=['GET'])
def query():
    return 

@app.route("/testWiki")
def test_wiki_scrape():
    results = query_search_string("List of chess grandmasters")
    print(generate_wiki_page_url(results[0]["pageid"]))
    print(fetch_html_content(results[0]["pageid"]))
    return scrape(fetch_html_content(results[0]["pageid"]))
    # return scrape_by_url("https://en.wikipedia.org/wiki/List_of_chess_grandmasters")

    # return scrape_by_url(generate_wiki_page_url(results[1]["pageid"]))
     