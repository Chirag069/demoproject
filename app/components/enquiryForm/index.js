import React, {useState, useRef, useEffect} from 'react';
import {Text, TouchableOpacity, View} from 'react-native';
import {colors} from 'react-native-elements';
import {typography} from '../../utils/typography';
import InputBox from '../InputBox';
import DropDownBox from '../dropdownBox';
import Ionicons from 'react-native-vector-icons/Ionicons';
import ServiceModal from '../modals/service-modal';
import Button from '../button/Button';
import styles from './styles';
import scale from '../../utils/scale';
import {Formik} from 'formik';
import * as yup from 'yup';
import {connect} from 'react-redux';
import HomeAction from '../../actions/HomeAction';

function EnquiryForm(props) {
  const modalizeRef = useRef(null);
  const [branch, setBranch] = useState([]);
  const [barnchId, setBranchId] = useState();

  const onSubmitEnquiry = (values, resetForm) => {
    let data = {
      branch_id: barnchId,
      name: values.name,
      comment: values.comments,
      email: values.email,
      mobile: values.phoneNumber,
    };
    props.onAddEnquiryData(data, res => {
      console.log(data);
      resetForm();
    });
  };

  useEffect(() => {
    if (props.branch && props.branch.length > 0) {
      setBranch(props.branch);
      setBranchId(props.branch[0].id);
    }
  }, [props.branch]);

  return (
    <View style={styles.container}>
      <Text style={styles.enquiryText}>Enquiry</Text>
      <View style={styles.inputMainContainer}>
        <Text style={styles.inputText}>Branch</Text>
        <TouchableOpacity onPress={() => modalizeRef.current?.open()}>
          <DropDownBox
            inputContainerStyle={styles.inputContainerStyle}
            rightIcon={() => (
              <Ionicons
                name="caret-down-outline"
                size={scale(20)}
                color={colors.grey2}
                style={styles.dropdownRightIcon}
                onPress={() => {
                  modalizeRef.current?.open();
                }}
              />
            )}
            title={
              branch.length > 0
                ? branch?.filter(item => item.id === barnchId)[0].name
                : ''
            }
            inputStyle={styles.inputStyle}
          />
        </TouchableOpacity>
      </View>
      <Formik
        initialValues={{
          name: '',
          email: '',
          phoneNumber: '',
          comments: '',
        }}
        onSubmit={(values, {resetForm}) => onSubmitEnquiry(values, resetForm)}
        validationSchema={yup.object().shape({
          phoneNumber: yup
            .string()
            .matches(/^[0-9]+$/, 'Must be only digits')
            .min(10, 'Mobile number must be atleast 10 digits')
            .max(10, 'Mobile number must be atleast 10 digits')
            .required('Mobile number is required field'),
          name: yup.string().trim().required('Name is required field'),
          email: yup
            .string()
            .email('Email must be a valid email')
            .required('Email is required field'),
          comments: yup.string().required('Comments is required field'),
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
          <>
            <View style={styles.inputMainContainer}>
              <Text style={styles.inputText}>Name</Text>
              <InputBox
                placeholder="Type your name here"
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={() => (
                  <Ionicons
                    name="person"
                    size={scale(20)}
                    color={colors.grey2}
                    style={styles.inputIconStyle}
                  />
                )}
                value={values.name}
                onChangeText={handleChange('name')}
                onBlur={() => setFieldTouched('name')}
                touched={touched.name}
                errors={errors.name}
                inputStyle={styles.inputStyle}
                errorStyle={styles.errorText}
              />
            </View>
            <View style={styles.inputMainContainer}>
              <Text style={styles.inputText}>Email</Text>
              <InputBox
                placeholder="Type your email here"
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={() => (
                  <Ionicons
                    name="mail"
                    size={scale(20)}
                    color={colors.grey2}
                    style={styles.inputIconStyle}
                  />
                )}
                value={values.email}
                onChangeText={handleChange('email')}
                onBlur={() => setFieldTouched('email')}
                touched={touched.email}
                errors={errors.email}
                inputStyle={styles.inputStyle}
                keyboardType="email-address"
                autoCapitalize={false}
                errorStyle={styles.errorText}
              />
            </View>
            <View style={styles.inputMainContainer}>
              <Text style={styles.inputText}>Mobile No</Text>
              <InputBox
                placeholder="Type your mobile number here"
                inputContainerStyle={styles.inputContainerStyle}
                leftIcon={() => (
                  <Ionicons
                    name="call"
                    size={scale(20)}
                    color={colors.grey2}
                    style={styles.inputIconStyle}
                  />
                )}
                value={values.phoneNumber}
                onChangeText={handleChange('phoneNumber')}
                onBlur={() => setFieldTouched('phoneNumber')}
                touched={touched.phoneNumber}
                errors={errors.phoneNumber}
                inputStyle={styles.inputStyle}
                keyboardType="number-pad"
                errorStyle={styles.errorText}
                maxLength={10}
              />
            </View>
            <View style={styles.inputMainContainer}>
              <Text style={styles.inputText}>Comments</Text>
              <InputBox
                inputContainerStyle={styles.commentInputContainer}
                placeholder="Type your comment here.."
                inputStyle={styles.commentInputStyle}
                value={values.comments}
                onChangeText={handleChange('comments')}
                onBlur={() => setFieldTouched('comments')}
                touched={touched.comments}
                errors={errors.comments}
                numberOfLines={10}
                multiline={true}
                errorStyle={styles.errorText}
              />
            </View>
            <View style={styles.submitBtn}>
              <Button onPress={handleSubmit} />
            </View>
          </>
        )}
      </Formik>
      <ServiceModal
        modalizeRef={modalizeRef}
        closeModal={() => {
          modalizeRef.current?.close();
        }}
        branches={branch}
        barnchId={barnchId}
        setBranchId={val => setBranchId(val)}
      />
    </View>
  );
}

const mapStateToProps = state => {
  const {isLoading} = state.GlobalReducer;
  const {registerResponse} = state.AuthReducer;
  return {
    isLoading,
    registerResponse,
  };
};

const mapDispatchToProps = dispatch => ({
  onAddEnquiryData: (data, successCallback) =>
    dispatch(HomeAction.onAddEnquiryData(data, successCallback)),
});

export default connect(mapStateToProps, mapDispatchToProps)(EnquiryForm);
