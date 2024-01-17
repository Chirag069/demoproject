import React, { useState } from 'react';
import {
    View,
    StyleSheet,
    TouchableOpacity,
    Platform,
    PermissionsAndroid,
} from 'react-native';
import Pdf from 'react-native-pdf';
import { screenHeight, screenWidth } from '../../utils/sizes';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { white } from '../../utils/color';
import { useNavigation, useRoute } from '@react-navigation/native';
import scale from '../../utils/scale';
import RNFS from 'react-native-fs'
import Snackbar from 'react-native-snackbar';

const PdfViewer = () => {
    const route = useRoute();
    const [source, setSource] = useState(route.params.data)
    const navigation = useNavigation();


    let filePath = Platform.OS === 'android' ? `${RNFS.DownloadDirectoryPath}/Sardardham/` : `${RNFS.DocumentDirectoryPath}/Sardardham/`

    const makeDirectory = async () => {
        const isExist = await RNFS.exists(filePath)
        if (!isExist) {
            const options = {
                NSURLIsExcludedFromBackupKey: true // iOS only
            };
            Promise.all([RNFS.mkdir(filePath, options)])
        }
    }

    const onDownloadPress = () => {
        if (Platform.OS === 'android') {
            PermissionsAndroid.request(PermissionsAndroid.PERMISSIONS.WRITE_EXTERNAL_STORAGE)
                .then(async response => {
                    if (response === "granted") {
                        onDownloadPDF()
                    } else {
                        console.log("permission--->", response)
                    }
                }).catch(error => {
                    console.log("error ---->", error)
                })
        } else {
            onDownloadPDF()
        }
    }

    const onDownloadPDF = async () => {
        const route = source.uri.replace(/.*?:\/\//g, '');
        await makeDirectory()
        const fileName = route.match(/\/([^\/]+)\/?$/)[1];
        filePath = filePath + fileName
        const DownloadFileOptions = {
            fromUrl: source.uri,          // URL to download file from
            toFile: filePath,         // Local filesystem path to save the file to
            background: false,     // Continue the download in the background after the app terminates (iOS only)
            progress: (res) => {
                let progressPercent = (res.bytesWritten / res.contentLength) * 100; // to calculate in percentage
                console.log("\n\nprogress===", progressPercent)
            }
        };
        RNFS.downloadFile(DownloadFileOptions).promise
            .then(() => {
                console.log("localFile Path-->", filePath)
            })
            .then(async () => {
                Snackbar.show({
                    text: 'Download Pdf successfully',
                    duration: Snackbar.LENGTH_LONG,
                    backgroundColor: 'rgba(0,0,0,0.9)',
                    textColor: 'white',
                });
                console.log("download success")
            })
            .catch(error => {
                console.log("Failed to download pdf.")
            })
    }

    navigation.setOptions({
        headerRight: () => (
            <TouchableOpacity style={styles.downLoadIcon} onPress={() => onDownloadPress()}>
                <MaterialCommunityIcons name="download" size={scale(30)} color={white} />
            </TouchableOpacity>
        ),
    });

    return (
        <View style={styles.mainContainer}>
            <Pdf
                source={source}
                onLoadComplete={(numberOfPages, filePath) => {
                    console.log(`number of pages: ${numberOfPages}`);
                }}
                onPageChanged={(page, numberOfPages) => {
                    console.log(`current page: ${page}`);
                }}
                onError={(error) => {
                    console.log(error);
                }}
                onPressLink={(uri) => {
                    console.log(`Link presse: ${uri}`)
                }}
                style={styles.pdf} />
        </View>
    );
}

export const styles = StyleSheet.create({
    mainContainer: {
        flex: 1
    },
    pdf: {
        flex: 1,
        width: screenWidth,
        height: screenHeight,
    },
    downLoadIcon: {
        marginRight: scale(15)
    }
});

export default PdfViewer;