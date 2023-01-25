import { StyleSheet } from "react-native";
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import {Color} from '../../Assets/colors.js';

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
        height: hp(90),
        top: hp(-18),
        borderRadius: hp(5),
    },
    seperateComp: {
        borderBottomColor: 'black',
        borderBottomWidth: hp(1),
        top: hp(23)
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
    },
    profileInitials: {
        color: '#000000',
        fontFamily: "GillSans-Light",
        fontSize: hp(3),
        fontWeight: '500',
        top: hp(2.5),
        alignSelf: 'center',
    },
    postView: {
        top: hp(27),
        height: hp(47),
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    backButton: {
        top: hp(-10),
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
        backgroundColor: '#ffffff',
        padding: hp(2),
        width: hp(15),
        borderRadius: hp(5),
    },
    buttonText: {
        color: '#023CAA',
        fontFamily: "GillSans-Light",
        fontWeight: '500',
        fontSize: hp(2),
        alignSelf: 'center',
        justifyContent: 'center',
        alignContent: 'center',
    }
});