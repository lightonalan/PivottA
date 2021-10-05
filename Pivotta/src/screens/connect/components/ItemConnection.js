
import { useNavigation } from '@react-navigation/core';
import React, { useState, memo } from 'react';
import {
    View,

    StyleSheet,
    TouchableOpacity,
    Image,
    FlatList,
} from 'react-native';
import images from 'src/assets/images';
import componentNames from 'src/utils/constant/componentNames';
import { isIos } from 'src/utils/helper';
import { moderateScale, scale, verticalScale } from 'src/utils/theme/Scale';
import TimeConverter from 'src/utils/TimeConverter';
import Text from "../../../components/TextCustom"

export default ItemConnection = (props) => {
    const { navigate } = useNavigation();
    const item = props.item;
    const type = props?.type || ''
    const { contacted_at, created_at, image_url, is_read, name, updated_at, web_contact_id, } = item;
    const datetimes = TimeConverter.getTimeAgo(created_at);
    return (
        <TouchableOpacity
            onPress={() => {
                navigate(componentNames.SELECT_ACQUAINTANCE_SCREEN, {
                    item,
                    type
                });
            }}
            style={styles.ItemConnection}>
            <Image style={styles.image} source={image_url !== null ? { uri: image_url || '' } : images.imagePicker} />

            <Text style={{ flex: 1, fontSize: 15, color: "#28283C", fontWeight: '400' }} ellipsizeMode="tail" numberOfLines={1} >{name || ''}</Text>
            <View style={{ position: 'absolute', right: 10, top: scale(8) }}>
                {datetimes.type === "date_time" && <Text style={{
                    fontWeight: '400',
                    fontSize: 10,
                    color: '#28283C'

                }}>{datetimes.times}</Text>}

                <Text style={{
                    fontWeight: '400',
                    fontSize: 10,
                    color: '#28283C'

                }}>{datetimes.type === "time_ago" ? datetimes.times : datetimes.dates}</Text>
            </View>
        </TouchableOpacity>
    );
};


const styles = StyleSheet.create({
  image: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
  },

  contentContainerStyle: {
    paddingBottom: 16,
  },
  ItemConnection: {
    marginTop: verticalScale(8),
    alignSelf: 'center',
    flexDirection: 'row',
    alignItems: 'center',
    width: '90%',
    height: scale(80),
    backgroundColor: 'white',
    borderRadius: scale(20),
    paddingHorizontal: moderateScale(12),
    shadowColor: isIos ? '#283C50' : '#283C50',
    shadowOffset: {
      width: isIos ? 10 : 40,
      height: isIos ? 7 : 40,
    },
    shadowOpacity: isIos ? 0.16 : 1,
    shadowRadius: isIos ? null : 30,
    elevation: isIos ? null : 10,
  },
});
