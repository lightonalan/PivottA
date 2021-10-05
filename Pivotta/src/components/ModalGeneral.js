import React from 'react';
import { Platform, StyleSheet, Text, View } from 'react-native';
import { getStatusBarHeight } from 'react-native-iphone-x-helper';
import Modal from 'react-native-modal';
import { heightScreen, widthScreen } from 'src/utils/theme/Scale';

const ModalGeneral = ({ modalStyle, isVisible, children, props }) => {
  const androidProps =
    Platform.OS === 'android'
      ? {
        backdropTransitionOutTiming: 0,
        hideModalContentWhileAnimating: true,
      }
      : {};
  return (
    <Modal statusBarTranslucent transparent visible={isVisible} {...androidProps} {...props}>
      <View style={[styles.screenContainer, modalStyle]}>{children}</View>
    </Modal>
  );
};

export default ModalGeneral;

const styles = StyleSheet.create({
  screenContainer: {
    backgroundColor: 'rgba(0, 0, 0, 0.24)',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    width: widthScreen,
    height: heightScreen + getStatusBarHeight(),
    zIndex: 1,
  },
});
