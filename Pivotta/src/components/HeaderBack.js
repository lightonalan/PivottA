/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {
  View,
  TouchableOpacity,
  StyleSheet,
  Platform,
  SafeAreaView,
} from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { goBack, navigate } from 'src/navigation/service/NavigationService';
import IconBack from 'src/assets/Icons/IconBack';
import AppColors from 'src/utils/theme/AppColors';
import {
  heightOfHeaderWithoutAreaView,
  scale,
  verticalScale,
} from 'src/utils/theme/Scale';
import Text from 'src/components/TextCustom';
const HeaderBack = props => {
  const {
    headerName,
    renderLeft,
    renderRight,
    backPress,
    customStyle,
    setHeightOfHeader,
    contentStyle,
    titleStyle,
    titleNumberLine,
    leftIconColor,
    isShadow,
  } = props;

  const getRenderLeft = () => {
    return renderLeft ? (
      renderLeft
    ) : (
      <TouchableOpacity
        style={styles.btnLeftContainer}
        onPress={
          backPress !== undefined ? backPress.bind(this) : () => goBack()
        }>
        <IconBack color={leftIconColor} />
      </TouchableOpacity>
    );
  };

  const getRenderRight = () => {
    return renderRight ? (
      renderRight
    ) : (
      <TouchableOpacity
        onPress={() => {
          navigate('ProfileStack');
        }}>
        <MaterialIcons name="notifications" size={30} color={'#000'} />
      </TouchableOpacity>
    );
  };

  return (
    <View
      onLayout={event => {
        setHeightOfHeader && setHeightOfHeader(event.nativeEvent.layout.height);
      }}
      style={[styles.contains, customStyle]}>
      <SafeAreaView style={styles.safeArea} />
      <View>
        <View
          style={[
            styles.header,
            contentStyle,
            isShadow && styles.shadowBottom,
          ]}>
          <View style={[styles.view]}>
            <Text
              numberOfLines={titleNumberLine || 1}
              ellipsizeMode="tail"
              style={[styles.title, titleStyle]}>
              {headerName}
            </Text>
          </View>
          <View style={styles.buttonLeft}>{getRenderLeft()}</View>
          <View style={styles.buttonRight}>{getRenderRight()}</View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  contains: {
    width: '100%',
    paddingTop: verticalScale(25),
  },
  view: {
    flex: 1,
    alignItems: 'center',
  },
  statusBar: {
    height: 24,
    backgroundColor: '#fff',
    fontWeight: '700',
  },
  header: {
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: scale(24),
    height: heightOfHeaderWithoutAreaView,
    backgroundColor: AppColors.white,
  },
  title: {
    color: '#283C50',
    // marginLeft: 10,
    fontSize: 15,
    fontWeight: Platform.OS == 'android' ? 'bold' : '600',
  },
  buttonLeft: {
    position: 'absolute',
    left: 0,
    marginLeft: 22,
  },
  buttonRight: {
    position: 'absolute',
    right: 0,
    marginRight: scale(15),
  },
  btnLeftContainer: {
    paddingVertical: scale(7),
    paddingRight: scale(5),
  },
  shadowBottom: {
    shadowColor: 'black',
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 2 },
    shadowRadius: 10,
    elevation: 10,
  },
  safeArea: {
    backgroundColor: '#fff',
    zIndex: 999,
  },
});

export default HeaderBack;
