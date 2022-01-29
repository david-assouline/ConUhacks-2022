import requests
from bs4 import BeautifulSoup
import pandas as pd
import json

# URL for scrapping data

def scrape_by_url(wikiurl):
    # table_class = "wikitable sortable jquery-tablesorter"
    response = requests.get(wikiurl)
    scrape(response)

def scrape(response):
    # parse HTML from URL
    soup = BeautifulSoup(response, 'html.parser')
    main_table = soup.find('table', {'class': "wikitable"})

    # convert list to dataframe
    df = pd.read_html(str(main_table))

    df = pd.DataFrame(df[0])

    print(df.head())
    df.to_dict(orient='records')
    return json.dumps(df.to_dict(orient='records'))

if __name__ == '__main__':
    wikiurl = input("Enter URL: ")


