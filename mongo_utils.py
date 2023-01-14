import pymongo
import uuid


class MongoController:
    def __init__(self):
        self.client = pymongo.MongoClient(
            "mongodb+srv://snowday:snowday@snowday.nktu0z5.mongodb.net/?retryWrites=true&w=majority")
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
                "uuid": user_uuid
            }
        )

        return user_uuid

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
    def add_location(self, location_coords, location_name, location_description, location_type, location_image, user_uuid):
        location = self.locations.find_one({"location_coords": location_coords})
        if location:
            return "Location already exists."

        user = self.users.find_one({"uuid": user_uuid})

        if not user:
            return "User not found."

        location_uuid = str(uuid.uuid4())

        self.locations.insert_one(
            {
                "uuid": location_uuid,
                "location_coords": location_coords,
                "location_name": location_name,
                "location_description": location_description,
                "location_type": location_type,
                "location_image": location_image,
                "user_uuid": user_uuid,
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

    def add_review(self, location_uuid: str, user_uuid: str, review_description: str, review_rating: str,  picture: str) -> object:
        review_uuid = str(uuid.uuid4())

        description = {
            "uuid": review_uuid,
            "review_description": review_description,
            "review_rating": review_rating,
            "user_uuid": user_uuid,
            "location_uuid": location_uuid,
            "picture": picture
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
