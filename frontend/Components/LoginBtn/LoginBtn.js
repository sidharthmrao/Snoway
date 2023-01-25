import { View, Text, TouchableOpacity } from "react-native";

import { signupReq } from "../../Helpers/AuthContext/signup.js";
import { loginReq } from "../../Helpers/AuthContext/login.js";
import { styles } from "./styles.js";

export default function LoginBtn({ navigation, ...props }) {
    let data_res;

    function loginPageHandler() {
        actualLoginPageHandler();
    }

    async function actualLoginPageHandler() {
        
        data_res = await loginReq(props.email, props.password);

        if (data_res.status) {
            await navigation.navigate("homepage", {
                data: data_res.data
            });
        }
    }

    function signupPageHandler() {
        actualsignupPageHandler();
    }

    async function actualsignupPageHandler() {
        data_res = await signupReq(
            props.name,
            props.email,
            props.username,
            props.password,
            props.city
        );
        if (data_res.status) {
            await navigation.navigate("homepage", {
                data: data_res.data
            });
        }
    }

    if (props.message == "Sign Up") {
        return (
            <View style={styles.submitBtnContainer}>
                <TouchableOpacity
                    style={styles.submitBtnStyle}
                    onPress={signupPageHandler}
                >
                    <Text style={styles.submitBtnTxt}>{props.message}</Text>
                </TouchableOpacity>
            </View>
        );
    } else {
        return (
            <View style={styles.submitBtnContainer}>
                <TouchableOpacity
                    style={styles.submitBtnStyle}
                    onPress={loginPageHandler}
                >
                    <Text style={styles.submitBtnTxt}>{props.message}</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
