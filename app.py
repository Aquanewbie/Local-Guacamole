import psycopg2
import sys
import json
from  flask import Flask,render_template
from flask import jsonify
from flask_cors import CORS
#Avocado/Guacamole Variables 
import GuacVis
from GuacVis import CompositeDict


app = Flask(__name__)
CORS(app)

@app.route('/')
def rendervis():
    return render_template("index.html", 
        #Brandon's Variables
        CompositeDict=CompositeDict,
        AvoURl = ("/static/css/Avo.png")
        )

if __name__ == '__main__':
    app.run(debug=True)