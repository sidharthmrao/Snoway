import googlemaps
from datetime import datetime
import env
def find_nearby_spots(cur_location, database, radius = 50): #preferably gives
    working_list = []
    for candidateSled in database:
        matrix = gmaps.distance_matrix(cur_location, candidateSled)
        distance = matrix['rows'][0]['elements'][0]['distance']['value'] #distance in meters
        duration = matrix['rows'][0]['elements'][0]['duration']['text'] #time in minutes
        # print(matrix)
        # print(f'Distance: {distance} meters. Time: {duration}')
        info = {'uuid': candidateSled, 'distance': distance, 'time': duration }
        if(distance < radius * 1609): #radius in miles
            working_list.append(info)
    display_list = sorted(working_list, key=lambda d: d['distance'])
    return display_list


gmaps = googlemaps.Client(key=env.api_key)

cur_location = 'Wallingford, CT'
database = ['New Haven, CT', 'Los Angeles, CA', "Meriden, CT"]

print(f"env key: {env.api_key}")
print("Final: ")
print(find_nearby_spots(cur_location, database))





# Saves:
# now = datetime.now()
# directions_result = gmaps.directions(origin, destination, mode="transit", departure_time=now)
# # Validate an address with address validation
# addressvalidation_result =  gmaps.addressvalidation(['1600 Amphitheatre Pk'], regionCode='US', locality='Mountain View', enableUspsCass=True)
# print(geocode_result)
# print(reverse_geocode_result)
# print(addressvalidation_result)