import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles.js";

export default function LogOrSign({navigation, ...props}) {

    let navBar;

    if(props.message == "Log In") {
        navBar = () => navigation.navigate("login")
    } else {
        navBar = () => navigation.navigate("signup")
    }


    return (
        <View style={styles.signUp}>
            <TouchableOpacity onPress={navBar}>
            <Text style={styles.signUpText}>{props.message}</Text>
            </TouchableOpacity>
        </View>
    );
}
