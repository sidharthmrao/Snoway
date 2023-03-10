from flask import Flask, request
from mongo_utils import *
from gmap_utils import *

app = Flask(__name__)
gmap_controller = GmapController()
user_controller = MongoController(gmap_controller)


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
                   "reviews": user["reviews"],
                   "locations": user["locations"],
                   "picture": user["picture"]
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
        elif user_resp == "Email already exists.":
            return {
                       "status": "failure",
                       "message": user_resp
                   }, 400
        else:
            return {
                       "status": "success",
                       "message": "User found.",
                       "uuid": user_resp["uuid"],
                       "username": user_resp["username"],
                       "full_name": user_resp["full_name"],
                       "email": user_resp["email"],
                       "bio": user_resp["bio"],
                       "city": user_resp["city"],
                       "reviews": user_resp["reviews"],
                       "locations": user_resp["locations"],
                       "picture": user_resp["picture"]
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
                   "bio": user["bio"],
                   "city": user["city"],
                   "reviews": user["reviews"],
                   "locations": user["locations"],
                   "picture": user["picture"]
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


@app.route("/add_location", methods=["POST"])
def add_location():
    args = request.get_json()

    try:
        location_coords = {
            "longitude": args["location_coords"]["longitude"],
            "latitude": args["location_coords"]["latitude"],
        }
        location_description = args["location_description"]
        location_type = args["location_type"]
        location_image = args["location_image"]
        user_uuid = args["user_uuid"]

    except Exception as e:
        return {
                   "status": "failure",
                   "message": "Missing required arguments."
               }, 400

    location_response = user_controller.add_location(location_coords, location_description,
                                                     location_type, location_image, user_uuid)

    if location_response[0] == "Location already exists.":
        return {
                   "status": "failure",
                   "message": "Location already exists.",
                   "uuid": location_response[1]
               }, 400

    elif location_response == "User not found.":
        return {
                   "status": "failure",
                   "message": "User not found."
               }, 400

    elif location_response == "Invalid coordinates.":
        return {
                   "status": "failure",
                   "message": "Invalid coordinates."
               }, 400

    elif location_response:
        return {
                   "status": "success",
                   "message": "Location added.",
                   "uuid": location_response,
               }, 200

    else:
        return {
                   "status": "failure",
               }, 401


@app.route("/get_location", methods=["POST"])
def get_location():
    args = request.get_json()
    try:
        location_uuid = args["uuid"]
    except Exception as e:
        return {
                   "status": "failure",
                   "message": "Missing required arguments."
               }, 400

    location = user_controller.get_location(location_uuid)

    if location:
        return {
                   "status": "success",
                   "message": "Location found.",
                   "uuid": location["uuid"],
                   "location_coords": location["location_coords"],
                   "location_address": location["location_address"],
                   "location_description": location["location_description"],
                   "location_type": location["location_type"],
                   "location_image": location["location_image"],
                   "location_reviews": location["location_reviews"],
                   "location_review_average": int(float(location["location_review_average"])*100),
                   "user_uuid": location["user_uuid"]
               }, 200
    else:
        return {
                   "status": "failure",
                   "message": "Location not found."
               }, 401


@app.route("/add_review", methods=["POST"])
def add_review():
    args = request.get_json()

    try:
        location_uuid = args["location_uuid"]
        user_uuid = args["user_uuid"]
        review_description = args["review_description"]
        review_rating = args["review_rating"]
    except Exception as e:
        return {
                   "status": "failure",
                   "message": "Missing required arguments."
               }, 400

    review_response = user_controller.add_review(location_uuid, user_uuid, review_description, review_rating)

    if review_response == "Location not found.":
        return {
                   "status": "failure",
                   "message": "Location not found."
               }, 400
    elif review_response == "User not found.":
        return {
                   "status": "failure",
                   "message": "User not found."
               }, 400
    elif review_response == "User already reviewed this location.":
        return {
                   "status": "failure",
                   "message": "User already reviewed this location."
               }, 400
    elif review_response:
        return {
                   "status": "success",
                   "message": "Review added.",
                   "uuid": review_response,
               }, 200
    else:
        return {
                   "status": "failure",
               }, 401


@app.route("/get_review", methods=["POST"])
def get_review():
    args = request.get_json()
    try:
        review_uuid = args["uuid"]
    except Exception as e:
        return {
                   "status": "failure",
                   "message": "Missing required arguments."
               }, 400

    review = user_controller.get_review(review_uuid)

    if review:
        return {
                   "status": "success",
                   "message": "Review found.",
                   "uuid": review["uuid"],
                   "location_uuid": review["location_uuid"],
                   "user_uuid": review["user_uuid"],
                   "review_description": review["review_description"],
                   "review_rating": review["review_rating"]
               }, 200
    else:
        return {
                   "status": "failure",
                   "message": "Review not found."
               }, 401


@app.route("/get_location_reviews", methods=["POST"])
def get_location_reviews():
    args = request.get_json()
    try:
        location_uuid = args["uuid"]
    except Exception as e:
        return {
                   "status": "failure",
                   "message": "Missing required arguments."
               }, 400

    reviews = user_controller.get_location_reviews(location_uuid)

    if reviews:
        return {
                   "status": "success",
                   "message": "Reviews found.",
                   "reviews": reviews,
               }, 200
    else:
        return {
                   "status": "failure",
                   "message": "Fatal error."
               }, 401


@app.route("/get_user_reviews", methods=["POST"])
def get_user_reviews():
    args = request.get_json()
    try:
        user_uuid = args["uuid"]
    except Exception as e:
        return {
                   "status": "failure",
                   "message": "Missing required arguments."
               }, 400

    reviews = user_controller.get_user_reviews(user_uuid)

    if reviews == "User not found.":
        return {
                   "status": "failure",
                   "message": "User not found."
               }, 400

    elif reviews or reviews == []:
        return {
                   "status": "success",
                   "message": "Reviews found.",
                   "reviews": reviews
               }, 200
    else:
        return {
                   "status": "failure",
                   "message": "Fatal error."
               }, 401


@app.route("/get_user_locations", methods=["POST"])
def get_user_locations():
    args = request.get_json()
    try:
        user_uuid = args["uuid"]
    except Exception:
        return {
                   "status": "failure",
                   "message": "Missing required arguments."
               }, 400

    locations = user_controller.get_user_locations(user_uuid)

    if locations == "User not found.":
        return {
                   "status": "failure",
                   "message": "User not found."
               }, 400

    elif locations or locations == []:
        return {
                   "status": "success",
                   "message": "Locations found.",
                   "locations": locations
               }, 200
    else:
        return {
                   "status": "failure",
                   "message": "Fatal error."
               }, 401


@app.route("/get_locations_in_radius", methods=["POST"])
def get_locations_in_radius():
    args = request.get_json()
    try:
        current_coords = {
            "longitude": args["current_coords"]["longitude"],
            "latitude": args["current_coords"]["latitude"]
        }
        radius = args["radius"]
    except Exception:
        return {
                   "status": "failure",
                   "message": "Missing required arguments."
               }, 400

    locations = user_controller.get_locations_in_radius(current_coords, radius)

    if locations or locations == []:
        return {
                   "status": "success",
                   "message": "Locations found.",
                   "locations": sorted(locations, key=lambda k: float(k['travel_distance']))
               }, 200
    else:
        return {
                   "status": "failure",
                   "message": "Fatal error."
               }, 401
