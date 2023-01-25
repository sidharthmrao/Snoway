import { useState } from "react";
import { Text, TouchableOpacity, View, Image, ImageBackground } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { styles } from "./styles.js";

import LogOrSign from "../../Components/LogOrSign/LogOrSign.js";

export default function HelloScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../Assets/png/sled_logo.png")}
                    style={styles.imageSled}
                ></Image>
                <Image
                    source={require("../../Assets/png/text_logo.png")}
                    style={styles.imageTextLogo}
                ></Image>
            </View>
            <View style={styles.backgroundContainer}>
                <Image
                    source={require("../../Assets/png/snow02.gif")}
                    style={styles.backgroundSnow}
                ></Image>
            </View>
            <View style={styles.topContainer}>
                <LogOrSign message="Sign Up" navigation={navigation} />
                <View style={styles.loginSpace} />
                <LogOrSign message="Log In" navigation={navigation} />
            </View>
        </View>
    );
}
