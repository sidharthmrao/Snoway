import pymongo


class MongoController:
    def __init__(self):
        self.client = pymongo.MongoClient(
            "mongodb+srv://snowday:snowday@snowday.nktu0z5.mongodb.net/?retryWrites=true&w=majority")
        self.db = self.client.list_database_names()

    def display_db(self):
        print(self.db)


def verify_auth(username, password):
    return username == "meow" and password == "meow"
