import { View, Text, Image } from "react-native";

import { styles } from "./styles.js";

export default function SignupHeader(props) {

    let displayMsg = "";

    if(props.message == "login") {
        displayMsg = "Welcome Back."
    } else {
        displayMsg = "Snoway! You're here"
    }

    return (
        <View style={styles.container2}>
            <View style={styles.imageContainer}>
            <Image
                source={require("../../Assets/png/sleddingsignup.png")}
                style={styles.imageSled}
            ></Image>
            </View>
            <View style={styles.topContainer}>
            <Text style={styles.welcomeText}>{displayMsg}</Text>
            </View>
        </View>
    );
}
