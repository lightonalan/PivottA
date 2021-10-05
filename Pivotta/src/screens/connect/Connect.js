import React, { useState } from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Image,
  FlatList,
} from 'react-native';
import AppColors from 'src/utils/theme/AppColors';
import { moderateScale, scale, verticalScale } from 'src/utils/theme/Scale';
import ButtonComponent from 'src/components/ButtonComponent';
import images from 'src/assets/images';
import IconProfiles from 'src/assets/Icons/IconProfiles';
import Text from "../../components/TextCustom"
import { useNavigation } from '@react-navigation/core';
import componentNames from 'src/utils/constant/componentNames';
import ListContactGPS from './components/ListContactGPS';
import ListContactWeb from './components/ListContactWeb';
const Connect = () => {
  const [selectTabIndex, setSelectedTabIndex] = useState(0);
  const { navigate } = useNavigation();
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



  return (
    <View style={styles.container}>
      <View style={styles.tabs}>

        <TouchableOpacity
          style={[
            styles.tabClick,
            {
              backgroundColor:
                selectTabIndex === 0 ? AppColors.white : undefined,

            },
          ]}
          onPress={() => {
            setSelectedTabIndex(0);
          }}>
          <Text
            style={[
              styles.txtTabClick,
              {
                color:
                  selectTabIndex === 0
                    ? AppColors.textBoldColor
                    : AppColors.white,
              },
            ]}>
            ネットで
            </Text>
        </TouchableOpacity>


        <TouchableOpacity
          style={[
            styles.tabClick,
            {
              backgroundColor:
                selectTabIndex === 1 ? AppColors.white : undefined,

            },
          ]}
          onPress={() => {
            setSelectedTabIndex(1);
          }}>
          <Text
            style={[
              styles.txtTabClick,
              {
                color:
                  selectTabIndex === 1
                    ? AppColors.textBoldColor
                    : AppColors.white,
              },
            ]}>
            街で
            </Text>
        </TouchableOpacity>

      </View>

      {selectTabIndex === 0 ? <ListContactWeb /> : <ListContactGPS />}
    </View>
  );
};

export default Connect;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    backgroundColor: AppColors.white,
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
    marginVertical: verticalScale(32),
    backgroundColor: "#B4BEC8",
    height: scale(46),
    width: "90%",
    justifyContent: 'center',
    borderRadius: 26,
    padding: scale(4)


  },
  tabClick: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    flex: 1,
    borderRadius: 26,

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
  txtTabClick: {
    fontSize: 12,
    fontWeight: '700',
    color: AppColors.textBoldColor,
  },
});
