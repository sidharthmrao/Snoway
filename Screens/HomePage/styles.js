import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4D2E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CoverText: {
        top: hp(0),
        width: wp(100),
        height: hp(20),
        borderRadius: hp(5),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#407eea',
        marginBottom: hp(-3),
    },
    snowSpot: {
        top: hp(3),
        color: '#B4D2E7',
        fontFamily: "GillSans-Light",
        fontSize: hp(3),
        fontWeight: '500',
        marginBottom: hp(1),
    },
    postView: {
        flex: 1,
        top: hp(5),
    },
    buttonPost: {
        marginTop: hp(2),
        top: hp(2),
        backgroundColor: '#ffffff',
        padding: hp(2),
        width: wp(50),
        borderRadius: hp(5),
    },
    postText: {
        color: '#023CAA',
        fontFamily: "GillSans-Light",
        fontSize: hp(2.25),
        textAlign: 'center',
        fontWeight: '500'
    },
    bottomBar: {
        backgroundColor: '#407eea',
        width: wp(100),
        height: hp(10),
        borderRadius: hp(5),
    },
    profileBox: {
        width: hp(8),
        height: hp(8),
        top: hp(1),
        left: hp(4),
        marginBottom: hp(2),
        borderRadius: hp(5),
        backgroundColor: '#B4D2E7',
    },
    profileBoxInitials: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2.75),
        alignSelf: 'center',
        allignText: 'center',
        justifyContent: 'center',
        top: hp(2.25),
    },
    settingsBox: {
        width: hp(8),
        height: hp(8),
        top: hp(-9),
        left: hp(35),
        marginBottom: hp(2),
        borderRadius: hp(5),
        backgroundColor: '#B4D2E7',
    },
    gearEmoji: {
        fontSize: hp(5),
        alignSelf: 'center',
        allignText: 'center',
        justifyContent: 'center',
        top: hp(1.1),
    },
    modalContainer: {
        height: hp(50),
        width: hp(40),
        top: hp(20),
        allignText: 'center',
        justifyContent: 'center',
        alignSelf: 'center',
        top: hp(30),
        borderRadius: 10,
        backgroundColor: '#759ee5',
    },
    uploadImage: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        left: hp(8),
        marginTop: hp(2),
        top: hp(10),
        backgroundColor: '#ffffff',
        padding: hp(2),
        width: wp(50),
        borderRadius: hp(5),
    },
});