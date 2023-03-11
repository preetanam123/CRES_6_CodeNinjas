from flask import Flask,request,jsonify
from flask_cors import CORS
import json
import pandas as pd
import predict
import pickle
import numpy as np
# import mongo
svc_model = pickle.load(open('model3.pkl','rb'))
app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return "<p>Hello World</p>"

@app.route('/rec', methods=['POST'])    
def rec():
    jsonData = request.get_json()
    l=[]
    l.append(jsonData['lymphocytes'])
    l.append(jsonData['platelets'])
    l.append(jsonData['RBCs'])
    l.append(jsonData['haemoglobin'])
    arr = np.array(l)

    arr2 = arr.reshape(1,-1)

    

    ans = predict.classify(svc_model.predict(arr2))
    return ans


    


if __name__=='__main__':
    app.run(port = 8000, debug = True)