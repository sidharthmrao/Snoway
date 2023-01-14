import axios from 'axios';

export async function getAllPosts(coords) {

    console.log("HI")

    let returnVal = {
        "status": false
    };

    try {
        const response = await axios({
            method: 'POST',
            url: "http://10.207.210.94:5001/get_locations_in_radius",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                "current_coords": {
                    "latitude": coords.latitude,
                    "longitude": coords.longitude
                },
                "radius": "10"
            }   
        })

        if (response.status == 200) {
            returnVal = {
                "status": 200,
                "data": response.data
            }
        } else {
            console.log(response.data)
        }

    } catch (error) {
        console.log(error.response.data)
        if (error.status == 400) {
            console.log(error)
            returnVal = {
                "status": 400,
            }
        } else {
            console.log(error)
        }
    }


    return returnVal

}