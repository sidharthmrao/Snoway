import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Color} from '../../Assets/colors.js';

export const styles = StyleSheet.create({
    submitBtnStyle: {
        backgroundColor: Color.BUTTON2,
        borderRadius: hp(5),
        width: hp(40),
        padding: hp(2),
        alignItems: 'center',
        top: hp(-24),
        width: hp(20),
    },
    submitBtnContainer: {
        top: hp(15),
        alignItems: 'center',
    },
    submitBtnTxt: {
        color: Color.TEXTONBUTTON2,
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
    }
});