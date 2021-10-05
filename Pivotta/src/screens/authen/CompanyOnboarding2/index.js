import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, ScrollView} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import StyledTouchable from 'src/components/StyledTouchable';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import ImagePicker from 'react-native-image-crop-picker';
import {navigate} from 'src/navigation/service/NavigationService';
import {TouchableOpacity} from 'react-native-gesture-handler';

const data = [
  {model: 'Sentra', doors: 4},
  {model: 'Maxima', doors: 4},
  {model: 'Skyline1', doors: 2},
  {model: 'Skyline2', doors: 2},
  {model: 'Skyline3', doors: 2},
  {model: 'Skyline4', doors: 2},
  {model: 'Skyline5', doors: 2},
];

let dataFilter = [];

const CompanyOnboarding2 = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    text: undefined,
    challenge: undefined,
  });

  const [listTag, setListTag] = useState([]);

  const handleOnChange = (value, key) => {
    setInfo({...info, [key]: value});
    console.log('value', value);
    dataFilter = data.filter(
      itemData => itemData?.model.includes(value) && value !== '',
    );
  };

  const addTag = item => {
    console.log('add tag', item);
    setListTag(listTag.concat(item));
  };

  const ItemResult = ({item}) => {
    return (
      <View style={styles.itemResult}>
        <Text>{item.model}</Text>
        <TouchableOpacity onPress={() => addTag(item)}>
          <Text>+</Text>
        </TouchableOpacity>
      </View>
    );
  };
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
          <View>
            <View style={styles.wrapLabel}>
              <Text>課題のタグ（上限３つまで）</Text>
              <Text style={styles.rightLabel}>任意</Text>
            </View>
            <InputComponent
              value={info.text}
              placeholder="追加したいタグを入力してください"
              inputStyle={{}}
              textError={info.text === undefined ? '' : ''}
              onChange={value => {
                handleOnChange(value, 'text');
              }}
            />
            {dataFilter.length !== 0 ? (
              <View
                style={{
                  backgroundColor: '#fff',
                  borderRadius: 10,
                  shadowColor: '#000',
                  shadowOffset: {
                    width: 0,
                    height: 2,
                  },
                  shadowOpacity: 0.25,
                  shadowRadius: 3.84,

                  elevation: 5,
                  height: 120,
                }}>
                <ScrollView>
                  {dataFilter.map((item, index) => {
                    return <ItemResult item={item} />;
                  })}
                </ScrollView>
              </View>
            ) : null}
          </View>

          {info.text && dataFilter.length === 0 ? (
            <View>
              <StyledTouchable
                custom={true}
                onPress={() => {
                  addTag({model: info.text, doors: 123});
                }}
                text={'このタグを新しく作成する'}></StyledTouchable>
            </View>
          ) : null}

          <View style={styles.listTag}>
            {listTag.map((item, index) => {
              return (
                <View style={styles.itemTagActive}>
                  <Text style={styles.txtTagActive}>{item.model}</Text>
                  <Text style={styles.txtTagActive}>+</Text>
                </View>
              );
            })}
            {/* <View style={styles.itemTag}>
            <Text style={styles.txtTag}>123</Text>
            <Text style={styles.txtTag}>+</Text>
          </View>
          <View style={styles.itemTagActive}>
            <Text style={styles.txtTagActive}>123</Text>
            <Text style={styles.txtTagActive}>+</Text>
          </View> */}
          </View>
          <View style={{marginTop: 20}}>
            <View style={styles.wrapLabel}>
              <Text>課題のタグ（上限３つまで）</Text>
              <Text style={styles.rightLabel}>任意</Text>
            </View>
            <InputComponent
              value={info.challenge}
              placeholder="追加したいタグを入力してください"
              inputStyle={{height: 150}}
              textArea={true}
              // textError={info.email === undefined ? '' : validateEmail(info.email)}
              onChange={value => {
                handleOnChange(value, 'challenge');
              }}
            />
          </View>

          <StyledTouchable
            onPress={() => {
              navigate('CompanyOnboarding3');
            }}
            text={'次へ'}></StyledTouchable>
        </View>
      </View>
    </>
  );
};

export default CompanyOnboarding2;

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
  wrapTitle: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: verticalScale(32),
  },
  wrapLabel: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  rightLabel: {
    // color: '#CC2E4A',
  },
  wrapUploadImage: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: verticalScale(8),
    marginBottom: verticalScale(32),
  },
  itemResult: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 20,
    paddingVertical: 10,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderTopColor: '#E5E5E5',
    borderBottomColor: '#E5E5E5',
  },
  listTag: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: verticalScale(18),
    flexWrap: 'wrap',
  },
  itemTag: {
    backgroundColor: '#EAEAEE',
    marginRight: scale(15),
    height: scale(25),
    width: scale(60),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  itemTagActive: {
    backgroundColor: '#59CDD5',
    marginRight: scale(15),
    height: scale(25),
    width: scale(60),
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  txtTag: {
    color: '#28323C',
  },
  txtTagActive: {
    color: '#fff',
  },
});
