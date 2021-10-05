import React, {memo} from 'react';
import {Modal, StyleSheet, TouchableOpacity, View} from 'react-native';
import MonthPicker from 'react-native-month-year-picker';

const StyledModalPickMonth = props => {
  const {setIsShowModal, customStyle, onChangeDate, date, isShowModal} = props;
  const onShowPicker = () => {
    setIsShowModal?.(true);
  };
  return (
    <View style={[customStyle]}>
      <Modal transparent={true} visible={isShowModal} onShow={onShowPicker}>
        <MonthPicker
          onChange={onChangeDate}
          value={date || new Date()}
          maximumDate={new Date()}
          locale="ja"
          okButton={'完了'}
          cancelButton={'キャンセル'}
        />
        <TouchableOpacity
          onPress={() => {
            setIsShowModal?.(false);
          }}
          style={styles.touchable}
        />
      </Modal>
    </View>
  );
};
const styles = StyleSheet.create({
  touchable: {
    opacity: 1,
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
});
export default memo(StyledModalPickMonth);
