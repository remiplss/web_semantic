

from flask import Flask, request
import pandas as pd
import json
from similarity import *

app = Flask(__name__)
df = pd.read_csv(r'connectedObjects.csv')
df.transpose().to_json("js.json")



f = open("js.json")
data = json.load(f)
@app.route("/")
def home():
    return {""}

@app.route("/members")
def members():
    return data


@app.route('/similar/<name>',methods = ['POST', 'GET'])
def similar(name):
    
    if request.method == 'POST':
        name = name.replace("name=","")
        similar_object = similarity(name)
        
        return similar_object.to_json()

    if request.method == 'GET':
        return similar_object
  


if __name__ == "__main__":
    app.run(debug=True)