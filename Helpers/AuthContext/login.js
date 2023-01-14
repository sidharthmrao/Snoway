import axios from 'axios';

export async function loginReq(email, password) {

    let returnVal = false;

    try {
        const response = await axios({
            method: 'POST',
            url: "http://10.207.210.94:5000/login",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                "username": email,
                "password": password
            }
        })

        if (response.status == 200) {
            console.log(response.data)
            alert("Logged in successfully");
            returnVal = response.data;
        } else {
            alert("Error logging in")
        }

    } catch (error) {
        console.log(error)
        alert("Error logging in")
    }

    return returnVal

}