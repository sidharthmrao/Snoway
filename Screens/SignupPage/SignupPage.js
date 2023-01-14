import { useState, useRef, useEffect } from "react";
import { Text, TouchableOpacity, View, Image, TextInput } from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import SignupHeader from "../../Components/SignupHeader/SignupHeader.js";
import LoginBtn from "../../Components/LoginBtn/LoginBtn.js";

import { styles } from "./styles.js";

export default function SignupPage({ navigation }) {

    return (
        <View style={styles.container}>
            <View style={styles.reformatSnoway}>
            <SignupHeader message="signup" />
            </View>
                <View style={styles.formInputEmail}>
                <TextInput placeholder="Full name..." style={styles.emailText} />
                <View style={{ marginTop: 10 }} />
                <TextInput placeholder="Email here..." style={styles.emailText} />
                <View style={{ marginTop: 10 }} />
                <TextInput placeholder="Username..." style={styles.emailText} />
                <View style={{ marginTop: 10 }} />
                <TextInput placeholder="Password here..." style={styles.emailText} />
                <View style={{ marginTop: 10 }} />
                <TextInput placeholder="Your City..." style={styles.emailText} />
            </View>
            <LoginBtn message="Sign Up" />
        </View>
    );
    }
