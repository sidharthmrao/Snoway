import { View, Text, TouchableOpacity } from "react-native";

import { signupReq } from "../../Helpers/AuthContext/signup.js";
import {loginReq} from "../../Helpers/AuthContext/login.js";
import { styles } from "./styles.js";


export default function LoginBtn({ navigation, ...props }) {

    function loginPageHandler() {
        actualLoginPageHandler();
    }

    async function actualLoginPageHandler() {
        data_res = await loginReq(props.email, props.password)
    }

    function signupPageHandler() {
        actualsignupPageHandler();
    }

    async function actualsignupPageHandler() {
        data_res = await getTeams(props.name, props.email, props.username, props.password, props.city)
    }

    if(props.message == "Sign Up") {

        return (
            <View style={styles.submitBtnContainer}>
                <TouchableOpacity style={styles.submitBtnStyle} onPress={signupPageHandler}>
                    <Text style={styles.submitBtnTxt}>{props.message}</Text>
                </TouchableOpacity>
            </View>
        )

    } else {

        return (
            <View style={styles.submitBtnContainer} onPress={loginPageHandler}>
                <TouchableOpacity style={styles.submitBtnStyle}>
                    <Text style={styles.submitBtnTxt}>{props.message}</Text>
                </TouchableOpacity>
            </View>
        )
    }
}