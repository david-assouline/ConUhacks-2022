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

    return df


def transform(df, selectedcolumn):
    df = df.groupby(selectedcolumn).size().reset_index(name='count')
    df.rename(columns={selectedcolumn: "Country"}, inplace=True)
    df = transform_country_codes(df)
    results_dict = transform_data_frame(df)
    return json.dumps(results_dict)


def transform_country_codes(df):
    # Opening JSON file
    with open('ISO3166CountryCodes.json') as json_file:
        data = json.load(json_file)
    for country in df["Country"]:
        try:
            if data[country.upper()] is not None:
                df.replace({country: data[country.upper()]}, inplace=True)
        except KeyError:
            pass
    return df


def transform_data_frame(df):
    results_dict = dict()
    for i in range(len(df)):
        if len(df.loc[i, "Country"]) == 2:
            results_dict[df.loc[i, "Country"]] = {"count":int(df.loc[i, "count"])}
    return results_dict

    # if __name__ == '__main__':
    wikiurl = input("Enter URL: ")
