import axios from 'axios';

export async function getProfile(uuid) {

    let returnVal = {
        "status": false
    };

    try {
        const response = await axios({
            method: 'POST',
            url: "http://10.207.210.94:5001/profile",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                "uuid": uuid
            }
        })

        if (response.status == 200) {
            returnVal = {
                "status": 200,
                "data": {
                    "username": response.data.username,
                    "full_name": response.data.full_name,
                }
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