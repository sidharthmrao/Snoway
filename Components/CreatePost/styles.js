import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Color} from '../../Assets/colors.js';

export const styles = StyleSheet.create({
    container: {
        width: hp(40),
        height: hp(43),
        borderRadius: hp(5),
        backgroundColor: Color.BG3,
    },
    pfpContainer: {
        width: hp(5),
        height: hp(5),
        top: hp(1),
        left: hp(2),
        marginBottom: hp(2),
        borderRadius: hp(5),
        backgroundColor: Color.BG2,
    },
    pfpInitials: {
        color: Color.TEXTONBUTTON2,
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
        borderBottomColor: Color.BG1,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    postText: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
        padding: hp(1),
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        marginHorizontal: hp(2),
        top: hp(2),
        color: Color.TEXTONBG3,
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
        paddingHorizontal: hp(1.25),
    },
    confirmAddy: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(1.5),
        color: Color.GREYONBG3,
    }
});