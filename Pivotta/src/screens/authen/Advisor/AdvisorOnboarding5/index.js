import React, {useRef, useState} from 'react';
import {
  Image,
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';

const AdvisorOnboarding5 = () => {
  const insets = useSafeAreaInsets();
  const [titleHeader, setTitleHeader] = useState('');
  const refTitle = useRef(null);

  const handleWorkHistory = () => {
    console.log('call navigate work history');
    navigate('AdvisorWorkHistory');
  };

  const handleScroll = event => {
    console.log('call scrolllllllllll', event.nativeEvent.contentOffset.y);
    if (event.nativeEvent.contentOffset.y > 30) {
      setTitleHeader('基本情報登録');
    } else {
      setTitleHeader('');
    }
  };

  const handleRegister = () => {
    navigate('AdvisorRegiterSuccess');
  };

  return (
    <View style={{flex: 1, paddingBottom: insets.bottom}}>
      <Header title={titleHeader} />

      <ScrollView
        style={[styles.container]}
        onScroll={event => {
          handleScroll(event);
        }}
        scrollEventThrottle={16}>
        <View style={styles.wrapTitle} ref={refTitle}>
          <Text style={styles.title}>基本情報登録</Text>
          <Image source={icons.ic_step_1} />
        </View>
        <View style={styles.wrapLabel}>
          <Text>本人確認書類</Text>
          <Text style={styles.rightLabel}>必須</Text>
        </View>
        <View style={styles.wrapContent}>
          <Text style={[styles.text, {marginBottom: verticalScale(20)}]}>
            ご自身の職務経歴を以下の例に沿ってご記入ください。
          </Text>
          <View style={styles.desc}>
            <Text style={styles.txtDesc}>【経歴1】</Text>
            <Text style={styles.txtDesc}>（在籍期間）〇〇年〜〇〇年</Text>
            <Text style={styles.txtDesc}>（会社名）　株式会社△△</Text>
            <Text style={styles.txtDesc}>（職務内容）・・・</Text>
            <Text style={[styles.txtDesc, {marginTop: verticalScale(10)}]}>
              【経歴2】・・・
            </Text>
          </View>
          <TouchableOpacity
            style={styles.btn}
            disabled={false}
            onPress={() => handleWorkHistory()}>
            <Text style={[styles.txtBtn]}></Text>
            <Text style={styles.txtBtn}>職務経歴を入力する</Text>
            <Image source={icons.ic_arrow_right}></Image>
          </TouchableOpacity>
        </View>
        <StyledTouchable
          onPress={() => {
            handleRegister();
          }}
          style={{marginTop: verticalScale(20)}}
          text={'審査を申請する'}></StyledTouchable>
      </ScrollView>
    </View>
  );
};

export default AdvisorOnboarding5;

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

  wrapLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  rightLabel: {
    color: '#CC2E4A',
  },

  wrapContent: {
    backgroundColor: '#E5E5E5',
    borderRadius: scale(16),
    padding: scale(20),
    color: '#28323C',
  },
  text: {
    color: '#28323C',
    fontSize: moderateScale(12),
  },
  indexNumber: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(16),
    height: scale(16),
    backgroundColor: '#000',
    borderRadius: scale(8),
    marginRight: scale(10),
  },
  indexChild: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: scale(4),
    height: scale(4),
    backgroundColor: '#000',
    borderRadius: scale(2),
    marginRight: scale(10),
  },
  txtIndexNumber: {
    color: '#fff',
  },
  wrapContentChild: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: scale(8),
    marginVertical: verticalScale(10),
  },
  txtSelectFile: {
    textAlign: 'center',
    marginVertical: verticalScale(15),
    color: '#28323C',
  },
  desc: {
    backgroundColor: '#fff',
    borderRadius: scale(16),
    marginBottom: verticalScale(24),
    padding: scale(20),
  },
  txtDesc: {
    color: '#28323C',
    fontSize: moderateScale(12),
    lineHeight: 1.5 * moderateScale(12),
  },
  btn: {
    backgroundColor: '#fff',
    height: 50,
    // marginHorizontal: scale(50),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingHorizontal: scale(20),
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txtBtn: {
    color: '#59CDD5',
    fontSize: moderateScale(14),
  },
});
