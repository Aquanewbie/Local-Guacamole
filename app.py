import psycopg2
import sys
import json
from  flask import Flask,render_template
from flask import jsonify
from flask_cors import CORS
#Brandon's Variables 
import GuacVis
from GuacVis import CountryList, ProduceDict, GuacamoleData, CountCoord, CompositeDict, CoordDict
#Amy's Variables
#import
#from____import_____
#Ky's Variables
#from____import_____
#Huy's Variables
#from____import_____

app = Flask(__name__)
CORS(app)

@app.route('/')
def rendervis():
    return render_template("index.html", 
        #Brandon's Variables
        CoordDict= CoordDict, GuacamoleData=GuacamoleData, CountCoord=CountCoord, CountryList=CountryList, ProduceDict=ProduceDict, CompositeDict=CompositeDict
        #Amy's Variables

        #Ky's Variables

        #Huy's Variables
        )

if __name__ == '__main__':
    app.run(debug=True)