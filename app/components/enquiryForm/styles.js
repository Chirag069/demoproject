import { StyleSheet } from "react-native";
import { colors } from "react-native-elements";
import { typography } from "../../utils/typography";
import scale, { verticalScale } from "../../utils/scale";

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        backgroundColor: "white",
        elevation: 2,
        paddingBottom: verticalScale(20),
        marginHorizontal: scale(15),
        marginTop: verticalScale(10),
        borderRadius: scale(4)
    },
    enquiryText: {
        fontSize: scale(20),
        fontFamily: typography.Poppins_Regular,
        marginTop: verticalScale(10),
        textAlign: "center"
    },
    inputMainContainer: {
        marginHorizontal: scale(15),
        marginTop: verticalScale(5)
    },
    inputText: {
        fontSize: scale(16),
        fontFamily: typography.Poppins_Regular,
    },
    inputContainerStyle: {
        marginTop: verticalScale(5),
        backgroundColor: "white",
        borderColor: colors.grey4
    },
    inputStyle: { fontSize: scale(14), color: "black" },
    inputIconStyle: { width: scale(30) },
    commentInputContainer: {
        borderWidth: 0,
        borderColor: 'lightgrey',
        marginTop: verticalScale(5),
        height: scale(140),
        backgroundColor: "white",
        paddingLeft: scale(0),
        // marginHorizontal:20
    },
    commentInputStyle: {
        borderWidth: 1,
        height: scale(140),
        width: "100%",
        borderRadius: scale(5),
        textAlignVertical: 'top',
        borderColor: colors.grey4,
        paddingLeft: scale(15),
        paddingTop: verticalScale(10),
        fontSize: scale(15), 
        color: "black" 
    },
    submitBtn: {
        height: scale(40),
        marginTop: verticalScale(10),
        borderRadius: scale(4),
        marginHorizontal: scale(15),
    },
    submitText: {
        color: "white"
    },
    dropdownRightIcon: { right: -verticalScale(10) },
    errorText: {
        paddingLeft: scale(0)
    },
})

export default styles;