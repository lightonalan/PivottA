import React, {useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import RNPickerSelect from 'react-native-picker-select';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import StyledTouchable from 'src/components/StyledTouchable';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import {validateEmail, validatePassWord} from 'src/utils/validation/Validation';

const AdvisorOnboarding3 = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    email: undefined,
    password: undefined,
  });
  const [indexActive, setIndexActive] = useState(0);

  const [isFocus, setIsFocus] = useState({
    input1: false,
    input2: false,
    input3: false,
    input4: false,
  });

  const handleOnFocus = key => {
    console.log('call handleOnFocus');
    setIsFocus({...isFocus, [key]: true});
  };

  const handleOnBlur = key => {
    console.log('call handleOnBlur');
    setIsFocus({...isFocus, [key]: false});
  };

  const handleChangeTab = key => {
    if (key === 'tab1') {
      setIndexActive(0);
    } else {
      setIndexActive(1);
    }
  };

  console.log('isFocus', isFocus);

  const handleChangeSelect = () => {};
  const handleSubmitChangeSelect = () => {};
  return (
    <>
      <Header />
      <View
        style={[
          styles.container,
          {paddingTop: insets.top, paddingBottom: insets.bottom},
        ]}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>基本情報登録</Text>
          <Image source={icons.ic_step_1} />
        </View>
        <View style={styles.wrapLabel}>
          <Text>担当者の部署</Text>
          <Text style={styles.rightLabel}>必須</Text>
        </View>
        <View style={styles.wrapButton}>
          <TouchableOpacity
            onPress={() => {
              handleChangeTab('tab1');
            }}>
            <View
              style={indexActive === 0 ? styles.buttonActive : styles.button}>
              <Text>法人</Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {
              handleChangeTab('tab2');
            }}>
            <View
              style={indexActive === 1 ? styles.buttonActive : styles.button}>
              <Text>法人</Text>
            </View>
          </TouchableOpacity>
        </View>
        {indexActive === 0 ? (
          <View>
            <View style={styles.wrapLabel}>
              <Text>法人名</Text>
              <Text style={styles.rightLabel}>必須</Text>
            </View>
            <InputComponent
              value={info.email}
              placeholder="例）株式会社＊＊＊"
              inputStyle={{}}
              onFocus={() => handleOnFocus('input4')}
              onBlur={() => handleOnBlur('input4')}
              isFocus={isFocus.input4}
              textError={
                info.email === undefined ? '' : validateEmail(info.email)
              }
              onChange={value => {}}
            />
          </View>
        ) : (
          <View>
            <View style={styles.wrapLabel}>
              <Text>屋号</Text>
              <Text style={styles.rightLabel}>必須</Text>
            </View>
            <InputComponent
              value={info.email}
              placeholder="例）株式会社＊＊＊"
              inputStyle={{}}
              onFocus={() => handleOnFocus('input4')}
              onBlur={() => handleOnBlur('input4')}
              isFocus={isFocus.input4}
              textError={
                info.email === undefined ? '' : validateEmail(info.email)
              }
              onChange={value => {}}
            />
          </View>
        )}

        <StyledTouchable
          style={{marginTop: verticalScale(20)}}
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

export default AdvisorOnboarding3;

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
  txtZipCode: {
    textAlign: 'center',
    color: '#59CDD5',
    fontSize: moderateScale(14),
    marginVertical: verticalScale(10),
  },
  wrapLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: verticalScale(10),
  },
  rightLabel: {
    color: '#CC2E4A',
  },
  wrapButton: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSelect: {
    right: 10,
    top: Platform.OS === 'ios' ? 20 : 24,
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(164),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: 10,
  },
  buttonActive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(164),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#59CDD5',
    borderRadius: 10,
  },
});

const pickerSelectStyles = StyleSheet.create({
  inputIOS: {
    fontSize: moderateScale(15),
    paddingHorizontal: scale(5),
    borderColor: '#ccc',
    borderWidth: verticalScale(1),
    backgroundColor: 'white',
    color: '#333',
    height: 50,
    position: 'relative',
    borderRadius: 16,
  },
  inputAndroid: {
    fontSize: moderateScale(4.27),
    paddingBottom: verticalScale(2.67),
    borderBottomColor: '#ccc',
    borderBottomWidth: verticalScale(0.27),
    backgroundColor: 'white',
    color: '#333',
    position: 'relative',
  },
});
