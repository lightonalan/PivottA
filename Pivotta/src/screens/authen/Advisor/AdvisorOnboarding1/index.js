import React, {useState} from 'react';
import {Image, Platform, StyleSheet, Text, View} from 'react-native';
import RNPickerSelect from 'react-native-picker-select';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import StyledTouchable from 'src/components/StyledTouchable';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import {validateEmail, validatePassWord} from 'src/utils/validation/Validation';

const AdvisorOnboarding1 = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    email: undefined,
    password: undefined,
  });

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
        <View>
          <View style={styles.wrapLabel}>
            <Text>担当者の部署</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <View style={styles.groupInput}>
            <InputComponent
              value={info.email}
              placeholder="example@gmail.com"
              inputStyle={{}}
              onFocus={() => handleOnFocus('input1')}
              onBlur={() => handleOnBlur('input1')}
              isFocus={isFocus.input1}
              textError={
                info.email === undefined ? '' : validateEmail(info.email)
              }
              onChange={value => {}}
            />
            <InputComponent
              value={info.email}
              placeholder="example@gmail.com"
              inputStyle={{}}
              onFocus={() => handleOnFocus('input2')}
              onBlur={() => handleOnBlur('input2')}
              isFocus={isFocus.input2}
              textError={
                info.email === undefined ? '' : validateEmail(info.email)
              }
              onChange={value => {}}
            />
          </View>
          <View style={styles.groupInput}>
            <InputComponent
              value={info.email}
              placeholder="example@gmail.com"
              // inputStyle={{width: scale(164)}}
              onFocus={() => handleOnFocus('input3')}
              onBlur={() => handleOnBlur('input3')}
              isFocus={isFocus.input3}
              textError={
                info.email === undefined ? '' : validateEmail(info.email)
              }
              onChange={value => {}}
            />
            <InputComponent
              value={info.email}
              placeholder="example@gmail.com"
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
        </View>
        <View style={{marginBottom: verticalScale(32)}}>
          <View style={styles.wrapLabel}>
            <Text>担当者の部署</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <RNPickerSelect
            placeholder={{}}
            items={[
              {label: 'Football', value: 'football'},
              {label: 'Baseball', value: 'baseball'},
              {label: 'Hockey', value: 'hockey'},
            ]}
            onValueChange={value => {
              console.log('value');
            }}
            onDonePress={() => {
              console.log('value');
            }}
            style={{...pickerSelectStyles}}
            Icon={() => {
              return (
                <Image
                  style={[styles.iconSelect]}
                  source={icons.ic_arrow_down}
                />
              );
            }}
            useNativeAndroidPickerStyle={false}
            hideIcon={true}
          />
          <InputComponent
            value={info.password}
            placeholder="ハイフンなし"
            inputStyle={{}}
            textError={
              info.password === undefined ? '' : validatePassWord(info.password)
            }
            onChange={value => {}}
          />
        </View>
        <StyledTouchable
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

export default AdvisorOnboarding1;

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
  desc: {
    color: '#28323C',
    fontSize: moderateScale(12),
    marginBottom: verticalScale(32),
  },
  wrapLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
  },
  rightLabel: {
    color: '#CC2E4A',
  },
  groupInput: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  iconSelect: {
    right: 10,
    top: Platform.OS === 'ios' ? 20 : 24,
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
