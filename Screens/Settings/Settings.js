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

import { styles } from "./styles.js";

export default function Settings({ navigation, ...props }) {
    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.upperContainer}>
                    <View style={styles.backButton}>
                        <TouchableOpacity style={styles.backButtonCover}
                            onPress={() => {
                                navigation.navigate("homepage", {
                                    data: props.route.params.data,
                                });
                            }}
                        >
                            <Text style={styles.backEmoji}>⇦</Text>
                        </TouchableOpacity>
                    </View>
                    <View style={styles.settingsTextBox}> 
                        <Text style={styles.settingsText}>Settings</Text>
                    </View>
                </View>
            </View>
            <View style={styles.list}>
                
            </View>
        </View>
    );
}