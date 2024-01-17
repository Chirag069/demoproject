import {
  View,
  Text,
  KeyboardAvoidingView,
  ScrollView,
  ImageBackground,
  StyleSheet,
  TouchableNativeFeedbackBase,
  Pressable,
} from 'react-native';
import React, {useState, version} from 'react';
import MainContainer from '../../components/MainContainer';
import scale, {verticalScale} from '../../utils/scale';
import {
  black,
  fontregular,
  grey1,
  grey3,
  grey6,
  white,
} from '../../utils/color';
import InputBox from '../../components/InputBox';
import {Formik} from 'formik';
import * as yup from 'yup';
import {TouchableOpacity} from 'react-native-gesture-handler';
import Button from '../../components/button/Button';
import FastImage from 'react-native-fast-image';
import {useDispatch, useSelector} from 'react-redux';
import {onHandleLogin} from '../../Redux/actions/AuthAction';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const SignIn = () => {
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);
  const {isLoading} = useSelector(state => state.GlobalReducer);

  const loginHandler = values => {
    console.log(values);
    const data = {
      email: values.email,
      password: values.password,
    };

    dispatch(
      onHandleLogin(data, res => {
        if (res) {
          console.log(res, 'values');
        }
      }),
    );
  };
  return (
    <MainContainer absoluteLoading={isLoading}>
      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={values => loginHandler(values)}
        validationSchema={yup.object().shape({
          email: yup
            .string()
            .email('Invalid E-Mail.')
            .required('E-Mail Is Required.')
            .matches(
              /^[A-Z0-9][A-Z0-9\.\-]+@(?:[A-Z0-9][A-Z0-9\-]+)\.(?:[A-Z0-9][A-Z0-9_\-]{1,9})(?:(?:\.[A-Z0-9]{2,5})?)$/i,
              'Invalid E-Mail Format.',
            ),
          password: yup.string().required('password is required'),
        })}>
        {({
          values,
          handleChange,
          errors,
          setFieldTouched,
          touched,
          isValid,
          handleSubmit,
        }) => (
          <ScrollView
            showsHorizontalScrollIndicator={false}
            showsVerticalScrollIndicator={false}
            style={{}}
            keyboardShouldPersistTaps="handled">
            <ImageBackground
              source={require('../../assets/img/background4.jpg')}
              style={{height: verticalScale(280), width: '100%'}}>
              <Text style={styles.logotext}>Plie</Text>
            </ImageBackground>
            <View style={styles.inputview}>
              <Text style={styles.labletext}>Email</Text>
              <InputBox
                placeholder="Email"
                inputContainerStyle={styles.inputContainerStyle}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                touched={touched.email}
                errors={errors.email}
              />
              <View style={{marginTop: verticalScale(10)}}>
                <Text style={styles.labletext}>Password</Text>
                <InputBox
                  rightIcon={() => (
                    <TouchableOpacity onPress={() => setShow(!show)}>
                      <MaterialCommunityIcons
                        name={show ? 'eye' : 'eye-off'}
                        size={scale(22)}
                        color={black}
                      />
                    </TouchableOpacity>
                  )}
                  placeholder="Password"
                  secureTextEntry={!show}
                  value={values.password}
                  onChangeText={handleChange('password')}
                  onBlur={() => setFieldTouched('password')}
                  touched={touched.password}
                  errors={errors.password}
                />
                <TouchableOpacity>
                  <Text style={[styles.smalltext, {alignSelf: 'flex-end'}]}>
                    Forget password?
                  </Text>
                </TouchableOpacity>
              </View>

              <Button
                title={'Sign In'}
                textStyle={styles.buttontext}
                buttonStyle={styles.buttonStyle}
                onPress={handleSubmit}
              />

              <Text
                style={[
                  styles.smalltext,
                  {
                    alignSelf: 'flex-end',
                    marginTop: verticalScale(10),
                    color: black,
                  },
                ]}>
                Forget password?{' '}
                <Text
                  style={[
                    styles.smalltext,
                    {
                      alignSelf: 'flex-end',
                      textDecorationLine: 'underline',
                      color: black,
                    },
                  ]}>
                  Sign Up Here
                </Text>
              </Text>

              <View style={styles.view1}>
                <View style={styles.lineview} />
                <Text style={[styles.labletext]}> or sign in with </Text>
                <View style={styles.lineview} />
              </View>

              <View style={styles.logoview}>
                <TouchableOpacity style={styles.boxview}>
                  <FastImage
                    source={{
                      uri: 'https://cdn1.iconfinder.com/data/icons/google-s-logo/150/Google_Icons-09-512.png',
                    }}
                    style={styles.imageview}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxview}>
                  <FastImage
                    source={{
                      uri: 'https://e7.pngegg.com/pngimages/980/413/png-clipart-apple-logo-business-iphone-apple-heart-computer.png',
                    }}
                    style={styles.imageview}
                  />
                </TouchableOpacity>
                <TouchableOpacity style={styles.boxview}>
                  <FastImage
                    source={{
                      uri: 'https://cdn-icons-png.flaticon.com/256/124/124010.png',
                    }}
                    style={styles.imageview}
                  />
                </TouchableOpacity>
              </View>
            </View>
          </ScrollView>
        )}
      </Formik>
    </MainContainer>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  logotext: {
    fontSize: scale(60),
    color: black,
    alignSelf: 'center',
    marginTop: 'auto',
    marginBottom: 'auto',
  },
  inputview: {
    marginHorizontal: scale(30),
    marginTop: verticalScale(40),
    fontFamily: fontregular,
  },
  labletext: {
    fontSize: scale(15),
    marginBottom: verticalScale(5),
    color: black,
    fontFamily: fontregular,
  },
  smalltext: {
    fontSize: scale(12),
    color: grey6,
    fontFamily: fontregular,
  },
  buttonStyle: {
    width: '25%',
    alignSelf: 'flex-end',
    height: verticalScale(35),
    backgroundColor: '#21d393',
    marginTop: verticalScale(20),
  },
  view1: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(30),
  },
  lineview: {
    backgroundColor: black,
    paddingVertical: verticalScale(0.5),
    flex: 1,
  },
  logoview: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginHorizontal: scale(20),
  },
  boxview: {
    marginVertical: verticalScale(50),
    elevation: 5,
    backgroundColor: white,
    borderRadius: scale(5),
  },
  imageview: {
    height: scale(50),
    width: scale(50),
    borderRadius: scale(5),
  },
});
