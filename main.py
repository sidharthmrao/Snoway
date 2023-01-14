from flask import Flask, request
from markupsafe import escape

from mongo_utils import *

app = Flask(__name__)
controller = MongoController()

controller.display_db()

@app.route("/login")
def hello_world():
    username = request.args.get('username')
    password = request.args.get('password')
    return f"{verify_auth(escape(username), escape(password))}"
