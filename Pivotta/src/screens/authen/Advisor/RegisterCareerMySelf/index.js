import React, {useState} from 'react';
import {Platform, StyleSheet, Text, View, ScrollView} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import RNPickerSelect from 'react-native-picker-select';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import {navigate} from 'src/navigation/service/NavigationService';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import {validateRequired} from 'src/utils/validation/Validation';
import DatePicker from 'react-native-datepicker';
import {Image} from 'react-native';
import {icons} from 'src/assets/Icons';

const RegisterCareerMySelf = () => {
  const insets = useSafeAreaInsets();
  const [startDate, setStartDate] = useState('2000-06-01');
  const [endDate, setEndDate] = useState('2000-06-01');
  const [nameCompany, setNameCompany] = useState('');
  const [industry, setIndustry] = useState('');
  const [numberOfEmployees, setNumberOfEmployees] = useState('');
  const [detailCareer, setDetailCareer] = useState('');

  const handleOnChange = value => {
    console.log('handleOnChange', value);
    setNameCompany(value);
  };

  const handleRegister = () => {
    const infoCareer = {
      nameCompany,
      industry,
      numberOfEmployees,
      startDate,
      endDate,
      detailCareer,
    };
    console.log('handleRegister', infoCareer);
    navigate('AdvisorProfileRegistration', {infoCareer: infoCareer});
  };

  const handleOnChangeIndustry = value => {
    console.log('handleOnChangeIndustry', value);
    setIndustry(value);
  };

  const handlePressDoneIndustry = value => {
    console.log('handlePressDoneIndustry', industry);
  };

  const handleOnChangeEmployees = value => {
    console.log('handleOnChangeEmployees', value);
    setNumberOfEmployees(value);
  };

  const handlePressDoneEmployees = () => {
    console.log('handlePressDoneEmployees', numberOfEmployees);
  };
  const handleChangeDetailCareer = value => {
    console.log('handleChangeDetailCareer', value);
    setDetailCareer(value);
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
      <ScrollView style={[styles.container]}>
        <View style={styles.wrapTitle}>
          <Text style={styles.title}>経歴</Text>
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
              handleOnChange(value);
            }}
          />
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>開始年月</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <DatePicker
            style={styles.datePicker}
            locale={'ja'}
            date={startDate}
            mode="date"
            placeholder="select date"
            format="YYYY/MM/DD"
            confirmBtnText="OK"
            cancelBtnText="キャンセル"
            androidMode="spinner"
            maxDate="2099-06-01"
            iconComponent={
              <Image style={[styles.iconsDown]} source={icons.ic_arrow_down} />
            }
            customStyles={{
              dateInput: {
                position: 'relative',
                borderColor: '#ccc',
                borderWidth: scale(1),
                alignItems: 'flex-start',
                height: verticalScale(50),
                borderRadius: scale(16),
                paddingLeft: scale(20),
              },
              datePicker: {
                justifyContent: 'center',
              },
              dateText: {
                fontSize: moderateScale(14),
                color: '#333',
                lineHeight: moderateScale(14),
              },
              btnTextConfirm: {
                color: '#439EE0',
                fontSize: moderateScale(14),
              },
              btnTextCancel: {
                fontSize: moderateScale(14),
                color: '#439EE0',
              },
            }}
            onDateChange={date => setStartDate(date)}
          />
        </View>
        <View style={styles.endDate}>
          <View style={styles.wrapLabel}>
            <Text>終了年月</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <DatePicker
            style={styles.datePicker}
            locale={'ja'}
            date={endDate}
            mode="date"
            placeholder="select date"
            format="YYYY/MM/DD"
            confirmBtnText="OK"
            cancelBtnText="キャンセル"
            androidMode="spinner"
            maxDate="2099-06-01"
            iconComponent={
              <Image style={[styles.iconsDown]} source={icons.ic_arrow_down} />
            }
            customStyles={{
              dateInput: {
                position: 'relative',
                borderColor: '#ccc',
                borderWidth: scale(1),
                alignItems: 'flex-start',
                height: verticalScale(50),
                borderRadius: scale(16),
                paddingLeft: scale(20),
              },
              datePicker: {
                justifyContent: 'center',
              },
              dateText: {
                fontSize: moderateScale(14),
                color: '#333',
                lineHeight: moderateScale(14),
              },
              btnTextConfirm: {
                color: '#439EE0',
                fontSize: moderateScale(14),
              },
              btnTextCancel: {
                fontSize: moderateScale(14),
                color: '#439EE0',
              },
            }}
            onDateChange={date => setEndDate(date)}
          />
        </View>
        <View style={{marginTop: verticalScale(24)}}>
          <View style={styles.wrapLabel}>
            <Text>業界</Text>
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
              handleOnChangeIndustry(value);
            }}
            onDonePress={() => {
              handlePressDoneIndustry();
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
        <View style={{marginTop: verticalScale(24)}}>
          <View style={styles.wrapLabel}>
            <Text>従業員数</Text>
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
              handleOnChangeEmployees(value);
            }}
            onDonePress={() => {
              handlePressDoneEmployees();
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
        <View style={{marginTop: verticalScale(24)}}>
          <View style={styles.wrapLabel}>
            <Text>従業員数</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>

          <InputComponent
            value={detailCareer}
            placeholder="ハイフンなし"
            inputStyle={{
              height: verticalScale(200),
              marginBottom: verticalScale(40),
            }}
            textArea={true}
            // textError={
            //   info.password === undefined ? '' : validateRequired(info.password)
            // }
            onChange={value => handleChangeDetailCareer(value)}
          />
        </View>
      </ScrollView>
    </>
  );
};

export default RegisterCareerMySelf;

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
  datePicker: {
    width: '100%',
    marginTop: verticalScale(10),
  },
  iconsDown: {
    position: 'absolute',
    right: scale(20),
  },
  endDate: {
    marginTop: verticalScale(26),
  },
  iconSelect: {
    right: scale(20),
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
