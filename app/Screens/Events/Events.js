import {View, Text} from 'react-native';
import React from 'react';
import MainContainer from '../../components/MainContainer';
import {useFocusEffect} from '@react-navigation/native';
import {GetEventsAction} from '../../Redux/actions/HomeAction';
import {useDispatch, useSelector} from 'react-redux';
import {FlatList} from 'react-native-gesture-handler';
import scale, {verticalScale} from '../../utils/scale';
import EventsItem from './Components/EventsItem';

const Events = () => {
  const dispatch = useDispatch();
  useFocusEffect(
    React.useCallback(() => {
      dispatch(GetEventsAction(() => {}));
    }, []),
  );

  const {geteventdata} = useSelector(state => state.HomeReducer);
  const {isLoading} = useSelector(state => state.GlobalReducer);

  return (
    <MainContainer absoluteLoading={isLoading}>
      <Text>hello</Text>

      <FlatList
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{
          paddingHorizontal: scale(10),
          gap: 10,
          paddingBottom: verticalScale(20),
          marginBottom: verticalScale(20),
        }}
        data={geteventdata.events}
        renderItem={EventsItem}
      />
    </MainContainer>
  );
};

export default Events;
