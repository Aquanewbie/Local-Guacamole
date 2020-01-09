import psycopg2
import sys
import json
from  flask import Flask,render_template
from flask import jsonify

app = Flask(__name__)

@app.route('/')
def send_data():
    con = psycopg2.connect("host='localhost' dbname='Avocado' user='postgres' password='postgres'")  
    cur = con.cursor()
    cur.execute("SELECT * FROM guacamolecountries")
    columns = ('Countries', 'Produce')
    GuacamoleData = []
# Create a List of Dictionaries from the Data
#Code Reference: https://www.peterbe.com/plog/from-postgres-to-json-strings
    for row in cur.fetchall():
        GuacamoleData.append(dict(zip(columns, row)))
    print (json.dumps(GuacamoleData, indent=2))
    return render_template("index.html", GuacamoleData=GuacamoleData)

if __name__ == "__main__":
    app.run()