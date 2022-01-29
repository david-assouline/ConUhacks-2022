import requests
from bs4 import BeautifulSoup
import pandas as pd

# URL for scrapping data
url = "https://www.worldometers.info/coronavirus/"

# parse LXML from URL
html_content = requests.get(url).text
soup = BeautifulSoup(html_content, 'lxml')

main_table = soup.find("table", attrs={"id": "main_table_countries_today"})

head = main_table.thead.find_all("tr")
headings = []

for th in head[0].find_all("th"):
    # remove extra spaces
    headings.append(th.text.replace("\n", "").strip())

body = main_table.tbody.find_all("tr")
data = []

for i in range(1, len(body)):
    row = []
    for tr in body[i].find_all("td"):
        row.append(tr.text.replace("\n", "").strip())
        # remove extra spaces and append row
    data.append(row)


df = pd.DataFrame(data, columns=headings)

data = df[df["#"]!=""].reset_index(drop=True)
# Data points with # value are the countries of the world while the data points with
# null values for # columns are features like continents totals etc

# Worldometer returns data for past 72 hours, by dropping duplicates we keep only today's values
data = data.drop_duplicates(subset = ["Country,Other"])

