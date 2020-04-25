from flask import Flask

app = Flask(__name__)

@app.route('/login', methods=['POST']) # root of domain
def login():
  return "Hello World!"

app.run(port=5000)