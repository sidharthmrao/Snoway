import axios from 'axios';

export async function getPost(uuid) {

    console.log(uuid)

    let returnVal = {
        "status": false
    };

    try {
        const response = await axios({
            method: 'POST',
            url: "http://10.207.210.94:5001/get_location",
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