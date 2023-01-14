import axios from 'axios';

export async function draftVote(location_uuid, user_uuid, vote) {

    let returnVal = {
        "status": false
    };

    try {
        const response = await axios({
            method: 'POST',
            url: "http://10.207.210.94:5001/add_review",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                "location_uuid": location_uuid,
                "user_uuid": user_uuid,
                "review_rating": vote,
                "review_description": ""
            }
        })

        if (response.status == 200) {
            returnVal = {
                "status": 200,
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