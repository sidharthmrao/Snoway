from flask import Flask, request
from mongo_utils import *

app = Flask(__name__)
user_controller = UserController()


@app.route("/login", methods=["POST"])
def login():
    args = request.get_json()

    try:
        username = args["username"]
        password = args["password"]
    except:
        return {
            "status": "failure",
            "message": "Missing or invalid arguments."
        }, 400

    user = user_controller.verify_auth(username, password)

    if user:
        return {
            "status": "success",
            "message": "Successfully logged in.",
            "uuid": user["uuid"],
            "username": user["username"],
            "full_name": user["full_name"],
            "email": user["email"],
            "bio": user["bio"],
            "city": user["city"],
            "reviews": user["reviews"]
        }, 200
    else:
        return {
            "status": "failure",
            "message": "Invalid credentials."
        }, 401


@app.route("/signup", methods=["POST"])
def sign_up():
    args = request.get_json()

    try:
        username = args["username"]
        password = args["password"]
        full_name = args["full_name"]
        email = str(args['email']).lower()
        city = args["city"]
    except Exception as e:
        return {
            "status": "failure",
            "message": "Missing required arguments."
        }, 400

    try:
        user_resp = user_controller.add_user(username, password, full_name, email, city)

        if user_resp == "Username already exists.":
            return {
                "status": "failure",
                "message": user_resp
            }, 400

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

    try:
        user_uuid = args["uuid"]
    except Exception as e:
        return {
            "status": "failure",
            "message": "Missing required arguments."
        }, 400

    user = user_controller.get_user(user_uuid)

    if user:
        return {
            "status": "success",
            "message": "User found.",
            "uuid": user["uuid"],
            "username": user["username"],
            "full_name": user["full_name"],
            "email": user["email"],
            "bio": user["bio"],
            "city": user["city"],
            "reviews": user["reviews"]
        }, 200
    else:
        return {
            "status": "failure",
        }, 401


@app.route("/edit_user", methods=["POST"])
def edit_user_data():
    args = request.get_json()

    try:
        user_uuid = args["uuid"]
        args = dict(args)
        args.pop("uuid")
        new_data = args
    except Exception as e:
        return {
            "status": "failure",
            "message": "Missing required arguments."
        }, 400

    if user_controller.edit_user(user_uuid, new_data):
        return {
            "status": "success",
            "message": "User found.",
        }, 200
    else:
        return {
            "status": "failure",
        }, 401

