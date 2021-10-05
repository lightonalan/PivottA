import React, {useEffect, useState} from 'react';
import {
  Image,
  Platform,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
} from 'react-native';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import StyledTouchable from 'src/components/StyledTouchable';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import ImagePicker from 'react-native-image-crop-picker';
import InputComponent from 'src/components/InputComponent';
import RNPickerSelect from 'react-native-picker-select';
import {validateUserName} from 'src/utils/validation/Validation';
import CheckBox from 'react-native-check-box';
import {navigate} from 'src/navigation/service/NavigationService';
import _ from 'lodash';

const AdvisorProfileRegistration = props => {
  const nameValue = _.get(props, 'route.params.nameValue');
  const infoCareer = _.get(props, 'route.params.infoCareer');
  const [info, setInfo] = useState({
    name: undefined,
    status: undefined,
  });
  const [indexActive, setIndexActive] = useState(0);
  const [showInfoCareer, setShowInfoCareer] = useState(false);

  useEffect(() => {
    if (
      infoCareer?.nameCompany ||
      infoCareer?.industry ||
      infoCareer?.numberOfEmployees ||
      // infoCareer?.startDate ||
      infoCareer?.detailCareer
    ) {
      setShowInfoCareer(true);
    }
  }, [infoCareer]);

  const onLaunchImageLibrary = () => {
    console.log('call upload image');
    ImagePicker.openPicker({
      width: 300,
      height: 400,
      cropping: true,
    }).then(image => {
      console.log(image);
    });
  };

  const handleOnChange = (value, key) => {
    setInfo({...info, [key]: value});
  };

  const handleChangeGender = key => {
    if (key === 'male') {
      setIndexActive(0);
    } else {
      setIndexActive(1);
    }
  };

  const navigateIntroduction = () => {
    console.log('navigateIntroduction');
    navigate('IntroductionMySelf');
  };

  const navigateRegisterCareerMySelf = () => {
    console.log('navigateIntroduction');
    navigate('RegisterCareerMySelf');
  };

  const navigateAchievement = () => {
    console.log('AdvisorAchievement');
    navigate('AdvisorAchievement');
  };

  return (
    <>
      <Header />
      <ScrollView style={[styles.container]}>
        <Text style={styles.title}>プロフィールの登録</Text>
        <Text style={styles.txtLinkToReview}>
          どのようにプロフィールを作るか参考のプロフィールを確認
        </Text>
        <View style={styles.wrapLabel}>
          <Text style={styles.leftLabel}>担当者の部署</Text>
          <Text style={[styles.rightLabel, {color: '#28323C'}]}>必須</Text>
        </View>
        <View style={styles.wrapUploadImage}>
          <View>
            <Image source={icons.avatar_default} />
          </View>

          <StyledTouchable
            style={{width: scale(220)}}
            custom={true}
            onPress={onLaunchImageLibrary}
            text={'撮影または写真を選択'}></StyledTouchable>
        </View>
        <View style={{}}>
          <View style={styles.wrapLabel}>
            <Text>担当者の部署</Text>
            <Text style={styles.rightLabel}>必須</Text>
          </View>
          <Text style={styles.descInputName}>
            ※ 本名またはビジネスネームをご記入ください。
          </Text>
          <InputComponent
            value={info.name}
            placeholder="例）＊＊＊先生"
            inputStyle={{}}
            textError={
              info.name === undefined ? '' : validateUserName(info.name)
            }
            onChange={value => {
              handleOnChange(value, 'name');
            }}
          />
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>ステータス</Text>
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
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>担当者の部署</Text>
            <Text style={[styles.rightLabel, {color: '#28323C'}]}>必須</Text>
          </View>
          <InputComponent
            value={info.name}
            placeholder="例）"
            inputStyle={{}}
            // textError={info.email === undefined ? '' : validateEmail(info.email)}
            onChange={value => {
              handleOnChange(value, 'name');
            }}
          />
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>性別</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                style={{}}
                isChecked={true}
                onClick={() => {
                  console.log('callll');
                }}
              />
              <Text style={{color: '#28323C'}}>非表示にする</Text>
              <Text
                style={[
                  styles.rightLabel,
                  {color: '#28323C', marginLeft: scale(15)},
                ]}>
                任意
              </Text>
            </View>
          </View>
          <View style={styles.gender}>
            <TouchableOpacity
              onPress={() => {
                handleChangeGender('male');
              }}>
              <View
                style={indexActive === 0 ? styles.buttonActive : styles.button}>
                <Text
                  style={indexActive === 0 ? styles.textActive : styles.text}>
                  男性
                </Text>
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                handleChangeGender('female');
              }}>
              <View
                style={indexActive === 1 ? styles.buttonActive : styles.button}>
                <Text
                  style={indexActive === 1 ? styles.textActive : styles.text}>
                  女性
                </Text>
              </View>
            </TouchableOpacity>
          </View>
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>年齢</Text>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
              }}>
              <CheckBox
                style={{}}
                isChecked={true}
                onClick={() => {
                  console.log('callll');
                }}
              />
              <Text style={{color: '#28323C'}}>非表示にする</Text>
              <Text
                style={[
                  styles.rightLabel,
                  {color: '#28323C', marginLeft: scale(15)},
                ]}>
                任意
              </Text>
            </View>
          </View>
          <InputComponent
            value={info.name}
            placeholder="39歳"
            inputStyle={{
              backgroundColor: '#E5E5E5',
            }}
            textError={
              info.name === undefined ? '' : validateUserName(info.name)
            }
            onChange={value => {
              handleOnChange(value, 'name');
            }}
          />
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>自己紹介文</Text>
            <Text
              style={[
                styles.rightLabel,
                {color: '#28323C', marginLeft: scale(15)},
              ]}>
              任意
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigateIntroduction();
            }}>
            <View style={styles.buttonCustom}>
              <Text
                style={nameValue ? {color: '#28323C'} : styles.txtButtonCustom}
                numberOfLines={1}>
                {nameValue ? nameValue : '自己紹介文を入力する'}
              </Text>
              <Image source={icons.ic_arrow_right} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>経歴（上限５つまで）</Text>
            <Text
              style={[
                styles.rightLabel,
                {color: '#28323C', marginLeft: scale(15)},
              ]}>
              任意
            </Text>
          </View>
          {!showInfoCareer ? (
            <TouchableOpacity
              onPress={() => {
                navigateRegisterCareerMySelf();
              }}>
              <View style={styles.buttonCustom}>
                <Text style={styles.txtButtonCustom}>経歴を登録する</Text>
                <Image source={icons.ic_arrow_right} />
              </View>
            </TouchableOpacity>
          ) : (
            <View style={styles.wrapInfo}>
              <View style={styles.headerInfo}>
                <Text>2021年</Text>
                <View style={styles.headerInfoRight}>
                  <TouchableOpacity
                    onPress={() => {
                      navigateRegisterCareerMySelf();
                    }}>
                    <Image
                      style={{marginHorizontal: scale(10)}}
                      source={icons.ic_edit}></Image>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => {
                      setShowInfoCareer(false);
                    }}>
                    <Image source={icons.ic_close}></Image>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.headerInfoRight}>
                <Text>製造業</Text>
                <Text>従業員数：400人</Text>
              </View>
              <View>
                {infoCareer?.nameCompany ? (
                  <Text style={styles.decsInfo}>{infoCareer?.nameCompany}</Text>
                ) : null}
                {infoCareer?.industry ? (
                  <Text style={styles.decsInfo}>{infoCareer?.industry}</Text>
                ) : null}
                {infoCareer?.numberOfEmployees ? (
                  <Text style={styles.decsInfo}>
                    {infoCareer?.numberOfEmployees}
                  </Text>
                ) : null}
                {infoCareer?.startDate ? (
                  <Text style={styles.decsInfo}>{infoCareer?.startDate}</Text>
                ) : null}
                {infoCareer?.endDate ? (
                  <Text style={styles.decsInfo}>{infoCareer?.endDate}</Text>
                ) : null}
                {infoCareer?.detailCareer ? (
                  <Text style={styles.decsInfo}>
                    {infoCareer?.detailCareer}
                  </Text>
                ) : null}
              </View>
            </View>
          )}
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>実績（上限３つまで）</Text>
            <Text
              style={[
                styles.rightLabel,
                {color: '#28323C', marginLeft: scale(15)},
              ]}>
              任意
            </Text>
          </View>
          <TouchableOpacity
            onPress={() => {
              navigateAchievement();
            }}>
            <View style={styles.buttonCustom}>
              <Text style={styles.txtButtonCustom}>実績を登録する</Text>
              <Image source={icons.ic_arrow_right} />
            </View>
          </TouchableOpacity>
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>時間単位の報酬</Text>
            <Text style={[styles.rightLabel]}>必須</Text>
          </View>
          <InputComponent
            value={info.name}
            placeholder="20分あたり"
            inputStyle={{}}
            textError={
              info.name === undefined ? '' : validateUserName(info.name)
            }
            onChange={value => {
              handleOnChange(value, 'name');
            }}
          />
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>動画</Text>
            <Text style={[styles.rightLabel]}>必須</Text>
          </View>
          <View style={styles.wrapMovie}>
            <Text style={styles.descMovie}>
              動画に関する説明が入ります動画に関する説明が入ります動画に関する説明が入ります動画に関する説明が入ります動画に関する説明が入ります動画に関する説明が入ります動画に関する説明が入ります
            </Text>
            <StyledTouchable
              custom={true}
              style={{marginVertical: verticalScale(25)}}
              text={'動画を選択'}></StyledTouchable>
            <Text style={styles.text}>拡張子： mp4, mov</Text>
            <Text style={styles.text}>
              ファイルサイズ上限： 1ファイルにつき20MB
            </Text>
          </View>
        </View>
        <View>
          <View style={styles.wrapLabel}>
            <Text>強みタグ（上限１０つまで） </Text>
            <Text style={[styles.rightLabel]}>必須</Text>
          </View>
          <InputComponent
            value={info.name}
            placeholder="追加したいタグを入力してください"
            inputStyle={{}}
            textError={
              info.name === undefined ? '' : validateUserName(info.name)
            }
            onChange={value => {
              handleOnChange(value, 'name');
            }}
          />
        </View>
        <StyledTouchable
          style={{marginTop: verticalScale(16)}}
          text={'プロフィール登録へ進む'}></StyledTouchable>
      </ScrollView>
    </>
  );
};

