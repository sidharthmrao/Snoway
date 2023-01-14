import { useState } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    TextInput,
    KeyboardAvoidingView,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { styles } from "./styles.js";

export default function Profile({ navigation, ...props }) {
    return (
        <View style={styles.container}>
            <View style={styles.upperContainerWhite}>
                <View style={styles.imageContainer}>
                    
                </View>
                <Text style={styles.usernameText}>
                    {props.route.params.data.username.charAt(0).toUpperCase() +
                        props.route.params.data.username.slice(1)}
                    's Profile
                </Text>
            </View>
        </View>
    );
}
