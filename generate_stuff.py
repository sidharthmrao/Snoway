import requests
import json
from random import randint, choice

for i in range(20):
    user_seed = randint(0, 1000000)

    url = "http://127.0.0.1:5000/signup"

    payload = json.dumps({
      "username": "test_username_"+str(user_seed),
      "password": "test_password_"+str(user_seed),
      "full_name": "test name_"+str(user_seed),
      "email": "test@email.com_"+str(user_seed),
      "city": "test_city"
    })
    headers = {
      'Content-Type': 'application/json'
    }

    user = requests.request("POST", url, headers=headers, data=payload)

    url = "http://127.0.0.1:5000/add_location"

    payload = json.dumps({
      "location_coords": str(randint(1000000, 100000000)),
      "location_name": "Montgomery Hill Sledding Spot",
      "location_description": "Nice spot for sledding.",
      "location_type": "sledding",
      "location_image": "B64IMAGE",
      "user_uuid": user.json()["uuid"]
    })
    headers = {
      'Content-Type': 'application/json'
    }

    location = requests.request("POST", url, headers=headers, data=payload)

    url = "http://127.0.0.1:5000/add_review"

    payload = json.dumps({
      "location_uuid": location.json()["uuid"],
      "user_uuid": user.json()["uuid"],
      "review_description": "Nice spot for sledding, I especially like the wintry trees.",
      "review_rating": choice("positive, negative"),
    })
    headers = {
      'Content-Type': 'application/json'
    }

    review = requests.request("POST", url, headers=headers, data=payload)

    url = "http://127.0.0.1:5000/add_location"

    payload = json.dumps({
      "location_coords": str(randint(1000000, 100000000)),
      "location_name": "Montgomery Hill Sledding Spot",
      "location_description": "Nice spot for sledding.",
      "location_type": "sledding",
      "location_image": "B64IMAGE",
      "user_uuid": user.json()["uuid"]
    })
    headers = {
      'Content-Type': 'application/json'
    }

    location = requests.request("POST", url, headers=headers, data=payload)

    url = "http://127.0.0.1:5000/add_review"

    payload = json.dumps({
      "location_uuid": location.json()["uuid"],
      "user_uuid": user.json()["uuid"],
      "review_description": "Nice spot for sledding, I especially like the wintry trees.",
      "review_rating": choice("positive, negative"),
    })
    headers = {
      'Content-Type': 'application/json'
    }

    review = requests.request("POST", url, headers=headers, data=payload)

    print("Done with user "+str(i))
