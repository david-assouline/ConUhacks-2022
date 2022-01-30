import requests
from bs4 import BeautifulSoup
import pandas as pd
import json


# URL for scrapping data
COUNTRY_KEYWORDS = [ "country", "countries", "federations", "nations", "states" ]
AGGREGATE_KEYWORDS = ["number", "count", "total"]

def load_country_codes():
    json_file = open("ISO3166CountryCodes.json")
    data = json.load(json_file)
    json_file.close()
    return data

COUNTRY_CODES_ISO31066 = load_country_codes()

COUNTRY_COL = "Country"

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

def find_country_col(cols):
    for i in cols:
        for kw in COUNTRY_KEYWORDS:
            if i.lower().split(' ')[0] in kw:
                return i
    
    return None

def transform(df, filters, selectedcolumn=None):
    if not selectedcolumn:
        selectedcolumn = find_country_col(df.columns)
    
    if not selectedcolumn:
        return {}

    found_keyword = False
    aggregate_column_name = -1
    print(df.columns)
    for column in df.columns:
        if str(column).lower() in AGGREGATE_KEYWORDS:
            found_keyword = True
            aggregate_column_name = str(column)
    if found_keyword:
        df.rename(columns={selectedcolumn: "Country"}, inplace=True)
        df.rename(columns={aggregate_column_name: "count"}, inplace=True)
        results_dict = parse_data_frame(transform_country_codes(df), filters)

    else:
        df["inserted_total_col"] = 1
        df = df.groupby(selectedcolumn).size().reset_index(name='count')
        df.rename(columns={selectedcolumn: COUNTRY_COL}, inplace=True)
        results_dict = parse_data_frame(transform_country_codes(df), filters)

    return results_dict


def transform_country_codes(df):
    # Opening JSON file
    for country in df["Country"]:
        try:
            if COUNTRY_CODES_ISO31066[country.upper()] is not None:
                df.replace({country: COUNTRY_CODES_ISO31066[country.upper()]}, inplace=True)
        except KeyError:
            pass
    return df


def parse_data_frame(df, filters):
    results_dict = dict()
    df = df[df["Country"].str.len() == 2].reset_index()
    for i in range(len(df)):
        if type(df.loc[i, "count"]) == str:
            print(df.loc[i, "count"].split('['))
            if (len(df.loc[i, "count"].split('[')) > 1):
                df.at[i, "count"] = int(df.loc[i, "count"].split('[')[0])

        results_dict[df.loc[i, "Country"]] = {"count": int(df.loc[i, "count"])}
      

    return {
        "data": results_dict,
        **calculate_filter_meta_data(df, filters)
    }

def calculate_filter_meta_data(df, filters):
    return {f: {
        'min': int(df[f].min()),
        'max': int(df[f].max()),
    } for f in filters }

if __name__ == '__main__':
    wikiurl = input("Enter URL: ")
