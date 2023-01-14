import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { styles } from "./styles.js";

import LogOrSign from "../../Components/LogOrSign.js";

export default function HelloScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <LogOrSign message="Sign Up" navigation={navigation} />
            <View style={styles.loginSpace} />
            <LogOrSign message="Log In" navigation={navigation} />
        </View>
    );
}
