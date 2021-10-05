import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import {validateRequired} from 'src/utils/validation/Validation';
import RNPickerSelect from 'react-native-picker-select';
import {Image} from 'react-native';
import { icons } from 'src/assets/Icons';

const AdvisorAchievement = () => {
  const insets = useSafeAreaInsets();

  const [info, setInfo] = useState('');
  const [nameCompany, setNameCompany] = useState('');
  const [year, setYear] = useState('2000');

  const handleOnChange = value => {
    console.log('handleOnChange', value);
    setYear(value);
  };

  const handleOnChangeName = value => {
    console.log('handleOnChange', value);
    setNameCompany(value);
  };

  const handleOnChangeYear = value => {
    console.log();
    setYear(value);
  };
  const handlePressDoneYear = () => {
    console.log('year', year);
  };

  const handleRegister = () => {
    console.log('handleRegister', info);
    navigate('AdvisorProfileRegistration', {nameValue: info});
  };

  return (
    <>
      <Header
        iconRight={
          <TouchableOpacity
            onPress={() => {
              handleRegister();
            }}>
            <View style={styles.btnHeaderRight}>
              <Text style={styles.txtHeaderRight}>登録</Text>
            </View>
          </TouchableOpacity>
        }
      />
      <View style={[styles.container]}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>実績</Text>
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>会社名</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <InputComponent
            value={nameCompany}
            placeholder="例）株式会社＊＊＊"
            // textError={info === undefined ? '' : validateRequired(info)}
            onChange={value => {
              handleOnChangeName(value);
            }}
          />
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>会社名</Text>
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
              handleOnChangeYear(value);
            }}
            onDonePress={() => {
              handlePressDoneYear();
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
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>会社名</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <InputComponent
            value={info}
            placeholder="どのような経歴か具体的に説明して下さい。"
            inputStyle={{height: 200, textAlignVertical: 'top', width: '100%'}}
            textArea={true}
            // textError={info === undefined ? '' : validateRequired(info)}
            onChange={value => {
              handleOnChange(value);
            }}
          />
        </View>
      </View>
    </>
  );
};

export default AdvisorAchievement;

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
