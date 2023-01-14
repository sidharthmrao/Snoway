import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container2: {
        backgroundColor: '#B4D2E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        color: '#79a3f0',
        fontFamily: "GillSans-Light",
        fontSize: hp(4),
        left: hp(6),
        fontWeight: '500',
        allignItems: 'left',
    },
    imageContainer: {
        top: hp(-6),
        left: hp(0),
        paddingBottom: hp(4)
    },
    imageSled: {
        borderRadius: 20,
        width: wp(95),
        height: hp(23.75),
    },
    topContainer: {
        flex: 0.40,
        left: hp(-7),
        top: hp(-6.5),
    }
});
