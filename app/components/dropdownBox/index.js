import React from 'react';
import { StyleSheet, View, Text } from "react-native"
import scale, { verticalScale } from '../../utils/scale';

const DropDownBox = ({
    inputStyle,
    inputContainerStyle,
    leftIcon,
    rightIcon,
    title
}) => {
    return (
        <>
            <View style={[styles.inputContainerStyle, inputContainerStyle]} >
                {leftIcon && leftIcon()}
                <View style={[styles.inputStyle, inputStyle]}>
                    <Text>{title}</Text>
                </View>
                {rightIcon && rightIcon()}
            </View>
        </>
    )
}
export default DropDownBox;

const styles = StyleSheet.create({
    inputContainerStyle: {
        height: scale(50),
        justifyContent: "flex-start",
        borderColor: "grey",
        borderWidth: 1,
        borderRadius: scale(5),
        flexDirection: "row",
        alignItems: "center",
        paddingLeft:scale(10)
    },
    inputStyle: {
        fontSize: scale(18),
        width: "85%",
    },
    leftIconStyle: {
        backgroundColor: "green",
        width: scale(20),
        height: scale(20),
        borderRadius: scale(10),
        marginHorizontal: scale(10)
    },
    rightIconStyle: {
        backgroundColor: "green",
        width: scale(20),
        height: scale(20),
        borderRadius: scale(10),
        position: "absolute",
        right: scale(10)
    },
    errorView: {
        flexDirection: "row",
        alignItems: "center",
        paddingLeft: scale(25),
        paddingTop: verticalScale(5)
    },
    errorText: {
        fontSize: scale(12),
        color: "red",
        paddingLeft: scale(15)
    }
})