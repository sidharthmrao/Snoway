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
import * as ImagePicker from "expo-image-picker"; // not react-image-picker
import * as Location from "expo-location";

import CreatePost from "../../Components/CreatePost/CreatePost.js";

import { getProfile } from "../../Helpers/Post/getProfile.js";
import { getAllPosts } from "../../Helpers/Post/getAllPosts.js";
import { getPost } from "../../Helpers/Post/getPost.js";
import { createPost } from "../../Helpers/Post/createPost.js";
import { styles } from "./styles.js";

//props.route.params.data

/*
{
    "bio": "", 
    "city": "Wallingford", 
    "email": "cyrus.naficy@gmail.com", 
    "full_name": "Cyrus Naficy", 
    "message": "Successfully logged in.", 
    "reviews": [], 
    "status": "success", 
    "username": "cyrusnaficy", 
    "uuid": "aa71ac96-d916-4793-9f90-b0e10acacce2"}
*/

export default function HomePage({ navigation, ...props }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState(null);
    let [reviewText, updateReviewText] = useState("");
    const [database, updateDatabase] = useState([]);
    const [scrollElement, updateScrollElement] = useState(null);

    let initials = props.route.params.data.full_name.split(" ");
    initials = initials[0][0] + initials[1][0];

    let googleAPI = true;
    let checkIfDone = false;

    async function getLocation() {
        let { status } = await Location.requestForegroundPermissionsAsync();

        if (status !== "granted") {
            alert("Permission to access location was denied");
            return;
        }

        let locationData = await Location.getCurrentPositionAsync({
            accuracy: Location.Accuracy.Low,
        });

        return locationData;
    }

    if (googleAPI) {
        getRealLocationHandler();
        googleAPI = false;
    }

    async function getRealLocationHandler() {
        while (JSON.stringify(database) === "[]" && checkIfDone == false) {
            console.log(database);
            console.log("Homepage line 75");
            await getAllPostsReq();
        }
        console.log("Done");
    }

    async function getAllPostsReq() {
        const realLocation = await getLocation();

        let location_coords = {
            latitude: JSON.stringify(realLocation.coords.latitude),
            longitude: JSON.stringify(realLocation.coords.longitude),
        };

        console.log("Homepage line 91");
        const response = await getAllPosts(location_coords);

        for (let i = 0; i < response.data.locations.length; i++) {
            let getUUID = response.data.locations[i].user_uuid;

            let responseUUID = await getProfile(getUUID);

            let initialsVal2 = responseUUID.data.full_name.split(" ");
            initialsVal2 = initialsVal2[0][0] + initialsVal2[1][0];

            database.unshift({
                index: i,
                uuid: getUUID,
                full_name:responseUUID.data.full_name,
                username: responseUUID.data.username,
                initials: initialsVal2,
                date: "1/14/23",
                location: response.data.locations[i].location_address,
                description: response.data.locations[i].location_description,
                image: response.data.locations[i].location_image,
            });
        }

        await updateDatabase([...database]);
        checkIfDone = true;
    }

    function updateReviewTextBtn(eneteredText) {
        updateReviewText(eneteredText);
    }

    async function createPostSendReq() {
        const realLocation = await getLocation();

        let location_coords = {
            latitude: JSON.stringify(realLocation.coords.latitude),
            longitude: JSON.stringify(realLocation.coords.longitude),
        };

        reviewText = await reviewText.trim();

        const response = await createPost(
            location_coords,
            reviewText,
            image,
            props.route.params.data.uuid
        );

        if (response.status == 200) {
            let uuidVal = response.data;

            let postResponse = await getPost(uuidVal);

            await updateDatabase([
                {
                    index: 0,
                    uuid: postResponse.data.user_uuid,
                    full_name: props.route.params.data.full_name,
                    username: props.route.params.data.username,
                    initials: initials,
                    date: "1/14/23",
                    location: postResponse.data.location_address,
                    description: reviewText,
                    image: image,
                },
                ...database,
            ]);

            alert("Post created successfully");
            await closeModalFunc();
        }
    }

    function setModalVisibleBtn() {
        setModalVisible(true);
    }

    function closeModalFunc() {
        setImage(null);
        setModalVisible(false);
    }

    async function returnLocation() {
        await getLocation();
        await createPostSendReq();
    }

    async function showPhotoOnClick() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        if (!result.canceled) {
            setImage(result.assets[0].uri);

            if (result.assets[0].base64) {
                setImage("data:image/jpeg;base64," + result.assets[0].base64);
            } else {
                alert("Please select a different image");
            }
        }
    }

    return (
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
            <View style={styles.container}>
                <View style={styles.CoverText}>
                    <Text style={styles.snowSpot}>Snowspots Near You...</Text>
                    <TouchableOpacity
                        style={styles.buttonPost}
                        onPress={setModalVisibleBtn}
                    >
                        <Text style={styles.postText}>New Snowspot</Text>
                    </TouchableOpacity>
                </View>
                <Modal
                    animationType="swipe"
                    transparent={true}
                    visible={modalVisible}
                >
                    <TouchableWithoutFeedback
                        onPress={() => Keyboard.dismiss()}
                    >
                        <View style={styles.modalContainer}>
                            <View style={styles.aboveTextWrapper}>
                                <Text style={styles.scaleInitials}>
                                    {initials}
                                </Text>
                                <Text style={styles.scaleUsername}>
                                    {props.route.params.data.username}
                                </Text>
                            </View>
                            <View style={styles.seperateComp} />
                            <View style={styles.textWrapper}>
                                <TextInput
                                    style={styles.reviewTextInput}
                                    placeholder="Write review..."
                                    onChangeText={updateReviewTextBtn}
                                    multiline={true}
                                    autoCorrect={true}
                                    autoCapitalize="none"
                                    value={reviewText}
                                />
                                <Image
                                    source={{ uri: image }}
                                    style={styles.base64Image}
                                />
                            </View>
                            <View style={styles.modalButtonContainer}>
                                <TouchableOpacity
                                    style={styles.uploadImage}
                                    onPress={showPhotoOnClick}
                                >
                                    <Text style={styles.uploadText}>
                                        Upload Photo
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.postButton}
                                    onPress={returnLocation}
                                >
                                    <Text style={styles.uploadText}>
                                        Post Review
                                    </Text>
                                </TouchableOpacity>
                                <TouchableOpacity
                                    style={styles.closeModal}
                                    onPress={closeModalFunc}
                                >
                                    <Text style={styles.deleteText}>
                                        Delete
                                    </Text>
                                </TouchableOpacity>
                            </View>
                        </View>
                    </TouchableWithoutFeedback>
                </Modal>
                <View style={styles.postView}>
                    <FlatList
                        data={database}
                        renderItem={(itemData) => {
                            return (
                                <CreatePost
                                    index={itemData.item.index}
                                    uuid={itemData.item.uuid}
                                    username={itemData.item.username}
                                    full_name={itemData.item.full_name}
                                    initials={itemData.item.initials}
                                    date={itemData.item.date}
                                    location={itemData.item.location}
                                    description={itemData.item.description}
                                    image={itemData.item.image}
                                    navigation={navigation}
                                    touchable={true}
                                    homeProps={props.route.params.data}
                                />
                            );
                        }}
                        alwaysBounceVertical={false}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
                <View style={styles.bottomBar}>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("profile", {
                                data: props.route.params.data,
                            });
                        }}
                    >
                        <View style={styles.profileBox}>
                            <Text style={styles.profileBoxInitials}>
                                {initials}
                            </Text>
                        </View>
                    </TouchableOpacity>
                    <TouchableOpacity
                        onPress={() => {
                            navigation.navigate("settings", {
                                data: props.route.params.data,
                            });
                        }}
                    >
                        <View style={styles.settingsBox}>
                            <Text style={styles.gearEmoji}>⚙️</Text>
                        </View>
                    </TouchableOpacity>
                </View>
            </View>
        </TouchableWithoutFeedback>
    );
}
