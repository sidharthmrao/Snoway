import math

import pymongo
import uuid
from flask import json


class MongoController:
    def __init__(self, gmap_controller):
        self.client = pymongo.MongoClient(
            "mongodb+srv://snowday:snowday@snowday.nktu0z5.mongodb.net/?retryWrites=true&w=majority")
        self.gmap_controller = gmap_controller
        self.db = self.client["SnowDay"]
        self.users = self.db["Users"]
        self.locations = self.db["Locations"]
        self.reviews = self.db["Reviews"]

    def add_user(self, username: str, password: str, full_name: str, email: str, city: str):
        user = self.users.find_one({"username": username})
        if user:
            return "Username already exists."

        user = self.users.find_one({"email": str(email).lower()})
        if user:
            return "Email already exists."

        user_uuid = str(uuid.uuid4())

        self.users.insert_one(
            {
                "username": username,
                "password": password,
                "full_name": full_name,
                "email": email,
                "bio": "",
                "reviews": [],
                "locations": [],
                "city": city,
                "picture": "",
                "uuid": user_uuid
            }
        )

        return self.users.find_one(
            {"uuid": user_uuid}
        )

    def get_user(self, user_uuid: str):
        user = self.users.find_one(
            {"uuid": user_uuid}
        )

        return user

    def edit_user(self, user_uuid: str, new_data: dict):
        if "email" in new_data.keys():
            new_data["email"] = str(new_data["email"]).lower()

        update_result = self.users.update_one(
            {"uuid": user_uuid},
            {"$set": new_data}
        )

        if update_result.acknowledged:
            return True
        else:
            return False

    def verify_auth(self, username: str, password: str):
        user = self.users.find_one(
            {"username": username, "password": password}
        )

        if user is None:
            user = self.users.find_one(
                {"email": str(username).lower(), "password": password}
            )
            if user is None:
                return False
            elif user["password"] == password:
                return user
            else:
                return user

        elif user["password"] != password:
            return False
        else:
            return user

    ######## LOCATION ########
    def add_location(self, location_coords, location_description, location_type, location_image,
                     user_uuid):

        try:
            address = self.gmap_controller.get_address(location_coords["latitude"], location_coords["longitude"])[0][
                "formatted_address"]
            if address is None:
                return "Invalid coordinates."
        except:
            return "Invalid coordinates."

        location = self.locations.find_one({
            "location_address": address,
        })

        if location:
            return "Location already exists.", location.get("uuid")

        user = self.users.find_one({"uuid": user_uuid})

        if not user:
            return "User not found."

        location_uuid = str(uuid.uuid4())

        self.locations.insert_one(
            {
                "uuid": location_uuid,
                "location_coords": location_coords,
                "location_address": address,
                "location_description": location_description,
                "location_type": location_type,
                "location_image": location_image,
                "user_uuid": user_uuid,
                "location_review_average": 0,
                "location_reviews": []
            }
        )

        self.users.update_one(
            {"uuid": user_uuid},
            {"$push": {"locations": location_uuid}}
        )

        return location_uuid

    def get_location(self, location_uuid: str):
        location = self.locations.find_one(
            {"uuid": location_uuid}
        )

        return location

    def add_review(self, location_uuid: str, user_uuid: str, review_description: str, review_rating: str) -> object:
        review_uuid = str(uuid.uuid4())

        description = {
            "uuid": review_uuid,
            "review_description": review_description,
            "review_rating": review_rating,
            "user_uuid": user_uuid,
            "location_uuid": location_uuid,
        }

        location = self.locations.find_one({"uuid": location_uuid})

        if not location:
            return "Location not found."

        user = self.users.find_one({"uuid": user_uuid})

        if not user:
            return "User not found."

        location_reviews = self.locations.find_one({"uuid": location_uuid})["location_reviews"]

        for review in location_reviews:
            if self.reviews.find_one({"uuid": review})["user_uuid"] == user_uuid:
                return "User already reviewed this location."

        self.locations.update_one(
            {"uuid": location_uuid},
            {"$push": {"location_reviews": description["uuid"]}}
        )

        self.users.update_one(
            {"uuid": user_uuid},
            {"$push": {"reviews": description["uuid"]}}
        )

        self.reviews.insert_one(description)

        return review_uuid

    def get_review(self, review_uuid: str):
        review = self.reviews.find_one(
            {"uuid": review_uuid}
        )

        return review

    def get_location_reviews(self, location_uuid):
        try:
            location = self.locations.find_one({"uuid": location_uuid})
            review_uuid_list = location.get("location_reviews")
            response = {}
            for num, review_uuid in enumerate(review_uuid_list):
                review = self.get_review(review_uuid)

                if review:
                    response[num] = {
                        "uuid": review["uuid"],
                        "location_uuid": review["location_uuid"],
                        "user_uuid": review["user_uuid"],
                        "review_description": review["review_description"],
                        "review_rating": review["review_rating"],
                        "location_review_average": location["location_review_average"]
                    }

            return response
        except:
            return None

    def get_user_reviews(self, user_uuid):
        try:
            user = self.users.find_one({"uuid": user_uuid})
            review_uuid_list = user.get("reviews")
            response = {}
            for num, review_uuid in enumerate(review_uuid_list):
                review = self.get_review(review_uuid)

                if review:
                    response[num] = {
                        "uuid": review["uuid"],
                        "location_uuid": review["location_uuid"],
                        "user_uuid": review["user_uuid"],
                        "review_description": review["review_description"],
                        "location_review_average": review["location_review_average"],
                    }

            return response
        except Exception:
            return None

    def get_user_locations(self, user_uuid):
        try:
            user = self.users.find_one({"uuid": user_uuid})
            location_uuid_list = user.get("locations")
            response = {}
            for num, location_uuid in enumerate(location_uuid_list):
                location = self.get_location(location_uuid)

                if location:
                    response[num] = {
                        "uuid": location["uuid"],
                        "location_coords": location["location_coords"],
                        "location_address": location["location_address"],
                        "location_name": location["location_name"],
                        "location_description": location["location_description"],
                        "location_type": location["location_type"],
                        "location_image": location["location_image"],
                        "user_uuid": location["user_uuid"],
                        "location_reviews": location["location_reviews"],
                        "location_review_average": location["location_review_average"]
                    }

            return response
        except:
            return None

    def get_locations_in_radius(self, current_coords, radius: str):  # radius in miles
        radius = float(radius)

        current_coords = {
            "longitude": float(current_coords["longitude"]),
            "latitude": float(current_coords["latitude"])
        }

        current_address = \
            self.gmap_controller.get_address(current_coords["latitude"], current_coords["longitude"])[0][
                "formatted_address"]

        locations = self.locations.find()
        response = []

        for num, location in enumerate(locations):
            if location:
                location_raw_coords = {
                    "longitude": float(location["location_coords"]["longitude"]),
                    "latitude": float(location["location_coords"]["latitude"])
                }

                R = 6371 * (10 ** 3)
                phi1 = math.radians(current_coords["latitude"])
                phi2 = math.radians(location_raw_coords["latitude"])
                delta_phi = math.radians(location_raw_coords["latitude"] - current_coords["latitude"])
                delta_lambda = math.radians(location_raw_coords["longitude"] - current_coords["longitude"])

                a = math.sin(delta_phi / 2) * math.sin(delta_phi / 2) * math.cos(phi1) * math.cos(phi2) * math.sin(
                    delta_lambda / 2) * math.sin(delta_lambda / 2)

                c = 2 * math.atan2(math.sqrt(a), math.sqrt(1 - a))
                d = R * c

                if d <= (radius * 1609.34):

                    location_distance_matrix = self.gmap_controller.within_radius(current_address,
                                                                                  location.get("location_address"),
                                                                                  radius)
                    if location_distance_matrix:
                        response.append({
                            "uuid": location["uuid"],
                            "location_coords": location["location_coords"],
                            "location_address": location["location_address"],
                            "location_description": location["location_description"],
                            "location_type": location["location_type"],
                            "location_image": location["location_image"],
                            "location_review_average": location["location_review_average"],
                            "user_uuid": location["user_uuid"],
                            "location_reviews": location["location_reviews"],
                            "travel_time": location_distance_matrix["duration"],
                            "travel_distance": location_distance_matrix["distance"],
                        })

        return response if (response or response == []) else None
