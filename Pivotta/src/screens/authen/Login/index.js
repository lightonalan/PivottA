import React, {useState} from 'react';
import {StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import {validateEmail, validatePassWord} from 'src/utils/validation/Validation';

const Login = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    email: undefined,
    password: undefined,
  });

  const renderErrors = () => {
    const resultValidateEmail = validateEmail(info?.email);
    const resultValidatePassword = validatePassWord(info?.password);
    console.log('resultValidateEmail', resultValidateEmail);
    if (
      resultValidateEmail?.length === 0 &&
      resultValidatePassword?.length === 0
    ) {
      navigate('ChangePassword');
    }
  };

  const handleOnChange = (value, key) => {
    setInfo({...info, [key]: value});
    console.log('value.length', value.length);
  };

  const handleSubmitLogin = event => {
    console.log('handleSubmitLogin', info);
    renderErrors();
  };

  console.log('info', info);

  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <Text style={styles.title}>ログイン</Text>
        <Text style={styles.desc}>
          ※パートナーアカウントもお持ちの方の場合、メールアドレスとパスワードは同一となります。
        </Text>
        <View>
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
          <Text>パスワード</Text>
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
        <StyledTouchable
          onPress={event => handleSubmitLogin(event)}
          disabled={
            info.email === undefined ||
            info.password === undefined ||
            validatePassWord(info.password).length !== 0 ||
            validateEmail(info.email).length !== 0
          }
          text={'ログイン'}></StyledTouchable>
      </View>
    </>
  );
};

export default Login;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  image: {
    paddingBottom: 17,
  },
  title: {
    color: '#28323C',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
    marginBottom: verticalScale(8),
  },
  desc: {
    color: '#28323C',
    fontSize: moderateScale(12),
    marginBottom: verticalScale(32),
  },
  input: {
    height: 52,
    borderWidth: 1,
    marginVertical: 8,
    borderColor: '#59CDD5',
    borderRadius: 16,
    paddingHorizontal: 8,
  },
  btnLogin: {
    backgroundColor: '#59CDD5',
    height: 50,
    marginHorizontal: scale(50),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtLogin: {
    color: '#fff',
    fontSize: moderateScale(14),
  },
});
