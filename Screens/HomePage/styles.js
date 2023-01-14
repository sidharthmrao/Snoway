import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4D2E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    CoverText: {
        top: hp(0),
        width: wp(100),
        height: hp(20),
        borderRadius: hp(5),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#407eea',
    },
    snowSpot: {
        top: hp(2),
        color: '#B4D2E7',
        fontFamily: "GillSans-Light",
        fontSize: hp(3),
        fontWeight: '500'
    },
    postView: {
        flex: 1,
        top: hp(5),
    },
    
});