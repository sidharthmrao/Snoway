import { useState } from "react";
import {
    View,
    Text,
    TouchableOpacity,
    Image,
    TouchableWithoutFeedback,
} from "react-native";
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp,
} from "react-native-responsive-screen";
import { Color } from "../../Assets/colors.js";

import { draftVote } from "../../Helpers/Voting/draftVote";
import { styles } from "./styles.js";

export default function CreatePost({ navigation, ...props }) {

    let [thumbsUpColor, setThumbsUpColor] = useState(Color.BG2);
    let [thumbsDownColor, setThumbsDownColor] = useState(Color.BG2);

    async function changeColorUp() {
        if(thumbsDownColor != '#FF0000') {
            setThumbsUpColor('#03BB0C') 
            //await handleVote(true)
        }
    }

    async function changeColorDown() {
        if(thumbsUpColor != '#03BB0C') {
            setThumbsDownColor('#FF0000')
            //await handleVote(false)
        }
    }

    async function handleVote(boolVal) {
        response = await draftVote(props.uuid, props.user_uuid, boolVal)

        if(response.data.status == 200) {
            console.log("Vote successful")
        } else {
            console.log("Vote unsuccessful")
        }
    }

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
                            <TouchableOpacity
                                style={{
                                    width: hp(5),
                                    height: hp(5),
                                    top: hp(-4.2),
                                    backgroundColor: thumbsUpColor,
                                    borderRadius: hp(5),
                                    left: hp(24),
                                }}
                                onPress={changeColorUp}
                            >
                                <Text style={styles.thumbsUp}>👍</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: hp(5),
                                    height: hp(5),
                                    top: hp(-9),
                                    backgroundColor: thumbsDownColor,
                                    borderRadius: hp(5),
                                    left: hp(30),
                                }}
                                onPress={changeColorDown}
                            >
                                <Text style={styles.thumbsUp}>👎</Text>
                            </TouchableOpacity>
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
                                    },
                                });
                            }}
                        >
                            <Text style={styles.pfpInitials}>
                                {props.initials}
                            </Text>
                            <Text style={styles.formatUserName}>
                                {props.username}
                            </Text>
                            <TouchableOpacity
                                style={{
                                    width: hp(5),
                                    height: hp(5),
                                    top: hp(-4.2),
                                    backgroundColor: thumbsUpColor,
                                    borderRadius: hp(5),
                                    left: hp(24),
                                }}
                                onPress={changeColorUp}
                            >
                                <Text style={styles.thumbsUp}>👍</Text>
                            </TouchableOpacity>
                            <TouchableOpacity
                                style={{
                                    width: hp(5),
                                    height: hp(5),
                                    top: hp(-9),
                                    backgroundColor: thumbsDownColor,
                                    borderRadius: hp(5),
                                    left: hp(30),
                                }}
                                onPress={changeColorDown}
                            >
                                <Text style={styles.thumbsUp}>👎</Text>
                            </TouchableOpacity>
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
