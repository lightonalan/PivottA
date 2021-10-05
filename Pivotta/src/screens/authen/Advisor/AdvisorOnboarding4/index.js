import React, {useRef, useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';

import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import StyledTouchable from 'src/components/StyledTouchable';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';

const AdvisorOnboarding4 = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    email: undefined,
    password: undefined,
  });
  const [titleHeader, setTitleHeader] = useState('');
  const refTitle = useRef(null);
  const handleScroll = event => {
    if (event.nativeEvent.contentOffset.y > 30) {
      setTitleHeader('基本情報登録');
    } else {
      setTitleHeader('');
    }
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
            以下の注意事項をご確認のうえ、本人確認書類のアップロードをお願いします。
          </Text>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.indexNumber}>
                <Text style={styles.txtIndexNumber}>1</Text>
              </View>
              <Text style={styles.text}>提出が１点でも可能な書類</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>運転免許証</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>パスポート</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>身体障がい者手帳</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>
                精神障がい者保健福祉手帳（障がい者手帳）
              </Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>療育手帳</Text>
            </View>
          </View>
          <View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <View style={styles.indexNumber}>
                <Text style={styles.txtIndexNumber}>2</Text>
              </View>
              <Text style={styles.text}>提出が２点必要な書類</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>運転免許証</Text>
            </View>
            <Text>※ A群とB群から１点ずつ必要です。</Text>
          </View>
          <View>
            <Text style={{marginTop: verticalScale(20)}}>A群</Text>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>健康保険証</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>
                住民基本台帳カード（顔写真があるもの）
              </Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>在留カード＋外国発行パスポート</Text>
            </View>
          </View>
          <View>
            <Text style={{marginTop: verticalScale(20)}}>B群</Text>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>学生証（写真付）</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>法人の身分証明書（写真付）</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>官公署発行の資格証明書（写真付）</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>公共料金領収書（3か月以内）</Text>
            </View>
            <View style={styles.wrapContentChild}>
              <View style={styles.indexChild}>
                <Text style={styles.txtIndexChild}></Text>
              </View>
              <Text style={styles.text}>
                官公署からの通知書（住所、氏名の記載あるもの）
              </Text>
            </View>
          </View>
          <Text style={styles.txtSelectFile}>本人確認書類１点目（表面）</Text>
          <StyledTouchable
            custom={true}
            text="ファイルを選択"></StyledTouchable>
          <Text style={styles.txtSelectFile}>本人確認書類１点目（表面）</Text>
          <StyledTouchable
            custom={true}
            text="ファイルを選択"></StyledTouchable>
          <Text style={styles.txtSelectFile}>本人確認書類１点目（表面）</Text>
          <StyledTouchable
            custom={true}
            text="ファイルを選択"></StyledTouchable>
          <Text style={styles.txtSelectFile}>本人確認書類１点目（表面）</Text>
          <StyledTouchable
            custom={true}
            text="ファイルを選択"></StyledTouchable>
          <View style={{marginTop: verticalScale(20)}}>
            <Text style={styles.textDesc}> 拡張子： png, jpg, jpeg, heic </Text>
            <Text style={styles.textDesc}> アップロード可能数： 4 </Text>
            <Text style={styles.textDesc}>
              最大ファイルサイズ： 1ファイルにつき1MB{' '}
            </Text>
          </View>
        </View>
        <StyledTouchable
          style={{marginTop: verticalScale(20)}}
          onPress={() => {
            console.log('calll next');
            navigate('AdvisorOnboarding5');
          }}
          text={'次へ'}></StyledTouchable>
      </ScrollView>
    </View>
  );
};

export default AdvisorOnboarding4;

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
  textDesc: {
    fontSize: moderateScale(14),
    color: '#28323C',
  },
});
