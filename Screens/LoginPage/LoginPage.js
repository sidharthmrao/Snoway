import { useState } from "react";
import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import {heightPercentageToDP as hp} from 'react-native-responsive-screen';

import SignupHeader from "../../Components/SignupHeader/SignupHeader.js"
import LoginBtn from "../../Components/LoginBtn/LoginBtn.js"

import { styles } from "./styles.js"

export default function LoginPage({ navigation }) {
    return (
        <View style={styles.container}>
            <SignupHeader message="login"/>
            <View style={styles.formInputEmail}>
                <TextInput placeholder="Email here..." style={styles.emailText}/>
                <View style={{marginTop: 20}} />
                <TextInput placeholder="Password here..." style={styles.emailText}/>
            </View>
            <LoginBtn message="Log In"/>
        </View>
    )
}