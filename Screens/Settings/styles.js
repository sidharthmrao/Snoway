import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4D2E7',
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    topBar: {
        top: hp(0),
        width: wp(100),
        height: hp(30),
        backgroundColor: '#407eea',
        marginBottom: hp(90),
        borderRadius: hp(5),
    },
    backButton: {
        width: hp(10),
        height: hp(20),
        top: hp(17.5),
        left: hp(2),
    },
    backEmoji: {
        fontSize: hp(7),
        alignSelf: 'center',
        allignText: 'center',
        justifyContent: 'center',
        top: hp(1.7),
        color: "#ffffff",
    },
    settingsTextBox: {
        width: wp(65),
        height: hp(8),
        left: wp(30),
    },
    settingsText: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(4),
        top: hp(13),
        left: hp(2),
        color: "#ffffff",
        alignSelf: 'left',
        allignText: 'center',
        justifyContent: 'center',
    },
    backButton: {
        top: hp(17),
        left: hp(-15),
    },
});