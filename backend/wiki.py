#!/usr/bin/python3

import urllib.parse
import requests

S = requests.Session()

URL = "https://en.wikipedia.org/w/api.php"

def set_user_agent(requests):
    headers = requests.utils.default_headers()
    headers.update(
        {
            'User-Agent': 'MuckMuckGo python',
        }
    )

def query_search_string(query_string):
    PARAMS = {
        "action": "query",
        "format": "json",
        "list": "search",
        "srsearch": query_string
    }

    R = S.get(url=URL, params=PARAMS)
    DATA = R.json()

    if (DATA["query"] and DATA["query"]["search"]):
        return [ {
            "title": i["title"],
            "pageid": i["pageid"]
        } for i in DATA["query"]["search"] ]
    else:
        return []


def fetch_page_content(page_title):
    PARAMS = {
        "action": "query",
        "formatversion": "2",
        "rvprop": "content",
        "prop": "revisions",
        "rvslots": "*",
        "titles": page_title
    }

    R = S.get(url=URL, params=PARAMS)
    DATA = R.json()


def generate_wiki_page_url(pageid):
    return "https://en.wikipedia.org/?curid={pageid}".format(pageid=pageid)

def query_page_with_table(query_string):
    PARAMS = {
        'action': 'query',
        'list': 'embeddedin',
        'eititle': 'Template:Table',
        "srsearch": query_string,
        'format': 'json'
    }
    R = S.get(url=URL, params=PARAMS)
    DATA = R.json()
    print(DATA)


def fetch_html_content(pageid):
    PARAMS = {
        'action': 'parse',
        'origin': '*',
        'pageid': pageid,
        'format': 'json'
    }
    R = S.get(url=URL, params=PARAMS)
    DATA = R.json()
    if DATA and DATA["parse"] and DATA["parse"]["text"]:
        return DATA["parse"]["text"]["*"]

    return ""

if __name__ == '__main__':
    print(query_search_string("chess grandmasters"))
    # print(query_search_string("List of chess grandmasters"))
    # print(fetch_page_content("lol"))