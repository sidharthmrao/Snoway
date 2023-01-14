import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
} from "react-native";

import { styles } from "./styles.js";

export default function CreatePost({ navigation, ...props }) {
    
    if (props.touchable == false) {
        return (
            <TouchableWithoutFeedback>
                <View>
                    <View style={styles.container}>
                        <View style={styles.pfpContainer}>
                            <Text style={styles.pfpInitials}>
                                {props.initials}
                            </Text>
                            <Text style={styles.formatUserName}>
                                {props.username}
                            </Text>
                        </View>
                        <View style={styles.seperateComp} />
                        <View style={styles.postContainer}>
                            <Text style={styles.postText}>
                                {props.description}
                            </Text>
                            <Image
                                source={{ uri: props.image }}
                                style={styles.postImage}
                            />
                        </View>
                        <View style={styles.addyEnd}>
                            <Text style={styles.confirmAddy}>
                                {props.location} - verified by Snoway
                            </Text>
                        </View>
                    </View>
                    <View style={styles.seperateBottom} />
                </View>
            </TouchableWithoutFeedback>
        );
    } else {
        return (
            <TouchableWithoutFeedback>
                <View>
                    <View style={styles.container}>
                        <TouchableOpacity
                            style={styles.pfpContainer}
                            onPress={() => {
                                navigation.navigate("profile", {
                                    data: {
                                        username: props.username,
                                        full_name: props.full_name,
                                        uuid: props.uuid,
                                        homeProps: props.homeProps,
                                    }
                                });
                            }}
                        >
                            <Text style={styles.pfpInitials}>
                                {props.initials}
                            </Text>
                            <Text style={styles.formatUserName}>
                                {props.username}
                            </Text>
                        </TouchableOpacity>
                        <View style={styles.seperateComp} />
                        <View style={styles.postContainer}>
                            <Text style={styles.postText}>
                                {props.description}
                            </Text>
                            <Image
                                source={{ uri: props.image }}
                                style={styles.postImage}
                            />
                        </View>
                        <View style={styles.addyEnd}>
                            <Text style={styles.confirmAddy}>
                                {props.location} - verified by Snoway
                            </Text>
                        </View>
                    </View>
                    <View style={styles.seperateBottom} />
                </View>
            </TouchableWithoutFeedback>
        );
    }
}
