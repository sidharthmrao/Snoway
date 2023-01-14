import axios from 'axios';

export async function signupReq(name, email, username, password, city) {

    let returnVal = {
        "status": false
    };

    if(name.split(" ").length <= 2 && email.includes("@") && username != "" && password != "" && city != "") {

        try {
            const response = await axios({
                method: 'POST',
                //http://10.207.210.94:5000/signup
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
                alert("Signed up successfully");
                returnVal = {
                    "status": true,
                    "data": response.data
                }
            } else {
                alert("Error signing up")
            }

        } catch (error) {
            alert("Error signing up")
        }
    }

    return returnVal

}