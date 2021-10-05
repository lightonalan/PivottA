import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ImageBackground,
} from 'react-native';
import {verticalScale, scale} from 'src/utils/theme/Scale';
import images from 'src/assets/images';
import Metrics from 'src/assets/metrics';
import AppColors from 'src/utils/theme/AppColors';
import moment from 'moment';

const CardConnection = ({item}) => {
  console.log('item 1243', item);
  const isValidDate = moment(item?.end_date).isValid();
  const fontSizeRowSt = 13;
  const fontSizeRowNd = 22;
  const fontSizeRowTh = 11;
  const fontSizeRowRd = 12;
  return (
    <ImageBackground
      resizeMode="stretch"
      source={images[`imgCardDefault${item?.template}`]}
      style={styles.addImageView}>
      <TouchableOpacity disabled>
        <View style={styles.wrapTouch}>
          <Image
            style={styles.image}
            source={
              item?.image_url
                ? {uri: item?.image_url || ''}
                : images.imagePicker
            }
          />
          <View style={styles.wrapInfo}>
            <View style={[styles.flexRow, {width: '100%'}]}>
              <View style={{flexDirection: 'row', flex: 1}}>
                <Text
                  ellipsizeMode="tail"
                  style={[
                    styles.txtAssociation,
                    {
                      fontSize: fontSizeRowSt,
                      color:
                        item?.template == 7 || item?.template == 8
                          ? AppColors.grayBlackTittle
                          : AppColors.white,
                    },
                  ]}
                  numberOfLines={1}>
                  {`${
                    item?.alumni_association_name
                      ? item?.alumni_association_name
                      : ''
                  }  ${item?.position ? item?.position : ''}`}
                </Text>
              </View>
              <Text
                ellipsizeMode="tail"
                style={[
                  styles.txtTerm,
                  {
                    color:
                      item?.template == 7 || item?.template == 8
                        ? AppColors.grayBlackTittle
                        : AppColors.white,
                  },
                ]}
                numberOfLines={1}>
                {item?.term ? ` 世代${item?.term}期` : ''}
              </Text>
            </View>

            <Text
              numberOfLines={1}
              ellipsizeMode="tail"
              style={[
                styles.txtUserName,
                {
                  fontSize: fontSizeRowNd,
                  color:
                    item?.template == 7 || item?.template == 8
                      ? AppColors.grayBlackTittle
                      : AppColors.white,
                },
              ]}>
              {item?.name || ''}
            </Text>
            <View
              style={[
                styles.flexRow,
                {paddingBottom: verticalScale(3), alignItems: 'center'},
              ]}>
              <Image
                source={images.imgTrianDate}
                style={{
                  width: 10,
                  height: 8,
                  tintColor:
                    item?.template == 7 || item?.template == 8
                      ? AppColors.grayBlackTittle
                      : AppColors.white,
                }}
                resizeMode={'contain'}
              />
              <Text
                style={[
                  styles.date,
                  {
                    fontSize: fontSizeRowTh,
                    color:
                      item?.template == 7 || item?.template == 8
                        ? AppColors.grayBlackTittle
                        : AppColors.white,
                  },
                ]}>
                {`  ${moment(item?.start_date || new Date()).format(
                  'YYYY/MM/DD',
                )}`}
              </Text>
              <Text
                style={[
                  styles.date,
                  {
                    color:
                      item?.template == 7 || item?.template == 8
                        ? AppColors.grayBlackTittle
                        : AppColors.white,
                  },
                ]}>
                {` ~ ${
                  isValidDate
                    ? moment(item?.end_date || new Date()).format('YYYY/MM/DD')
                    : item?.end_date
                }`}
              </Text>
            </View>
            <Text
              ellipsizeMode="tail"
              style={[
                styles.sellingPoint,
                {
                  paddingTop: scale(3),
                  fontSize: fontSizeRowRd,
                  color:
                    item?.template == 7 || item?.template == 8
                      ? AppColors.grayBlackTittle
                      : AppColors.white,
                },
              ]}
              numberOfLines={6}>
              {item?.selling_point || ''}
            </Text>
          </View>
        </View>
      </TouchableOpacity>
      {item?.approval_level === 3 ? (
        <Image style={styles.upLevel3} source={images.imgUpLevel3} />
      ) : null}
    </ImageBackground>
  );
};
export default CardConnection;

const styles = StyleSheet.create({
  upLevel3: {
    position: 'absolute',
    bottom: 40,
    left: -scale(8),
  },
  sellingPoint: {
    paddingTop: verticalScale(3),
    lineHeight: 20,
    fontSize: 14,
  },
  date: {
    fontSize: 10,
  },
  txtUserName: {
    // color: AppColors.white,
    fontWeight: 'bold',
    paddingTop: scale(2),
    paddingBottom: scale(5),
  },
  txtTerm: {
    textAlign: 'right',
  },
  txtAssociation: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  wrapTouch: {
    flexDirection: 'row',
    height: Metrics.screenHeight / 5,
    paddingVertical: verticalScale(4),
  },
  addImageView: {
    flex: 1,
    paddingVertical: scale(15),
    paddingTop: scale(15),
    paddingLeft: scale(14),
    width: scale(343),
    height: scale(225),
    paddingRight: scale(16),
  },
  image: {
    width: scale(70),
    height: scale(70),
    borderRadius: scale(35),
    marginTop: verticalScale(5),
    marginRight: scale(20),
  },
  wrapInfo: {
    flex: 1,
  },
});
