import pandas as pd
import psycopg2
import json
import config

#Utilize psycopg2 inorder to call on postgres data base with SQL language
con = psycopg2.connect(f"host={config.host} dbname={config.dbname} user={config.user} password={config.password}")  
cur = con.cursor()
cur.execute("SELECT * FROM guacamolecountries")
columns = ('Country', 'Produce')

# Create a List of Dictionaries from the Data
#Code Reference: https://www.peterbe.com/plog/from-postgres-to-json-strings
GuacamoleData = []
for row in cur.fetchall():
     GuacamoleData.append(dict(zip(columns, row)))
print (json.dumps(GuacamoleData, indent=2))
GuacamoleData
CountryList = []
ProduceList = []

#Loop Through GuacamoleData
for i in range(0,len(GuacamoleData)):
    #List of Countries & List of Produce 
    CountryList.append(GuacamoleData[i]['Country'])
    ProduceList.append(eval(GuacamoleData[i]['Produce']))

#DF of Countries and Produce
CountryProducedf = pd.DataFrame(list(zip(CountryList,ProduceList)), columns=['Country', 'Produce'])

# Get Coordinates of Countries In GuacamoleData
import requests
r = requests.get('https://raw.githubusercontent.com/johan/world.geo.json/master/countries.geo.json')
CountCoord = r.json()


#Coordinate Dictionary, (List of Every COuntry in GEOJSON)
CountNameList=[]
CountCoordList=[]
for c in CountCoord['features']:
    CountNameList.append(c['properties']['name'])
    CountCoordList.append(c['geometry']['coordinates'])

#Create Dictionary of the Geojson Countries and their Coordinates
GeojsonDict = {CountNameList[i]: CountCoordList[i] for i in range(len(CountNameList))} 

#Create List of Coordinates that Match the Countries in CountryList
CoordList=[]
for i in range(len(CountryProducedf)):
    CoordList.append(GeojsonDict[CountryList[i]])

#Find Countries that Grow All Ingredients for Guacamole
GuacList = []
for i in range(len(ProduceList)):
    if len(ProduceList[i]) == 6:
        GuacList.append('Yes')
    else:
        GuacList.append('No')
    
#Create Composite Dict With all List Information and Prep for JS
CompositeDict=[]
for i in range(len(CountryList)):
    CompositeDict.append({'Country':CountryList[i],'Produce':ProduceList[i], 'Coordinates':CoordList[i], 'Guacamole':GuacList[i]})
CompositeDict = json.dumps(CompositeDict)



