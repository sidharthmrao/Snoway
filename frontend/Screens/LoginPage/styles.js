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
    emailText: {
        backgroundColor: Color.BUTTON1,
        padding: hp(3),
        borderRadius: hp(5),
        width: hp(40),
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
        allignItems: 'left',
        textAlign: 'left',
        top: hp(-16.5),
        left: hp(0),
    }
});