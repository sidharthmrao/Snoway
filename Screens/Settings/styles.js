import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Color} from '../../Assets/colors.js';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BG1,
        alignItems: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    },
    topBar: {
        top: hp(-10),
        width: wp(100),
        height: hp(30),
        backgroundColor: Color.BG2,
        // borderRadius: hp(5),
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
        color: Color.WHITE,
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
        color: Color.WHITE,
        alignSelf: 'left',
        allignText: 'center',
        justifyContent: 'center',
    },
    backButton: {
        top: hp(17),
        left: hp(-15),
    },
    aboutSection: {
        top: hp(-8),
        width: wp(90),
        height: hp(40)
    },
    aboutHeader: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(4),
        top: hp(1),
        left: hp(2),
        color: Color.TEXTONBG1,
        alignSelf: 'left',
    },
    aboutList: {
        top: hp(3),
        width: wp(90),
        height: hp(25.5),
        backgroundColor: Color.BG3,
        alignSelf: 'center',
        allignText: 'center',
        padding: hp(3),
        paddingLeft: hp(4),
        borderRadius: hp(5)
    },
    aboutListItem: {
        marginBottom: hp(5),
        fontFamily: "GillSans-Light",
        fontWeight: '400',
        fontSize: hp(2.5),
    },
    feedbackSection: {
        top: hp(-13),
        width: wp(90),
        height: hp(20),
    },
    feedbackHeader: {
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(4),
        top: hp(1),
        left: hp(2),
        color: Color.TEXTONBG1,
        alignSelf: 'left',
    },
    feedbackList: {
        top: hp(3),
        width: wp(90),
        height: hp(17.7),
        backgroundColor: Color.BG3,
        alignSelf: 'center',
        allignText: 'center',
        padding: hp(3),
        paddingLeft: hp(4),
        borderRadius: hp(5)
    },
    feedbackListItem: {
        marginBottom: hp(5),
        fontFamily: "GillSans-Light",
        fontWeight: '400',
        fontSize: hp(2.5),
    },
    line: {
        top: hp(-2.4),
        left: hp(-5),
        width: wp(95),
        borderBottomColor: Color.BG1,
        borderBottomWidth: StyleSheet.hairlineWidth,
    },
    imageContainer: {
        top: hp(-4),
    },
    imageSled: {
        width: wp(40),
        height: wp(22)
    },
    switch: {
        top: hp(-7.7),
        left: wp(63)
    },
    adjustScroll: {
        marginTop: hp(-5),
    }
});