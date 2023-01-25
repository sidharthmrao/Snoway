import googlemaps
import env


class GmapController:
    def __init__(self):
        self.gmaps = googlemaps.Client(key=env.GOOGLE_MAPS_API_KEY)

    def get_address(self, lat: float, lng: float):
        return self.gmaps.reverse_geocode((lat, lng))

    def get_latlng(self, address: str):
        return self.gmaps.geocode(address)

    def get_distance(self, origin_address: str, destination_address: str):  # address, address
        try:
            distance_matrix = self.gmaps.distance_matrix(origin_address, destination_address)
            return {
                "distance": distance_matrix["rows"][0]["elements"][0]["distance"]["value"],
                "duration": distance_matrix["rows"][0]["elements"][0]["duration"]["text"]
            } if distance_matrix else None
        except:
            return None

    def within_radius(self, origin_address: str, destination_address: str, radius: float):  # radius miles
        distance_matrix = self.get_distance(origin_address, destination_address)
        if distance_matrix is not None and float(distance_matrix["distance"]) <= (radius * 1609.34):
            return distance_matrix
        else:
            return None
