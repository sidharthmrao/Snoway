import { useState, useRef, useEffect } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    KeyboardAvoidingView,
    Image,
    TextInput,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import SignupHeader from "../../Components/SignupHeader/SignupHeader.js";
import LoginBtn from "../../Components/LoginBtn/LoginBtn.js";

import { styles } from "./styles.js";

export default function SignupPage({ navigation }) {
    const [nameVal, updateNameVal] = useState("");
    const [emailVal, updateEmailVal] = useState("");
    const [usernameVal, updateUsernameVal] = useState("");
    const [passwordVal, updatePasswordVal] = useState("");
    const [cityVal, updateCityVal] = useState("");

    function updateNameComp(textUpdate) {
        updateNameVal(textUpdate);
    }
    function updateEmailComp(textUpdate) {
        updateEmailVal(textUpdate);
    }
    function updateUsernameComp(textUpdate) {
        updateUsernameVal(textUpdate);
    }
    function updatePasswordComp(textUpdate) {
        updatePasswordVal(textUpdate);
    }
    function updateCityComp(textUpdate) {
        updateCityVal(textUpdate);
    }

    return (
        <KeyboardAvoidingView style={{flex: 1}} behavior="padding" enabled>
            <View style={styles.container}>
                <View style={styles.reformatSnoway}>
                    <SignupHeader message="signup" />
                </View>
                <View style={styles.formInputEmail}>
                    <TextInput
                        placeholder="Full name..."
                        style={styles.emailText}
                        onChangeText={updateNameComp}
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={nameVal}
                    />
                    <View style={{ marginTop: 10 }} />
                    <TextInput
                        placeholder="Email here..."
                        style={styles.emailText}
                        onChangeText={updateEmailComp}
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={emailVal}
                    />
                    <View style={{ marginTop: 10 }} />
                    <TextInput
                        placeholder="Username..."
                        style={styles.emailText}
                        onChangeText={updateUsernameComp}
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={usernameVal}
                    />
                    <View style={{ marginTop: 10 }} />
                    <TextInput
                        placeholder="Password here..."
                        style={styles.emailText}
                        onChangeText={updatePasswordComp}
                        autoCorrect={false}
                        secureTextEntry={true}
                        autoCapitalize='none'
                        value={passwordVal}
                    />
                    <View style={{ marginTop: 10 }} />
                    <TextInput
                        placeholder="Your City..."
                        style={styles.emailText}
                        onChangeText={updateCityComp}
                        autoCorrect={false}
                        autoCapitalize='none'
                        value={cityVal}
                    />
                </View>
                <LoginBtn
                    message="Sign Up"
                    name={nameVal}
                    email={emailVal}
                    username={usernameVal}
                    password={passwordVal}
                    city={cityVal}
                />
            </View>
        </KeyboardAvoidingView>
    );
}
