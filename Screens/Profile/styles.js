import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#B4D2E7',
        alignItems: 'center',
        justifyContent: 'center',
    },
    upperContainerWhite: {
        backgroundColor: '#ffffff',
        width: wp(100),
        height: hp(80),
        top: hp(-20),
        borderRadius: hp(5),
    },
    usernameText: {
        color: '#023CAA',
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(3),
        top: hp(20),
        alignSelf: 'center',

    },
    imageContainer: {
        width: hp(8),
        height: hp(8),
        top: hp(22),
        left: hp(4),
        marginBottom: hp(2),
        borderRadius: hp(5),
        backgroundColor: '#407eea',
    }
});