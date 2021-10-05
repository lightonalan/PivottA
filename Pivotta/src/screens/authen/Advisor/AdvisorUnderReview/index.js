import React from 'react';
import {Image, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import ModalPopup from 'src/components/ModalPopup';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, verticalScale} from 'src/utils/theme/Scale';

const AdvisorUnderReview = () => {
  const handleNavigateUnderReview = () => {};
  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <Text style={styles.title}>審査中</Text>
        <View style={styles.wrapImage}>
          <Image source={icons.image_mail_box} />
        </View>
        <View style={styles.wrapTextDesc}>
          <Text style={styles.txtDesc}>現在、お客様はまだ審査中です。</Text>
          <Text style={styles.txtDesc}>
            審査が完了したら、審査結果がお客様のメールアド
          </Text>
          <Text style={styles.txtDesc}>
            レスへ届きます。また、申請から５日経過しても結
          </Text>
          <Text style={styles.txtDesc}>
            果の通知がない場合、お手数ですが以下メールアド
          </Text>
          <Text style={styles.txtDesc}>レスよりお問い合わせください。</Text>
        </View>
        <TouchableOpacity
          onPress={() => {
            navigate('AdvisorPassedExam');
          }}>
          <Text style={styles.txtLink}>pivotta_support@spool.co.jp</Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default AdvisorUnderReview;

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
    color: '#1A73A5',
    fontSize: moderateScale(14),
    textAlign: 'center',
    marginVertical: verticalScale(16),
  },
});