export default AdvisorProfileRegistration;

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
  txtLinkToReview: {
    color: '#59CDD5',
    fontSize: moderateScale(10),
    marginVertical: verticalScale(16),
  },
  wrapLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: verticalScale(10),
    marginTop: verticalScale(24),
  },
  leftLabel: {
    color: '#28323C',
    fontSize: moderateScale(12),
  },
  rightLabel: {
    color: '#CC2E4A',
    fontSize: moderateScale(12),
  },
  wrapUploadImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(8),
    marginBottom: verticalScale(32),
  },
  iconSelect: {
    right: 10,
    top: Platform.OS === 'ios' ? 20 : 24,
  },
  descInputName: {
    fontSize: moderateScale(10),
    color: '#28323C',
  },
  gender: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(164),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#E5E5E5',
    borderRadius: scale(16),
  },
  buttonActive: {
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(164),
    height: verticalScale(50),
    borderWidth: 1,
    borderColor: '#59CDD5',
    borderRadius: scale(16),
  },
  text: {
    color: '#28323C',
    fontSize: moderateScale(14),
  },
  textActive: {
    color: '#59CDD5',
    fontSize: moderateScale(14),
  },
  buttonCustom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#E5E5E5',
    height: verticalScale(50),
    paddingHorizontal: scale(20),
    borderRadius: scale(16),
  },
  txtButtonCustom: {
    color: '#59CDD5',
    fontSize: moderateScale(14),
    paddingRight: scale(10),
  },
  wrapMovie: {
    backgroundColor: '#F4F4F8',
    paddingVertical: verticalScale(24),
    paddingHorizontal: scale(16),
    borderRadius: scale(16),
  },
  descMovie: {
    fontSize: moderateScale(12),
    color: '#28323C',
    lineHeight: 1.5 * moderateScale(12),
  },
  wrapInfo: {
    backgroundColor: '#F4F4F8',
    padding: scale(16),
  },
  headerInfo: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  headerInfoRight: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: verticalScale(6),
  },
  decsInfo: {
    color: '#506478',
    fontSize: moderateScale(10),
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
