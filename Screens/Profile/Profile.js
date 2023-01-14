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
    FlatList
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";

import CreatePost from "../../Components/CreatePost/CreatePost.js";

import { getProfile } from "../../Helpers/Post/getProfile.js";
import { createPost } from "../../Helpers/Bio/getUserPosts.js";
import { styles } from "./styles.js";

export default function Profile({ navigation, ...props }) {
    let [database, updateDatabase] = useState([]);

    let uuid = props.route.params.data.uuid;
    let checkIfDone = false;

    let backSelector;

    if(props.route.params.data.homeProps != undefined) {
        backSelector = (
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("homepage", {
                data: props.route.params.data.homeProps
            })}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        )
    } else {
        backSelector = (
            <TouchableOpacity style={styles.backButton} onPress={() => navigation.navigate("homepage", {
                data: props.route.params.data
            })}>
                <Text style={styles.buttonText}>Back</Text>
            </TouchableOpacity>
        )
    }

    if(checkIfDone == false && database.length == 0) {
        updateDatabaseClick();
    }

    async function updateDatabaseClick() {

        let response = await createPost(uuid);

        for(let i = 0; i < response.data.locations.length; i++) {

            let getUUID = response.data.locations[i].user_uuid;

            let responseUUID = await getProfile(getUUID);

            let initialsVal2 = responseUUID.data.full_name.split(" ");
            initialsVal2 = initialsVal2[0][0] + initialsVal2[1][0];

            database.unshift({
                index: i,
                username: responseUUID.data.username,
                initials: initialsVal2,
                date: "1/14/23",
                location: response.data.locations[i].location_address,
                description: response.data.locations[i].location_description,
                image: response.data.locations[i].location_image,
            });
            
        }

        updateDatabase([...database]);
        checkIfDone = true;
    }

    let initials = props.route.params.data.full_name.split(" ");
    initials = initials[0].charAt(0) + initials[1].charAt(0);

    return (
        <View style={styles.container}>
            <View style={styles.upperContainerWhite}>
                <View style={styles.imageContainer}>
                    <Text style={styles.profileInitials}>{initials}</Text>
                </View>
                <Text style={styles.usernameText}>
                    {props.route.params.data.username.charAt(0).toUpperCase() +
                        props.route.params.data.username.slice(1)}
                    's Profile
                </Text>
                <View style={styles.seperateComp} />
                <View style={styles.postView}>
                    <FlatList
                        data={database}
                        renderItem={(itemData) => {
                            return (
                                <CreatePost
                                    index={itemData.item.index}
                                    username={itemData.item.username}
                                    initials={itemData.item.initials}
                                    date={itemData.item.date}
                                    location={itemData.item.location}
                                    description={itemData.item.description}
                                    image={itemData.item.image}
                                    navigation={navigation}
                                    touchable={false}
                                />
                            );
                        }}
                        alwaysBounceVertical={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
            {backSelector}
        </View>
    );
}
