import { View, Text, TouchableOpacity } from "react-native";

import { styles } from "./styles.js";

export default function LoginBtn({ navigation, ...props }) {
    return (
        <View style={styles.submitBtnContainer}>
            <TouchableOpacity style={styles.submitBtnStyle}>
                <Text style={styles.submitBtnTxt}>{props.message}</Text>
            </TouchableOpacity>
        </View>
    )
}