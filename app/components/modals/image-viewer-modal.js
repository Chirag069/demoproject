import React from 'react';
import { StyleSheet } from 'react-native';
import { Modal } from 'react-native';
import ImageViewer from 'react-native-image-zoom-viewer';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { white } from '../../utils/color';
import scale, { verticalScale } from '../../utils/scale';
const ImageViewerModal = ({
    isModalVisiable,
    closeModal,
    selectedData
}) => {

    const _renderHeader = () => {
        return (
            <Ionicons
                name="close"
                onPress={() => closeModal()}
                size={scale(30)}
                color={white}
                style={styles.imageViewerStyle}
            />
        );
    };

    return (
        <Modal
            visible={isModalVisiable}
            transparent={true}
            onRequestClose={() => closeModal()}>
            <ImageViewer
                renderIndicator={() => { }}
                renderHeader={_renderHeader}
                saveToLocalByLongPress={false}
                enableSwipeDown onSwipeDown={() => closeModal()}
                imageUrls={selectedData}
                key="imageViewr"
            />
        </Modal>
    )
}
const styles = StyleSheet.create({
    imageViewerStyle: {
        textAlign: 'right',
        zIndex: 1,
        paddingRight: scale(10),
        right: 0,
        paddingTop: verticalScale(20),
        position: 'absolute'
    },
})

export default ImageViewerModal;