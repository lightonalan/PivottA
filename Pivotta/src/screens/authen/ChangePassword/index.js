import React, {useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, verticalScale} from 'src/utils/theme/Scale';
import {
  validateConfirmPassword,
  validatePassWord,
} from 'src/utils/validation/Validation';

const ChangePassword = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    password: undefined,
    confirmPassword: undefined,
  });

  const handleOnChange = (value, key) => {
    setInfo({...info, [key]: value});
  };

  console.log('info', info);

  const submitChangePassword = event => {
    navigate('CompanyOnboarding1');
    console.log('submitChangePassword', info);
  };

  return (
    <>
      <Header />
      <View
        style={[
          styles.container,
          {paddingTop: insets.top, paddingBottom: insets.bottom},
        ]}>
        <View>
          <Text style={styles.title}>仮パスワードの変更</Text>
          <View style={{marginBottom: verticalScale(32)}}>
            <Text>新しいパスワード</Text>
            <InputComponent
              value={info.password}
              placeholder="半角英数字8文字以上"
              inputStyle={{}}
              textError={
                info.password === undefined
                  ? ''
                  : validatePassWord(info.password)
              }
              onChange={value => {
                handleOnChange(value, 'password');
              }}
            />
          </View>
          <View style={{marginBottom: verticalScale(32)}}>
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
          <StyledTouchable
            onPress={event => submitChangePassword(event)}
            disabled={
              info.password === undefined ||
              info.confirmPassword === undefined ||
              validatePassWord(info.password).length !== 0 ||
              validateConfirmPassword(info.password, info.confirmPassword)
                .length !== 0
            }
            text={'次へ'}></StyledTouchable>
        </View>
      </View>
    </>
  );
};

export default ChangePassword;

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
});
