import React, {useState} from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  Text,
  View,
  StatusBar,
} from 'react-native';
import Picker from 'react-native-picker';
import {initPicker, isAndroid} from 'src/utils/helper';
import Metrics from 'src/assets/metrics';
import {RootSiblingPortal} from 'react-native-root-siblings';
import {scale} from 'src/utils/theme/Scale';
import AppColors from 'src/utils/theme/AppColors';
import DropDown from 'src/assets/Icons/DropDown';

const DEFAULT_HEIGHT = 45;

const StyledPicker = props => {
  const [currentLabel, setCurrentLabel] = useState(props.label);
  const [item, setItem] = useState(props.currentValue || props.dataList[0]);
  const [isShowOutSide, setIsShowOutSide] = useState(false);
  const handleConfirm = data => {
    if (data[0]?.toString() === props.dataList.indexOf(item)?.toString()) {
      data.pop();
      data.push(props.dataList[0]);
    }
    setItem(data[0]?.toString());
    if (currentLabel) setCurrentLabel(undefined);
    Picker.select(data);
    props.onConfirm(data[0]?.toString());
    setIsShowOutSide(false);
  };

  const handleCancel = () => {
    setIsShowOutSide(false);
    Picker.hide();
    setIsShowOutSide(false);
  };

  const handleShowPicker = () => {
    setIsShowOutSide(true);
    const newData = [];
    initPicker({
      pickerData: props.dataList,
      pickerTitleText: props.titleModalShowUp,
      selectedValue: [props.dataList.indexOf(item)],
      onPickerConfirm: handleConfirm,
      onPickerCancel: handleCancel,
      pickerBg: [255, 255, 255, 1],
      pickerToolBarBg: [255, 255, 255, 1],
      pickerCancelBtnColor: [196, 199, 206, 1],
    });
    newData.push(item || props.dataList[0]);
    Picker.select(newData);
    Picker.show();
  };

  return (
    <>
      {isShowOutSide && (
        <RootSiblingPortal>
          <>
            {isAndroid ? (
              <StatusBar
                barStyle={'light-content'}
                translucent
                backgroundColor={'rgba(0, 0, 0, 0.01)'}
              />
            ) : null}
            <TouchableOpacity
              activeOpacity={1}
              onPress={handleCancel}
              style={styles.touchOutSide}
            />
          </>
        </RootSiblingPortal>
      )}
      <TouchableOpacity
        activeOpacity={0.9}
        onPress={handleShowPicker}
        style={[styles.contWholePicker, props.customStyle]}
        disabled={props.isPickerDisable || false}>
        <Text style={styles.txtItem}>{currentLabel || item}</Text>
        <View style={styles.imgPicker}>
          <DropDown />
        </View>
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  touchOutSide: {
    backgroundColor: 'rgba(0, 0, 0, 0.25)',
    width: Metrics.screenWidth,
    height: Metrics.screenHeight,
    position: 'absolute',
    zIndex: 999,
  },
  contWholePicker: {
    justifyContent: 'center',
    borderRadius: scale(12),
    height: scale(52),
    width: '100%',
    borderWidth: 1.2,
    borderColor: AppColors.innerBorder,
    paddingHorizontal: scale(20),
  },
  txtItem: {
    textAlign: 'left',
  },
  imgPicker: {
    width: 10,
    height: 10,
    position: 'absolute',
    right: 10,
  },
});

export default StyledPicker;
