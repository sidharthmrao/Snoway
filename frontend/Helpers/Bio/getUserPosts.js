import axios from 'axios';

export async function createPost(uuid) {

    let returnVal = {
        "status": false
    };


    try {
        const response = await axios({
            method: 'POST',
            url: "http://10.207.210.94:5001/get_user_locations",
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
                "data": response.data
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

    return returnVal

}