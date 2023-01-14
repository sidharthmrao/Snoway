import axios from 'axios';

export async function signupReq(name, email, username, password, city) {

    let returnVal = false;

    try {
        const response = await axios({
            method: 'POST',
            url: "http://10.207.210.94:5000/signup",
            headers: {
                'Content-Type': 'application/json',
            },
            data: {
                "username": username,
                "password": password,
                "full_name": name,
                "email": email,
                "city": city
            }
        })

        if (response.status == 200) {
            console.log(response.data)
            alert("Signed up successfully");
            returnVal = response.data;
        } else {
            alert("Error signing up")
        }

    } catch (error) {
        console.log(error)
        alert("Error logging in")
    }

    return returnVal

}