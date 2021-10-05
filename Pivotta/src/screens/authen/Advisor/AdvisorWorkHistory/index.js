import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import Header from 'src/components/Header';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';

const AdvisorWorkHistory = () => {
  const handleNavigateRegister = () => {
    navigate('AdvisorOnboarding5');
  };
  return (
    <View style={{flex: 1}}>
      <Header
        title={'1234'}
        iconRight={
          <TouchableOpacity
            onPress={() => {
              handleNavigateRegister();
            }}>
            <View style={styles.btnHeaderRight}>
              <Text style={styles.txtHeaderRight}>登録</Text>
            </View>
          </TouchableOpacity>
        }
      />

      <View style={[styles.container]} scrollEventThrottle={16}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>基本情報登録</Text>
        </View>
        <View style={styles.wrapContent}>
          <Text style={[styles.text, {marginBottom: verticalScale(20)}]}>
            ※記入例
          </Text>
          <View style={styles.desc}>
            <Text style={styles.txtDesc}>【経歴1】</Text>
            <Text style={styles.txtDesc}>（在籍期間）〇〇年〜〇〇年</Text>
            <Text style={styles.txtDesc}>（会社名）　株式会社△△</Text>
            <Text style={styles.txtDesc}>（（役職）室長</Text>
            <Text style={styles.txtDesc}>
              （職務内容）人材派遣事業で培った50万人の採用ノウハウを活用し、採用支援事業を立ち上げた。全国チェーン大手企業を中心に200社以上の採用支援を手掛けている。
            </Text>
            <Text style={[styles.txtDesc, {marginTop: verticalScale(10)}]}>
              【経歴2】・・・
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default AdvisorWorkHistory;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: '#fff',
  },
  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(32),
  },
  title: {
    color: '#28323C',
    fontWeight: 'bold',
    fontSize: moderateScale(18),
  },
  txtDesc: {
    color: '#28323C',
    fontSize: moderateScale(14),
    lineHeight: 1.5 * moderateScale(14),
  },
  btnHeaderRight: {
    backgroundColor: '#59CDD5',
    borderRadius: scale(16),
    paddingHorizontal: scale(16),
    paddingVertical: verticalScale(5),
  },
  txtHeaderRight: {
    fontSize: moderateScale(14),
    color: '#fff',
  },
});
