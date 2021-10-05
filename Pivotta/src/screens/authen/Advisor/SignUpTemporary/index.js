import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import CheckBox from 'react-native-check-box';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, verticalScale} from 'src/utils/theme/Scale';

import {
  validateConfirmPassword,
  validateEmail,
  validatePassWord,
} from 'src/utils/validation/Validation';

const SignUpTemporary = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    email: undefined,
    password: undefined,
    confirmPassword: undefined,
  });

  const handleOnChange = (value, key) => {
    setInfo({...info, [key]: value});
  };

  console.log('info', info);

  const submitSignUp = event => {
    navigate('AuthenRegistration');
    console.log('submitChangePassword', info);
  };

  return (
    <View
      style={[
        styles.container,
        {paddingTop: insets.top, paddingBottom: insets.bottom},
      ]}>
      <Header />
      <View>
        <Text style={styles.title}>仮パスワードの変更</Text>
        <View style={styles.wrapInputEmail}>
          <Text>メールアドレス</Text>
          <InputComponent
            value={info.email}
            placeholder="example@gmail.com"
            inputStyle={{}}
            textError={
              info.email === undefined ? '' : validateEmail(info.email)
            }
            onChange={value => {
              handleOnChange(value, 'email');
            }}
          />
        </View>
        <View style={{marginBottom: verticalScale(32)}}>
          <Text>新しいパスワード</Text>
          <InputComponent
            value={info.password}
            placeholder="半角英数字8文字以上"
            inputStyle={{}}
            textError={
              info.password === undefined ? '' : validatePassWord(info.password)
            }
            onChange={value => {
              handleOnChange(value, 'password');
            }}
          />
        </View>
        <View style={{marginBottom: verticalScale(12)}}>
          <Text>新しいパスワード（確認用）</Text>
          <InputComponent
            value={info.confirmPassword}
            placeholder="半角英数字8文字以上"
            inputStyle={{}}
            textError={
              info.confirmPassword === undefined
                ? ''
                : validateConfirmPassword(info.password, info.confirmPassword)
            }
            onChange={value => {
              handleOnChange(value, 'confirmPassword');
            }}
          />
        </View>
        <View style={styles.linkTermsOfService}>
          <CheckBox
            style={{}}
            isChecked={true}
            onClick={() => {
              console.log('callll');
            }}
          />
          <Text style={{color: '#4FC3CB'}}>利用規約</Text>
          <Text>に同意する</Text>
        </View>
        <StyledTouchable
          onPress={event => submitSignUp(event)}
          disabled={
            info.password === undefined ||
            info.confirmPassword === undefined ||
            validatePassWord(info.password).length !== 0 ||
            validateConfirmPassword(info.password, info.confirmPassword)
              .length !== 0
          }
          text={'認証メール送信'}></StyledTouchable>
      </View>
    </View>
  );
};

export default SignUpTemporary;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  title: {
    color: '#28323C',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginBottom: verticalScale(32),
  },
  desc: {
    color: '#28323C',
    fontSize: moderateScale(12),
    marginBottom: verticalScale(8),
  },
  wrapInputEmail: {
    marginBottom: verticalScale(16),
  },
  linkTermsOfService: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: verticalScale(12),
  },
});
