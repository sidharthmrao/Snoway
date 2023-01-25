import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Color} from '../../Assets/colors.js';

export const styles = StyleSheet.create({
    signUp: {
        backgroundColor: Color.BUTTON1,
        borderRadius: hp(5),
        width: "50%",
        padding: hp(2),
        alignItems: 'center',
        top: hp(25),
    },
    signUpText: {
        color: Color.TEXTONBUTTON1,
        fontFamily: "AppleSDGothicNeo-Regular",
        fontSize: hp(3),
        fontWeight: '500'
    }
});