import { useState } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import SignupHeader from "../../Components/SignupHeader/SignupHeader.js";
import LoginBtn from "../../Components/LoginBtn/LoginBtn.js";

import { styles } from "./styles.js";

export default function LoginPage({ navigation }) {
    const [emailVal, updateEmailVal] = useState("");
    const [passwordVal, updatePasswordVal] = useState("");

    function updatePassComp(textUpdate) {
        updatePasswordVal(textUpdate);
    }

    function updateEmailComp(textUpdate) {
        updateEmailVal(textUpdate);
    }

    return (
        <KeyboardAvoidingView style={{ flex: 1 }} behavior="padding" enabled>
            <View style={styles.container}>
                <SignupHeader message="login" />
                <View style={styles.formInputEmail}>
                    <TextInput
                        placeholder="Email here..."
                        style={styles.emailText}
                        value={emailVal}
                        onChangeText={updateEmailComp}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                    <View style={{ marginTop: 20 }} />
                    <TextInput
                        placeholder="Password here..."
                        style={styles.emailText}
                        value={passwordVal}
                        onChangeText={updatePassComp}
                        secureTextEntry={true}
                        autoCorrect={false}
                        autoCapitalize="none"
                    />
                </View>
                <LoginBtn
                    message="Log In"
                    email={emailVal}
                    password={passwordVal}
                    navigation={navigation}
                />
            </View>
        </KeyboardAvoidingView>
    );
}
