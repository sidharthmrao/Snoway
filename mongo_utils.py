import pymongo
import uuid


class MongoController:
    def __init__(self):
        self.client = pymongo.MongoClient(
            "mongodb+srv://snowday:snowday@snowday.nktu0z5.mongodb.net/?retryWrites=true&w=majority")
        self.db = self.client["SnowDay"]

        self.users = self.db["Users"]

    def add_user(self, username: str, password: str, full_name: str, email: str):
        self.users.insert_one(
            {
                "username": username,
                "password": password,
                "full_name": full_name,
                "email": email,
                "bio": "",
                "uuid": str(uuid.uuid4())
            }
        )

    def get_user(self, user_uuid: str):
        user = self.users.find_one(
            {"uuid": user_uuid}
        )

        return user

    def verify_auth(self, username, password):
        user = self.users.find_one({"username": username})

        if user is None:
            return False
        elif user["password"] != password:
            return False
        else:
            return user


def verify_auth(username, password):
    return username == "meow" and password == "meow"
