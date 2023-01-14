import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    submitBtnStyle: {
        backgroundColor: '#79a3f0',
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
        color: '#ffffff',
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
    }
});