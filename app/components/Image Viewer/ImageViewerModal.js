import {View, Text, TouchableOpacity, Modal} from 'react-native';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import Entypo from 'react-native-vector-icons/Entypo';
import {ImageViewerAction} from '../../Redux/actions/HomeAction';
import scale from '../../utils/scale';
import {white} from '../../utils/color';
import ImageViewer from 'react-native-image-zoom-viewer';

const ImageViewerModal = () => {
  const dispatch = useDispatch();
  const {imageview} = useSelector(state => state.HomeReducer);
  console.log('imageview.visible', imageview.visible);
  console.log(imageview.images);
  return (
    <Modal visible={imageview.visible} transparent={true}>
      <TouchableOpacity
        onPress={() =>
          dispatch(ImageViewerAction({visible: false, images: []}, () => {}))
        }
        style={{
          backgroundColor: 'rgba(0, 0, 0, 0.9)',
          height: scale(30),
          width: scale(30),
          borderRadius: scale(15),
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <Entypo name={'cross'} size={scale(20)} color={white} />
      </TouchableOpacity>
      <ImageViewer
        imageUrls={imageview.images}
        backgroundColor={'rgba(0, 0, 0, 0.5)'}
      />
    </Modal>
  );
};

export default ImageViewerModal;
