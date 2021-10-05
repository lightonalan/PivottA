import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import StyledTouchable from 'src/components/StyledTouchable';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import ImagePicker from 'react-native-image-crop-picker';
import {navigate} from 'src/navigation/service/NavigationService';

const CompanyOnboarding1 = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    password: undefined,
    confirmPassword: undefined,
  });

  const handleOnChange = (value, key) => {
    setInfo({...info, [key]: value});
  };

  const onLaunchImageLibrary = () => {
    console.log('call upload image');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const handleSubmit = () => {
    navigate('CompanyOnboarding2');
  };

  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>基本情報登録</Text>
          <Image source={icons.ic_step_1} />
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>担当者の部署</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <InputComponent
            value={info.email}
            placeholder="営業部"
            inputStyle={{}}
            // textError={info.email === undefined ? '' : validateEmail(info.email)}
            onChange={value => {
              handleOnChange(value, 'email');
            }}
          />
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>会社のホームページ</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <InputComponent
            value={info.email}
            placeholder="https://www.example.com"
            inputStyle={{}}
            // textError={info.email === undefined ? '' : validateEmail(info.email)}
            onChange={value => {
              handleOnChange(value, 'email');
            }}
          />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
              marginBottom: verticalScale(4),
            }}>
            <Text
              style={{
                color: '#28323C',
                fontWeight: 'bold',
                fontSize: moderateScale(14),
              }}>
              会社のプロフィール写真
            </Text>
            <Text style={{color: '#28323C', fontSize: moderateScale(14)}}>
              任意
            </Text>
          </View>
          <Text style={{color: '#28323C', fontSize: moderateScale(10)}}>
            ※ 会社に属している各ユーザーごとに変更が可能です。
          </Text>
          <View style={styles.wrapUploadImage}>
            <View>
              <Image source={icons.avatar_default} />
            </View>
            <StyledTouchable
              style={{width: scale(200)}}
              custom={true}
              onPress={onLaunchImageLibrary}
              text={'撮影または写真を選択'}></StyledTouchable>
          </View>
          <StyledTouchable
            onPress={() => {
              handleSubmit();
            }}
            text={'次へ'}></StyledTouchable>
        </View>
      </View>
    </>
  );
};

export default CompanyOnboarding1;

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
  },
  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(32),
  },
  wrapLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightLabel: {
    color: '#CC2E4A',
  },
  wrapUploadImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(8),
    marginBottom: verticalScale(32),
  },
});
