import pymongo
import uuid


class UserController:
    def __init__(self):
        self.client = pymongo.MongoClient(
            "mongodb+srv://snowday:snowday@snowday.nktu0z5.mongodb.net/?retryWrites=true&w=majority")
        self.db = self.client["SnowDay"]
        self.users = self.db["Users"]

    def add_user(self, username: str, password: str, full_name: str, email: str, city: str):
        user = self.users.find_one({"username": username})
        if user:
            return "Username already exists."

        user = self.users.find_one({"email": email})

        if user:
            return "Email already exists."

        return self.users.insert_one(
            {
                "username": username,
                "password": password,
                "full_name": full_name,
                "email": email,
                "bio": "",
                "reviews": [],
                "city": city,
                "uuid": str(uuid.uuid4())
            }
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
