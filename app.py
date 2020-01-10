import psycopg2
import sys
import json
from  flask import Flask,render_template
from flask import jsonify
from flask_cors import CORS
import GuacVis
from GuacVis import GuacamoleData, CountCoord

app = Flask(__name__)
CORS(app)

@app.route('/')
def rendervis():
    return render_template("index.html", GuacamoleData=GuacamoleData, CountCoord=CountCoord)

if __name__ == "__main__":
    app.run()