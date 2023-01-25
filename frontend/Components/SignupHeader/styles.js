import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Color} from '../../Assets/colors.js';

export const styles = StyleSheet.create({
    container2: {
        backgroundColor: Color.BG1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    welcomeText: {
        color: Color.TEXTONBG1,
        fontFamily: "GillSans-Light",
        fontSize: hp(4),
        left: hp(6),
        fontWeight: '500',
        allignItems: 'left',
    },
    imageContainer: {
        top: hp(-6),
        left: hp(0),
        paddingBottom: hp(4)
    },
    imageSled: {
        borderRadius: 20,
        width: wp(95),
        height: hp(23.75),
    },
    topContainer: {
        flex: 0.40,
        left: hp(-7),
        top: hp(-6.5),
    }
});
