from flask import Flask,request,jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def hello_world():
    return "<p>Hello World</p>"


if __name__=='__main__':
    app.run(port = 8000, debug = True)