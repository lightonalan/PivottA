import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AppColors from 'src/utils/theme/AppColors';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import ButtonComponent from 'src/components/ButtonComponent';
import images from 'src/assets/images';
import IconProfiles from 'src/assets/Icons/IconProfiles';
import HeaderBack from 'src/components/HeaderBack';
import {useNavigation} from '@react-navigation/core';
import componentNames from 'src/utils/constant/componentNames';
const CardDetails = () => {
  const {navigate} = useNavigation();
  const [selectedIndex, setSelectedIndex] = useState(0);
  const item = {
    resume: '株式会社Resume',
    job: '営業部長',
    name: '野村  あかり',
    start: '2020/10/21',
    end: '2021/10/21',
    generation: '世代：第35期',
    introduce:
      '教育系の大学を卒業後、新卒で人材派遣・紹介企業に入社して約10年間、営業/キャリアコンサルアントとして主にIT/Web業界のクライアント企業様・転..',
  };

  const ItemConnection = () => {
    return (
      <View style={styles.ItemConnection}>
        <TouchableOpacity>
          <Image style={styles.image} source={images.imagePicker} />
        </TouchableOpacity>
        <Text>Ryan J</Text>
        <View style={{position: 'absolute', right: 10, top: 10}}>
          <Text>3分前</Text>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <HeaderBack
        headerName={'あなたのカード'}
        renderLeft={null}
        renderRight={<Text>掲示</Text>}
      />
      <View style={styles.addImageView}>
        <View style={{flexDirection: 'row'}}>
          <TouchableOpacity>
            <Image style={styles.image} source={images.imagePicker} />
          </TouchableOpacity>
          <View style={{flexDirection: 'column', justifyContent: 'center'}}>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'center',
                padding: 4,
              }}>
              <Text style={{paddingHorizontal: 8}}>{item.resume}</Text>
              <Text style={{paddingHorizontal: 8}}>{'営業部長'}</Text>
              <TouchableOpacity
                style={{
                  backgroundColor: AppColors.black,
                  borderWidth: 1,
                  borderRadius: 26,
                }}>
                <Text style={{paddingHorizontal: 8, color: '#fff'}}>
                  {'公式'}
                </Text>
              </TouchableOpacity>
            </View>
            <Text style={{paddingHorizontal: 12, paddingVertical: 8}}>
              {item.name}
            </Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row'}}>
            <Text style={{padding: 8}}>{item.start}</Text>
            <Text style={{padding: 8}}>{'-'}</Text>
            <Text style={{padding: 8}}>{item.end}</Text>
          </View>
          <Text style={{padding: 8}}>{item.generation}</Text>
          <Text style={{padding: 8}}>{item.introduce}</Text>
        </View>
      </View>
      <ButtonComponent
        onPress={() => {
          navigate(componentNames.NOTICE_BOARD_SCREEN, {});
        }}>
        このカードの掲示板をみる
      </ButtonComponent>

      <View style={styles.tabs}>
        <View
          style={[
            styles.tabClick,
            {
              backgroundColor:
                selectedIndex === 0 ? AppColors.white : AppColors.gray,
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              setSelectedIndex(0);
            }}>
            <Text style={styles.txtTabClick}>
              つながり <Text style={{color: AppColors.backgroundBlue}}>24</Text>
            </Text>
          </TouchableOpacity>
        </View>
        <View
          style={[
            styles.tabClick,
            {
              backgroundColor:
                selectedIndex === 1 ? AppColors.white : undefined,
            },
          ]}>
          <TouchableOpacity
            onPress={() => {
              setSelectedIndex(1);
            }}>
            <Text
              style={[
                styles.txtTabClick,
                {
                  color:
                    selectedIndex === 1 ? AppColors.black : AppColors.white,
                },
              ]}>
              新たなつながり 12
            </Text>
          </TouchableOpacity>
        </View>
      </View>
      <FlatList
        data={selectedIndex === 0 ? [1, 2] : [1, 2, 3, 4]}
        renderItem={() => <ItemConnection item={item} />}
        contentContainerStyle={styles.contentContainerStyle}
      />
    </View>
  );
};
export default CardDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    // justifyContent: 'center',
  },
  addImageView: {
    flexDirection: 'column',
    justifyContent: 'space-between',
    padding: verticalScale(16),
    backgroundColor: AppColors.white,
    borderRadius: 26,
    margin: 16,
  },
  image: {
    width: 60,
    height: 60,
  },
  tabs: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    marginVertical: verticalScale(32),
    backgroundColor: AppColors.gray,
    height: scale(46),
    width: scale(335),
    justifyContent: 'center',
    borderRadius: 26,
    paddingHorizontal: moderateScale(4),
  },
  tabClick: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: scale(164),
    height: scale(36),
    borderRadius: 26,
    marginHorizontal: 2,
    // paddingVertical: 2,
    // paddingHorizontal: 16,
  },
  contentContainerStyle: {
    paddingBottom: 16,
  },
  ItemConnection: {
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: scale(335),
    height: scale(80),
    backgroundColor: 'white',
    marginBottom: verticalScale(8),
    borderRadius: scale(10),
    paddingHorizontal: moderateScale(12),
  },
  avatar: {
    width: scale(48),
    height: scale(48),
    backgroundColor: 'green',
    marginRight: moderateScale(2),
  },
});
