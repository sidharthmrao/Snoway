import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4D2E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    reformatSnoway: {
        top: hp(10),
    },
    emailText: {
        backgroundColor: '#ffffff',
        padding: hp(2),
        borderRadius: hp(5),
        width: hp(40),
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
        allignItems: 'left',
        textAlign: 'left',
        top: hp(-13.5),
        left: hp(0),
    }
});