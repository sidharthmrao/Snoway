import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4D2E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    signUp: {
        backgroundColor: '#F8F8F8',
        borderRadius: hp(5),
        width: "50%",
        padding: hp(2),
        alignItems: 'center',
        top: hp(20),
    },
    signUpText: {
        color: '#023CAA',
        fontFamily: "GillSans-Light",
        fontSize: hp(3),
        fontWeight: '500'
    },
    loginSpace: {
        marginTop: 20,
    }
});