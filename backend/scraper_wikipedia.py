import requests
from bs4 import BeautifulSoup
import pandas as pd

# URL for scrapping data
wikiurl = input("Enter URL: ")

table_class = "wikitable sortable jquery-tablesorter"
response = requests.get(wikiurl)

# parse HTML from URL
soup = BeautifulSoup(response.text, 'html.parser')
main_table = soup.find('table', {'class': "wikitable"})

# convert list to dataframe
df = pd.read_html(str(main_table))

df = pd.DataFrame(df[0])
print(df.head())

