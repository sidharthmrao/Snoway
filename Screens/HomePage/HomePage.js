import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { styles } from "./styles.js";

//props.route.params.data

export default function HomePage({navigation, ...props}) {
    return (
        <View style={styles.container}>
            <Text>Home Page</Text>
        </View>
    )
}