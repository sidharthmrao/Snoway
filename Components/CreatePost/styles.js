import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        width: hp(40),
        height: hp(43),
        borderRadius: hp(5),
        backgroundColor: '#e2e2e2',
    },
    pfpContainer: {
        width: hp(5),
        height: hp(5),
        top: hp(1),
        left: hp(2),
        marginBottom: hp(2),
        borderRadius: hp(5),
        backgroundColor: '#407eea',
    },
    pfpInitials: {
        color: '#e2e2e2',
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
        alignSelf: 'center',
        allignText: 'center',
        justifyContent: 'center',
        top: wp(2.9),
    },
    formatUserName: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
        alignSelf: 'center',
        allignText: 'center',
        justifyContent: 'center',
        top: hp(-1),
        left: wp(34),
        width: wp(50),
    },
    seperateComp: {
        borderBottomColor: 'black',
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    postText: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
        padding: hp(1),
    },
    seperateBottom: {
        paddingBottom: hp(2),
    },
    postImage: {
        width: hp(35),
        height: hp(20),
        alignSelf: 'center',
        top: hp(2),
        borderRadius: hp(1),
    },
    addyEnd: {
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        allignText: 'center',
        top: hp(4),
    },
    confirmAddy: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(1.5),
        color: '#c6cad0',
    }
});