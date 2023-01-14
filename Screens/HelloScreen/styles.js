import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Color} from '../../Assets/colors.js';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: Color.BG1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    backgroundContainer: {
        position: 'absolute',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        height: hp(100),
    },
    imageContainer: {
        top: hp(0),
        left: hp(0),
        paddingBottom: hp(4),
        alignItems: "center",
    },
    imageSled: {
        width: wp(80),
        height: hp(20),
    },
    imageTextLogo: {
        top: hp(5),
        width: wp(60),
        height: hp(6),
    },
    signUp: {
        backgroundColor: Color.BUTTON1,
        borderRadius: hp(5),
        width: "50%",
        padding: hp(2),
        alignItems: 'center',
        top: hp(10),
    },
    signUpText: {
        color: Color.TEXTONBUTTON1,
        fontFamily: "GillSans-Light",
        fontSize: hp(3),
        fontWeight: '500'
    },
    loginSpace: {
        marginTop: 20,
    },
    topContainer: {
        flex: 0.40,
        top: hp(-10),
        width: wp(100),
        alignSelf: "center",
        alignItems: "center",
    },
    backgroundSnow: {
        height: hp(100),
    }
});