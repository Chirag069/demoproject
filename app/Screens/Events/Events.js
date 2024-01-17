import {View, Text} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer';
import {useFocusEffect} from '@react-navigation/native';
import {GetEventsAction} from '../../Redux/actions/HomeAction';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import scale, {verticalScale} from '../../utils/scale';
import EventsItem from './Components/EventsItem';
import {black, grey6, offWhite, white} from '../../utils/color';

const Events = () => {
  const dispatch = useDispatch();

  const {geteventdata} = useSelector(state => state.HomeReducer);
  const {isLoading} = useSelector(state => state.GlobalReducer);
  const {userData} = useSelector(state => state.AuthReducer);

  useFocusEffect(
    React.useCallback(() => {
      dispatch(GetEventsAction(() => {}));
    }, []),
  );

  return (
    <MainContainer absoluteLoading={isLoading}>
      <View style={{backgroundColor: offWhite, flex: 1}}>
        <View
          style={{
            paddingHorizontal: scale(30),
            paddingVertical: verticalScale(20),
            backgroundColor: white,
          }}>
          <Text style={{fontSize: scale(20), color: black}}>
            {userData?.usr_fname}
          </Text>
          <Text style={{fontSize: scale(15), color: grey6}}>
            Are you ready to dance?
          </Text>
        </View>

        <FlatList
          showsHorizontalScrollIndicator={false}
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            paddingHorizontal: scale(10),
            gap: 10,
            paddingBottom: verticalScale(20),
            marginBottom: verticalScale(20),
            marginTop: verticalScale(20),
          }}
          data={geteventdata}
          renderItem={({item}) => <EventsItem item={item} />}
        />
      </View>
    </MainContainer>
  );
};

export default Events;
