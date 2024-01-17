import React, { useState } from "react";
import { Modalize } from 'react-native-modalize';
import { Portal } from 'react-native-portalize';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Text, TouchableOpacity, View } from "react-native";
import { themecolor } from "../../utils/color";

export default function MedialModal ( {
    modalizeRef,
    uploadCVFrom,
    onDone,
    isKeyFor,
    index
} ) {
    console.log( 'isKeyFor', isKeyFor );
    const renderChildren = () => {
        return <>
            <Text style={ {
                letterSpacing: 0.7,
                color: 'grey',
                fontSize: 16,
                marginTop: 15,
                paddingLeft: 15,
                marginBottom: 10
            } }
            >Select file</Text>
            <View
                style={ {
                    flexDirection: "row",
                    alignItems: "center",
                    justifyContent: "space-evenly",
                    marginBottom: 20
                } }
            >
                {
                    isKeyFor == 'isPassprt' ? null :
                        <View style={ { alignItems: "center" } }

                        >
                            <TouchableOpacity style={ {
                                backgroundColor: themecolor,
                                width: 55,
                                height: 55,
                                borderRadius: 50,
                                elevation: 2,
                                justifyContent: 'center',
                                alignItems: 'center',
                            } }
                                onPress={ () => {
                                    uploadCVFrom( 'Doc',index );
                                } }
                            >
                                <Ionicons
                                    name="document"
                                    size={ 25 }
                                    color="white"
                                />
                            </TouchableOpacity>
                            <Text
                                style={ { color: "grey", fontSize: 14, marginTop: 10 } }
                            >Document</Text>
                        </View> 
                        }
                <View style={ { alignItems: "center" } } >
                    <TouchableOpacity style={ {
                        backgroundColor: themecolor,
                        width: 55,
                        height: 55,
                        borderRadius: 50,
                        elevation: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    } }
                        onPress={ () => {
                            uploadCVFrom( 'Camera' );
                        } }
                    >
                        <Ionicons
                            name="camera"
                            size={ 25 }
                            color="white"
                        />
                    </TouchableOpacity>
                    <Text
                        style={ { color: "grey", fontSize: 14, marginTop: 10 } }
                    >Camera</Text>
                </View>
                <View style={ { alignItems: "center" } } >
                    <TouchableOpacity style={ {
                        backgroundColor: themecolor,
                        width: 55,
                        height: 55,
                        borderRadius: 50,
                        elevation: 2,
                        justifyContent: 'center',
                        alignItems: 'center'
                    } }
                        onPress={ () => {
                            uploadCVFrom( 'Gallery' );
                        } }
                    >
                        <Ionicons
                            name="image"
                            size={ 25 }
                            color="white"
                        />
                    </TouchableOpacity>
                    <Text
                        style={ { color: "grey", fontSize: 14, marginTop: 10 } }
                    >Gallery</Text>
                </View>
            </View>
        </>;
    };
    return (
        <Portal>
            <Modalize
                ref={ modalizeRef }
                adjustToContentHeight={ true }
                withHandle={ false }
                handlePosition="inside"
                modalStyle={ {
                    borderTopLeftRadius: 0,
                    borderTopRightRadius: 0
                } }
            >
                { renderChildren() }
            </Modalize>
        </Portal>
    );
}