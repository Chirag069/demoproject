import {
  Linking,
  Pressable,
  StyleSheet,
  TouchableOpacity,
  View,
} from 'react-native';
import React from 'react';
import {Card, Chip, Text} from 'react-native-paper';
import ProgressiveImage from '../../../components/ProgresshivImage/ProgressiveImage';
import scale, {verticalScale} from '../../../utils/scale';
import {black, grey6, offWhite, themecolor, white} from '../../../utils/color';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import {useDispatch} from 'react-redux';
import {LikeAction} from '../../../Redux/actions/HomeAction';

const EventsItem = ({item}) => {
  const dispatch = useDispatch();
  return (
    <Card style={styles.cardcontainer}>
      <View style={styles.cardsubcontainer}>
        <ProgressiveImage
          uri={item.event_profile_img}
          imagestyle={styles.imagestyle}
        />

        <View style={styles.carddetailcontainer}>
          <Text numberOfLines={1} style={styles.eventlable}>
            {item.event_name}
          </Text>
          <View style={styles.rowcontainer}>
            <Text style={styles.timetext}>
              {item.readable_from_date}-{item.readable_to_date}
            </Text>
            <Text style={[styles.timetext, {color: grey6}]}>
              {item.city},{item.country}
            </Text>
          </View>
          <View style={styles.rowcontainer}>
            <Text style={[styles.timetext, {color: grey6}]}>
              {item.event_price_from}-{item.event_price_to}
            </Text>
          </View>
          <View style={[styles.rowcontainer]}>
            {item.danceStyles.map(item => {
              return (
                <View
                  style={{
                    backgroundColor: offWhite,
                    paddingHorizontal: scale(7),
                    paddingVertical: verticalScale(5),
                    borderRadius: scale(10),
                  }}>
                  <Text style={[styles.timetext, {color: black}]}>
                    {item.ds_name}
                  </Text>
                </View>
              );
            })}
            <View style={[styles.rowcontainer, {gap: scale(5)}]}>
              <Pressable onPress={() => Linking.openURL(item.event_url)}>
                <Feather name="share" size={25} color={black} />
              </Pressable>
              <TouchableOpacity
                onPress={() => dispatch(LikeAction(item.event_id))}>
                <AntDesign
                  name={item.isFavorite ? 'heart' : 'hearto'}
                  size={25}
                  color={themecolor}
                />
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <TouchableOpacity style={{position: 'absolute', right: -5, top: -5}}>
        <AntDesign name="arrowright" size={25} color={black} />
      </TouchableOpacity>
    </Card>
  );
};

export default EventsItem;
const styles = StyleSheet.create({
  imagestyle: {
    height: scale(80),
    width: scale(80),
  },
  cardcontainer: {
    padding: scale(7),
    flex: 1,
    backgroundColor: white,
  },
  cardsubcontainer: {
    flexDirection: 'row',
  },
  carddetailcontainer: {
    paddingHorizontal: scale(10),
    flex: 1,
  },
  eventlable: {fontSize: scale(15), color: black},
  timetext: {
    fontSize: scale(12),
    color: themecolor,
  },
  rowcontainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
