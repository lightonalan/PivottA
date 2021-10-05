import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import ModalPopup from 'src/components/ModalPopup';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, verticalScale} from 'src/utils/theme/Scale';

const AdvisorRegiterSuccess = () => {
  const handleNavigateUnderReview = () => {
    navigate('AdvisorUnderReview');
  };

  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <Text style={styles.title}>本会員登録の完了</Text>
        <View style={styles.wrapImage}>
          <Image source={icons.image_mail_box} />
        </View>
        <View style={styles.wrapTextDesc}>
          <Text style={styles.txtDesc}>本会員登録の申請が完了しました。</Text>
          <Text style={styles.txtDesc}>
            審査が完了したら、審査結果がお客様のメールアド
          </Text>
          <Text style={styles.txtDesc}>レスへ届きます。</Text>
        </View>

        <StyledTouchable
          onPress={() => {
            handleNavigateUnderReview();
          }}
          style={{marginTop: verticalScale(16)}}
          text={'OK'}></StyledTouchable>
      </View>
    </>
  );
};

export default AdvisorRegiterSuccess;

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
  wrapTextDesc: {
    flexDirection: 'column',
    alignItems: 'center',
  },
  txtDesc: {
    color: '#28323C',
    fontSize: moderateScale(14),
    lineHeight: 1.5 * moderateScale(14),
  },
});
