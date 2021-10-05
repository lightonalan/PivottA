import React from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import Modal from 'react-native-modal';
import {icons} from 'src/assets/Icons';
import {scale, verticalScale} from 'src/utils/theme/Scale';
import StyledTouchable from '../StyledTouchable';

const ModalPopup = props => {
  const {isVisible, renderHeader, renderBody, renderBottom} = props;
  return (
    <Modal isVisible={isVisible}>
      <View style={styles.wrapModal}>
        <View style={styles.headerModal}>{renderHeader && renderHeader}</View>
        <View style={styles.bodyModal}>{renderBody && renderBody}</View>
        <View style={styles.bottomModal}>{renderBottom && renderBottom}</View>
      </View>
    </Modal>
  );
};
export default ModalPopup;

const styles = StyleSheet.create({
  wrapModal: {
    backgroundColor: '#fff',
    padding: scale(20),
    flexDirection: 'column',
    borderRadius: 20,
  },
  headerModal: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  bodyModal: {
    flexDirection: 'column',
    alignItems: 'center',
    marginTop: verticalScale(20),
  },
  bottomModal: {
    marginTop: verticalScale(20),
  },
});
