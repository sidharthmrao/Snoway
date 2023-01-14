import { useState } from "react";
import {
    Text,
    TouchableOpacity,
    View,
    Image,
    FlatList,
    Modal,
} from "react-native";
import { heightPercentageToDP as hp } from "react-native-responsive-screen";
import * as ImagePicker from "expo-image-picker"; // not react-image-picker

import CreatePost from "../../Components/CreatePost/CreatePost.js";

import { GenBase64 } from "../../Helpers/Image/base64.js"
import { styles } from "./styles.js";

//props.route.params.data

export default function HomePage({ navigation, ...props }) {
    const [modalVisible, setModalVisible] = useState(false);
    const [image, setImage] = useState(null);

    function setModalVisibleBtn() {
        setModalVisible(true);
    }

    async function showPhotoOnClick() {
        let result = await ImagePicker.launchImageLibraryAsync({
            mediaTypes: ImagePicker.MediaTypeOptions.All,
            allowsEditing: true,
            aspect: [4, 3],
            quality: 1,
            base64: true,
        });

        console.log(result.assets[0].uri)

        if (!result.canceled) {
            setImage(result.assets[0].uri);
            console.log(result.assets[0].base64)
        }
    }

    let database = [
        {
            index: 0,
            username: "lukeskywalker69",
            initials: "LS",
            date: "1/14/23",
            location: "333 Christian St",
            description:
                "This is a description of the snow spot. It was very cool and I liked it",
            image: "data:image/jpeg;base64,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",
        },
        {
            index: 0,
            username: "cyrusnaficy",
            initials: "CN",
            date: "1/14/23",
            location: "Memorial House",
            description:
                "This is a description of the snow spot. It was very cool and I liked it",
            image: "data:image/jpeg;base64,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",
        },
    ];

    let initials = props.route.params.data.full_name.split(" ");
    initials = initials[0][0] + initials[1][0];

    return (
        <View style={styles.container}>
            <View style={styles.CoverText}>
                <Text style={styles.snowSpot}>Snowspots Near You...</Text>
                <TouchableOpacity
                    style={styles.buttonPost}
                    onPress={setModalVisibleBtn}
                >
                    <Text style={styles.postText}>Share Snowspot</Text>
                </TouchableOpacity>
            </View>
            <Modal
                animationType="swipe"
                transparent={true}
                visible={modalVisible}
            >
                <View style={styles.modalContainer}>
                    <TouchableOpacity
                        style={styles.uploadImage}
                        onPress={showPhotoOnClick}
                    >
                        <Text style={styles.postText}>Upload Photo</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
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
                                navigation={props.navigation}
                            />
                        );
                    }}
                    alwaysBounceVertical={false}
                    showsVerticalScrollIndicator={false}
                />
            </View>
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
    );
}
