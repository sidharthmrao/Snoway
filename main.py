from flask import Flask, request
from mongo_utils import *

app = Flask(__name__)
db_controller = MongoController()


@app.route("/login", methods=["POST"])
def login():
    args = request.get_json()
    username = args["username"]
    password = args["password"]

    user = db_controller.verify_auth(username, password)

    if user:
        return {
            "status": "success",
            "message": "Successfully logged in.",
            "uuid": user["uuid"],
            "username": user["username"],
            "full_name": user["full_name"],
            "email": user["email"],
            "bio": user["bio"],
        }, 200
    else:
        return {
            "status": "failure",
        }, 401


@app.route("/signup", methods=["POST"])
def sign_up():
    args = request.get_json()
    username = args["username"]
    password = args["password"]
    full_name = args["full_name"]
    email = args['email']
    try:
        db_controller.add_user(username, password, full_name, email)
        return {
            "status": "success",
            "message": "Successfully signed up."
        }, 200
    except Exception as e:
        return {
            "status": "failure",
        }, 500


@app.route("/profile", methods=["POST"])
def get_user_data():
    args = request.get_json()
    user_uuid = args["uuid"]

    user = db_controller.get_user(user_uuid)

    if user:
        return {
            "status": "success",
            "message": "User found.",
            "uuid": user["uuid"],
            "username": user["username"],
            "full_name": user["full_name"],
            "email": user["email"],
            "bio": user["bio"],
        }, 200
    else:
        return {
            "status": "failure",
        }, 401
