import requests
from bs4 import BeautifulSoup
import pandas as pd

wikiurl = "https://en.wikipedia.org/wiki/List_of_chess_grandmasters"
table_class = "wikitable sortable jquery-tablesorter"
response = requests.get(wikiurl)

soup = BeautifulSoup(response.text, 'html.parser')
main_table = soup.find('table', {'class': "wikitable"})

# convert list to dataframe
df = pd.read_html(str(main_table))

df = pd.DataFrame(df[0])
