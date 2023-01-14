import axios from 'axios';

export async function createPost(location_coords, location_description, location_image, user_uuid) {

    let returnVal = {
        "status": false
    };

    if(location_image != "" && location_description != "") {

        try {
            const response = await axios({
                method: 'POST',
                url: "http://10.207.210.94:5000/add_location",
                headers: {
                    'Content-Type': 'application/json',
                },
                data: {
                    "location_coords": {
                        "latitude": location_coords.latitude,
                        "longitude": location_coords.longitude
                    },
                    "location_description": location_description,
                    "location_image": location_image,
                    "user_uuid": user_uuid,
                    "location_type": "sledding"
                }
            })

            if (response.status == 200) {
                returnVal = {
                    "status": 200,
                    "data": response.data.uuid
                }
            } else {
                console.log(response.data)
                alert("Error creating post")
            }

        } catch (error) {
            if (error.status == 400) {
                alert("Location already exists")
                returnVal = {
                    "status": 400,
                }
            } else {
                alert("Error creating post")
            }
        }

    }

    return returnVal

}