import { useState, useEffect } from "react";
import {
    Text,
    TextInput,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    Modal,
    TouchableWithoutFeedback,
    Keyboard,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

export default function Settings({ navigation, ...props }) {
    return (

        <View style={styles.container}>
            <View style={styles.bottomBar}>
                <TouchableOpacity>
                    <View style={styles.profileBox}>
                        <Text style={styles.profileBoxInitials}>
                            {initials}
                        </Text>
                    </View>
                </TouchableOpacity>
                <TouchableOpacity>
                    <View style={styles.settingsBox}>
                        <Text style={styles.gearEmoji}>⚙️</Text>
                    </View>
                </TouchableOpacity>
            </View>
        </View>
    )
}