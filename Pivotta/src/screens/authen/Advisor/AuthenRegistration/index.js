import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import ModalPopup from 'src/components/ModalPopup';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';

const AuthenRegistration = () => {
  const insets = useSafeAreaInsets();

  const [isVisible, setIsVisible] = useState(true);

  return (
    <>
      <Header />
      <View
        style={[
          styles.container,
          {paddingTop: insets.top, paddingBottom: insets.bottom},
        ]}>
        <ModalPopup
          isVisible={isVisible}
          renderHeader={
            <Image style={styles.image} source={icons.image_mail_box} />
          }
          renderBody={
            <>
              <Text style={styles.text}>本会員登録には審査があり、</Text>
              <Text style={styles.text}>
                あなたの本人確認書類等が必要です。
              </Text>
            </>
          }
          renderBottom={
            <>
              <StyledTouchable
                onPress={() => {
                  setIsVisible(false);
                  navigate('AdvisorOnboarding1');
                }}
                style={{marginBottom: verticalScale(10)}}
                text={'このまま進む'}></StyledTouchable>
              <StyledTouchable
                onPress={() => {
                  setIsVisible(false);
                }}
                custom={true}
                text={'キャンセル'}></StyledTouchable>
            </>
          }
        />

        <Text style={styles.title}>基本情報登録</Text>
        <View style={styles.wrapImage}>
          <Image source={icons.image_mail_box} />
        </View>
        <Text style={styles.messText}>仮会員登録の認証に成功しました。</Text>
        <StyledTouchable
          style={{marginTop: verticalScale(16)}}
          text={'本会員登録に進む'}></StyledTouchable>
      </View>
    </>
  );
};

export default AuthenRegistration;

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
  wrapImage: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: verticalScale(32),
    marginBottom: verticalScale(16),
  },
  messText: {
    color: '#28323C',
    fontSize: moderateScale(14),
    textAlign: 'center',
  },
  image: {
    width: scale(100),
    height: verticalScale(80),
  },
  text: {
    paddingVertical: verticalScale(2),
  },
});
