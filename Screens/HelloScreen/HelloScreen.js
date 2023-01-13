import { Text, TouchableOpacity, View, ScrollView } from "react-native";

import {styles} from "./styles.js"

export default function HelloScreen({ navigation }) {
    return (
        <View style={styles.container}>
            <Text>Hello World</Text>
        </View>
    )
}