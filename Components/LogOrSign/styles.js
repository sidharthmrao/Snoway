import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    signUp: {
        backgroundColor: '#F8F8F8',
        borderRadius: hp(5),
        width: "50%",
        padding: hp(2),
        alignItems: 'center',
        top: hp(25),
    },
    signUpText: {
        color: '#023CAA',
        fontFamily: "AppleSDGothicNeo-Regular",
        fontSize: hp(3),
        fontWeight: '500'
    }
});