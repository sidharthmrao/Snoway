import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4D2E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    emailText: {
        backgroundColor: '#ffffff',
        padding: hp(3),
        borderRadius: hp(5),
        width: hp(40),
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
        allignItems: 'left',
        textAlign: 'left',
        top: hp(-16.5),
        left: hp(-1),
    },
    submitBtnStyle: {
        backgroundColor: '#79a3f0',
        borderRadius: hp(5),
        width: hp(40),
        padding: hp(2),
        alignItems: 'center',
        top: hp(-24),
        left: hp(-8),
        width: hp(20),
    },
    submitBtnContainer: {
        top: hp(15),
        left: hp(7),
        alignItems: 'center',
    },
    submitBtnTxt: {
        color: '#c4c2c2',
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
    }
});