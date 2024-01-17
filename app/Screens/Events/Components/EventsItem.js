import {StyleSheet, View} from 'react-native';
import React from 'react';
import {Card, Text} from 'react-native-paper';
import ProgressiveImage from '../../../components/ProgresshivImage/ProgressiveImage';
import scale from '../../../utils/scale';

const EventsItem = ({item}) => {
  return (
    <Card>
      <ProgressiveImage
        uri={item.event_profile_img}
        imagestyle={styles.imagestyle}
      />
    </Card>
  );
};

export default EventsItem;
const styles = StyleSheet.create({
  imagestyle: {
    height: scale(100),
    width: scale(100),
  },
});
