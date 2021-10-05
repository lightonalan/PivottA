import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {moderateScale, scale} from 'src/utils/theme/Scale';

const StyledTouchable = ({
  onPress,
  style,
  text,
  disabled,
  custom,
  ...props
}) => {
  console.log('height', props);
  return (
    <TouchableOpacity
      style={[custom ? styles.btnCustom : styles.btn, style]}
      onPress={onPress && onPress}
      disabled={disabled}
      {...props}>
      <Text style={custom ? styles.txtCustom : styles.txt}>{text && text}</Text>
    </TouchableOpacity>
  );
};

export default StyledTouchable;

const styles = StyleSheet.create({
  btn: {
    backgroundColor: '#59CDD5',
    height: 50,
    marginHorizontal: scale(50),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  btnCustom: {
    backgroundColor: '#fff',
    height: 50,
    // marginHorizontal: scale(50),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,

    elevation: 5,
  },
  txt: {
    color: '#fff',
    fontSize: moderateScale(14),
  },
  txtCustom: {
    color: '#59CDD5',
    fontSize: moderateScale(14),
  },
});
