import React from 'react';
import { Platform } from 'react-native';
import { Text as RNText, StyleSheet } from 'react-native';

const Text = props => {
  return (
    <RNText

      {...props}
      allowFontScaling={false}
      style={[styles.defaultStyle, props?.style]}>
      {props.children}
    </RNText>
  );
};

const styles = StyleSheet.create({
  defaultStyle: {
    fontFamily: 'NotoSansMyanmar-Regular',
    color: '#283C50',
    lineHeight: Platform.OS == "android" ? null : 25,

  },
});

Text.defaultProps = Text.defaultProps || {};
Text.defaultProps.allowFontScaling = false;

export default Text;
