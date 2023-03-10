import { useState, useEffect, useCallback } from "react";
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
    Switch,
    ScrollView,
    useColorScheme
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import { styles } from "./styles.js";

export default function Settings({ navigation, ...props }) {
    const [colorSchemeState, setColorSchemeState] = useState("");

    if(colorSchemeState == "dark") {
        console.log("dark mode");
    } else {
        useColorScheme("dark")
    }

    return (
        <View style={styles.container}>
            <View style={styles.topBar}>
                <View style={styles.upperContainer}>
                    <View style={styles.backButton}>
                        <TouchableOpacity
                            style={styles.backButtonCover}
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
            <View style={styles.aboutSection}>
                <Text style={styles.aboutHeader}>About</Text>
                <TouchableOpacity style={styles.aboutList}>
                    <Text style={styles.aboutListItem}>How to use</Text>
                    <View style={styles.line} />
                    <Text style={styles.aboutListItem}>
                        About the developers
                    </Text>
                    <View style={styles.line} />
                    <View>
                        <Text style={styles.aboutListItem}>Dark mode</Text>
                        <Switch
                            style={styles.switch}
                            trackColor={{ false: "light", true: "dark" }}
                            onValueChange={setColorSchemeState}
                            value={colorSchemeState}
                        />
                    </View>
                </TouchableOpacity>
            </View>
            <View style={styles.feedbackSection}>
                <Text style={styles.feedbackHeader}>Feedback and Help</Text>
                <TouchableOpacity style={styles.feedbackList}>
                    <Text style={styles.feedbackListItem}>FAQs</Text>
                    <View style={styles.line} />
                    <Text style={styles.feedbackListItem}>Contact us</Text>
                </TouchableOpacity>
            </View>
            <View style={styles.imageContainer}>
                <Image
                    source={require("../../Assets/png/sled_logo.png")}
                    style={styles.imageSled}
                ></Image>
            </View>
        </View>
    );
}