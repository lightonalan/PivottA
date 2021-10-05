import React, {useState} from 'react';
import {Modal, StyleSheet, View, TouchableOpacity, Image} from 'react-native';
import Picker from 'react-native-picker';
import {Text} from 'react-native-svg';
import {icons} from 'src/assets/Icons';

export const initPicker = params => {
  Picker.init({
    pickerFontSize: 18,
    pickerCancelBtnText: 'common.cancel',
    pickerConfirmBtnText: 'common.apply',
    pickerTextEllipsisLen: 16,
    pickerFontColor: [0, 0, 0, 1],
    pickerBg: [250, 250, 250, 1],
    pickerToolBarBg: [252, 210, 47, 1],
    pickerConfirmBtnColor: [0, 0, 0, 1],
    pickerCancelBtnColor: [0, 0, 0, 1],
    pickerFontFamily: 'Helvetica',
    ...params,
  });
  Picker.show();
};

const Dropdown = props => {
  const [modalVisible, setModalVisible] = useState(false);
  const [item, setItem] = useState(props.value || props.data[0]);
  const showModal = () => {
    setModalVisible(true);
  };
  const onShowPicker = () => {
    initPicker({
      selectedValue: [props?.value],
      pickerData: props?.data,
      pickerTitleText: props?.title,
      onPickerConfirm: valueConfirmed => {
        setModalVisible(false);
        if (
          valueConfirmed[0]?.toString() === props.data.indexOf(item)?.toString()
        ) {
          valueConfirmed.pop();
          valueConfirmed.push(props.data[0]);
        }
        setItem(valueConfirmed[0]?.toString());
        Picker.select(valueConfirmed);
        props.onSubmit?.(valueConfirmed[0].toString());
      },
      onPickerCancel: data => {
        setModalVisible(false);
      },
    });
  };
  const onHideModalPicker = () => {
    setModalVisible(false);
    Picker.hide();
  };
  return (
    <TouchableOpacity
      activeOpacity={0.9}
      onPress={showModal}
      style={[
        styles.container,
        props?.customStyle,
        {height: props?.height || 40},
        props?.isDisabled ? styles.containerDisabled : {},
      ]}
      disabled={props?.isDisabled}>
      {/* <Text
        originValue={props?.label || props?.value}
        customStyle={[
          styles.textStyle,
          props?.isDisabled ? styles.textStyleDisabled : {},
        ]}
      /> */}
      <Text
        style={[
          styles.textStyle,
          props?.isDisabled ? styles.textStyleDisabled : {},
        ]}>
        {props?.label || props?.value}
      </Text>

      {props?.isDisabled ? (
        <View />
      ) : (
        <>
          <View style={styles.dropdownIconContainer}>
            <Image source={icons.ic_back} />
          </View>
          <Modal
            transparent={true}
            visible={modalVisible}
            onShow={onShowPicker}
            onDismiss={onHideModalPicker}>
            <TouchableOpacity
              style={styles.touchable}
              onPress={onHideModalPicker}
            />
          </Modal>
        </>
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-between',
    backgroundColor: '#fff',
    borderColor: 'gray',
    borderWidth: 3 / 2,
    paddingLeft: 10,
  },
  containerDisabled: {
    color: 'white',
  },
  textStyle: {
    flex: 1,
    color: 'black',
    fontSize: 14,
  },
  textStyleDisabled: {
    color: 'black',
  },
  dropdownIconContainer: {
    height: '100%',
    width: 30,
    flexDirection: 'row',
    justifyContent: 'center',
    backgroundColor: 'black',
    alignItems: 'center',
  },
  icon: {
    tintColor: 'white',
  },
  touchable: {
    position: 'absolute',
    flex: 1,
    height: '100%',
    width: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
  },
});

export default React.memo(Dropdown);
