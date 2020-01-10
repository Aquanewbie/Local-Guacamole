import psycopg2
import sys
import json
from  flask import Flask,render_template
from flask import jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def send_data():
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
    print (GuacamoleData[0]['Country'])
    #To Process A String As if it Were a List Use eval()
    ProduceList = eval(GuacamoleData[0]['Produce'])
    print(ProduceList[1])

#Get Coordinates of Countries In GuacamoleData
    with open('Coord_json/countries.geo.json', 'r') as CountCoordjson:
        CountCoord=CountCoordjson.read()
    CountCoords = json.loads(CountCoord)
    # print (CountCoords)
    return render_template("index.html", GuacamoleData=GuacamoleData, CountCoords=CountCoords)

response.setHeader("Set-Cookie", "HttpOnly;Secure;SameSite=Strict")

if __name__ == "__main__":
    app.run()