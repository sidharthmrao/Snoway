import { useState } from "react";
import { Text, TouchableOpacity, View, Image } from "react-native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import { styles } from "./styles.js"

export default function LoginPage({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Login Page</Text>
        </View>
    )
}