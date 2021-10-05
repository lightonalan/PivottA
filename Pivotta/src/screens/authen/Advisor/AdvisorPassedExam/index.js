import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, verticalScale} from 'src/utils/theme/Scale';

const AdvisorPassedExam = () => {
  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <Text style={styles.title}>審査合格</Text>
        <View style={styles.wrapImage}>
          <Image source={icons.image_mail_box} />
        </View>
        <View style={styles.wrapTextDesc}>
          <Text style={styles.txtDesc}>お客様は無事審査を合格しました。</Text>
          <Text style={styles.txtDesc}>
            企業に見つけてもらえるよう魅力的なプロフィール
          </Text>
          <Text style={styles.txtDesc}>をご確認ください。</Text>
        </View>
        <StyledTouchable
          onPress={() => {
            navigate('AdvisorProfileRegistration');
          }}
          style={{marginTop: verticalScale(16)}}
          text={'プロフィール登録へ進む'}></StyledTouchable>
        <Text style={styles.txtLink}>スキップして、利用を開始する</Text>
      </View>
    </>
  );
};

export default AdvisorPassedExam;

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
  txtLink: {
    color: '#59CDD5',
    fontSize: moderateScale(14),
    textAlign: 'center',
    marginVertical: verticalScale(16),
  },
});
