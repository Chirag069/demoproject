import React from 'react';
import {TouchableOpacity, StyleSheet, Text, View} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import {Modalize} from 'react-native-modalize';
import {Portal} from 'react-native-portalize';
import scale, {verticalScale} from '../../utils/scale';

const ServiceModal = ({
  closeModal,
  modalizeRef,
  branchId,
  setBranchId,
  branches,
}) => {
  const renderItem = ({item, index}) => {
    return (
      <TouchableOpacity
        style={[styles.serviceBtn, {backgroundColor: 'white'}]}
        onPress={() => {
          setBranchId(item.id);
          closeModal();
        }}>
        <Text style={styles.serviceText}>{item.name}</Text>
        {item.id == branchId ? (
          <View style={styles.btnCheck}>
            <Ionicons name="checkmark" size={scale(20)} color={'white'} />
          </View>
        ) : null}
      </TouchableOpacity>
    );
  };

  return (
    <Portal>
      <Modalize
        ref={modalizeRef}
        modalStyle={styles.modalStyle}
        adjustToContentHeight={true}
        withHandle={false}
        flatListProps={{
          data: branches,
          renderItem: renderItem,
          keyExtractor: (item, index) => `renderPosition${index.toString()}`,
          showsVerticalScrollIndicator: false,
          contentContainerStyle: styles.containerStyle,
        }}
      />
    </Portal>
  );
};

const styles = StyleSheet.create({
  modalStyle: {
    borderTopLeftRadius: 0,
    borderTopRightRadius: 0,
  },
  containerStyle: {
    paddingBottom: verticalScale(20),
  },
  serviceBtn: {
    justifyContent: 'center',
    height: scale(50),
    // borderTopLeftRadius: 20,
    // borderTopRightRadius: 20,
    paddingLeft: scale(20),
  },
  serviceText: {
    letterSpacing: 0.5,
    fontSize: scale(16),
  },
  btnCheck: {
    borderRadius: scale(30),
    position: 'absolute',
    right: scale(20),
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: scale(25),
    height: scale(25),
  },
});

export default ServiceModal;
