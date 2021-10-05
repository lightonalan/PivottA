import React, {useState} from 'react';
import {Image, StyleSheet, Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import Header from 'src/components/Header';
import InputComponent from 'src/components/InputComponent';
import StyledTouchable from 'src/components/StyledTouchable';
import {moderateScale, scale, verticalScale} from 'src/utils/theme/Scale';
import ImagePicker from 'react-native-image-crop-picker';
import {TouchableOpacity} from 'react-native-gesture-handler';

const CompanyOnboarding3 = () => {
  const insets = useSafeAreaInsets();
  const [info, setInfo] = useState({
    password: undefined,
    confirmPassword: undefined,
  });

  const handleOnChange = (value, key) => {
    setInfo({...info, [key]: value});
  };

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
              <Text>Zoomアカウント連携</Text>
              <Text style={styles.rightLabel}>任意</Text>
            </View>
          </View>
          <View style={styles.zoomLink}>
            <Text style={styles.descLink}>
              説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります説明文が入ります
            </Text>
            <TouchableOpacity style={styles.btnZoomLink}>
              <Text style={styles.txtBtnZoomLink}>Zoomと連携する</Text>
            </TouchableOpacity>
          </View>

          <StyledTouchable text={'利用を開始する'}></StyledTouchable>
        </View>
      </View>
    </>
  );
};

export default CompanyOnboarding3;

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
  zoomLink: {
    backgroundColor: '#E5E5E5',
    borderRadius: 20,
    marginVertical: verticalScale(20),
    padding: 20,
  },
  descLink: {
    paddingBottom: verticalScale(20),
  },
  btnZoomLink: {
    backgroundColor: '#519CFE',
    height: 40,
    marginHorizontal: scale(50),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  txtBtnZoomLink: {
    color: '#fff',
  },
});
