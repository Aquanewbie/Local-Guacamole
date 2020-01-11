import psycopg2
import sys
import json


con = psycopg2.connect("host='localhost' dbname='Avocado' user='postgres' password='postgres'")  
cur = con.cursor()
cur.execute("SELECT * FROM guacamolecountries")
columns = ('Country', 'Produce')

GuacamoleData = []
# Create a List of Dictionaries from the Data
#Code Reference: https://www.peterbe.com/plog/from-postgres-to-json-strings
for row in cur.fetchall():
     GuacamoleData.append(dict(zip(columns, row)))
    # print (json.dumps(GuacamoleData, indent=2))
GuacamoleData
CountryList = []
ProduceDict = []

for i in range(0,len(GuacamoleData)):
    #List of Countries
    CountryList.append(GuacamoleData[i]['Country'])
    #Dictionary of Countries' Produce
    #To Process A String As if it Were a List Use eval()
    ProduceDict.append({GuacamoleData[i]['Country']:eval(GuacamoleData[i]['Produce'])})
print (CountryList)
print (ProduceDict)

# Get Coordinates of Countries In GuacamoleData
with open('Coord_json/countries.geo.json', 'r') as CountCoordjson:
    CountCoord=CountCoordjson.read()
CountCoord = json.loads(CountCoord)
print (CountCoord)