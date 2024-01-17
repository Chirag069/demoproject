import {View, Text, Alert} from 'react-native';
import React from 'react';
import {useDispatch} from 'react-redux';
import {onHandleLogout} from '../../Redux/actions/AuthAction';
import MainContainer from '../../components/MainContainer';
import {black} from '../../utils/color';
import Button from '../../components/button/Button';
import {verticalScale} from '../../utils/scale';

const Profile = () => {
  const dispatch = useDispatch();
  return (
    <MainContainer>
      <Button
        title={'Log Out'}
        buttonStyle={{marginTop: verticalScale(300)}}
        onPress={() => {
          Alert.alert('Cancel', 'Are you sure you want to logout? ', [
            {text: 'Cancel'},
            {
              text: 'OK',
              onPress: () => {
                dispatch(onHandleLogout(res => {}));
              },
            },
          ]);
        }}
      />
    </MainContainer>
  );
};

export default Profile;
