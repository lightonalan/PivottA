import React from 'react';
import {
  View,
  StyleSheet,
  TouchableOpacity,
  Text,
  ActivityIndicator,
} from 'react-native';
import AppColors from 'src/utils/theme/AppColors';
import {verticalScale, scale, moderateScale} from 'src/utils/theme/Scale';
import {H1} from 'src/utils/theme/styled';

const ButtonComponent = props => {
  const {children, onPress, disabled, containerStyle, loading,textColor ,...rest} = props;
  return (
    <TouchableOpacity
      style={[
        disabled ? styles.containerDisabled : styles.containerActive,
        containerStyle,
      ]}
      onPress={onPress}
      disabled={disabled}
      {...rest}>
      {!loading && (
        <Text style={[H1, {color: textColor?AppColors.backgroundBlue:AppColors.white, fontWeight: 'bold',  fontSize: 14}]}>
          {children}
        </Text>
      )}
      {loading && (
        <ActivityIndicator
          style={styles.loadding}
          size="small"
          color={AppColors.white}
        />
      )}
    </TouchableOpacity>
  );
};
export default ButtonComponent;

const styles = StyleSheet.create({
  containerActive: {
    // paddingHorizontal: scale(20),
    marginTop: verticalScale(24),
    width: scale(335),
    height: verticalScale(52),
    borderRadius: scale(26),
    backgroundColor: AppColors.backgroundBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  containerDisabled: {
    // paddingHorizontal: scale(20),
    marginTop: verticalScale(24),
    width: scale(335),
    height: verticalScale(52),
    borderRadius: scale(26),
    backgroundColor: AppColors.gray,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
  },
  txtContent: {
    width: scale(225),
    height: scale(52),
    borderRadius: scale(26),
    backgroundColor: AppColors.backgroundBlue,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
