import React from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import StyledTouchable from 'src/components/StyledTouchable';
import {moderateScale, verticalScale} from 'src/utils/theme/Scale';

const AdvisorJudgmentFailure = () => {
  return (
    <>
      <Header />
      <View style={[styles.container]}>
        <Text style={styles.title}>審査落選</Text>
        <View style={styles.wrapImage}>
          <Image source={icons.image_mail_box} />
        </View>
        <View style={styles.wrapTextDesc}>
          <Text style={styles.txtDesc}>
            お客様は何らかの理由により審査に落ちました。審
            査落選理由につきましては別途メールをご確認ください。
          </Text>
        </View>
        <StyledTouchable
          onPress={() => {}}
          style={{marginTop: verticalScale(16)}}
          text={'OK'}></StyledTouchable>
        <Text style={styles.txtLink}>pivotta_support@spool.co.jp</Text>
      </View>
    </>
  );
};

export default AdvisorJudgmentFailure;

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
