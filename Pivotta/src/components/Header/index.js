import React, {useState} from 'react';
import {Image, StyleSheet, Text, View, TouchableOpacity} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {icons} from 'src/assets/Icons';
import {goBack} from 'src/navigation/service/NavigationService';
import {scale} from 'src/utils/theme/Scale';

const Header = props => {
  const insets = useSafeAreaInsets();

  return (
    <View style={[styles.wrapHeader, {marginTop: insets.top}]}>
      <TouchableOpacity onPress={() => goBack()}>
        <Image source={icons.ic_back} />
      </TouchableOpacity>
      {props?.title ? <Text>{props?.title}</Text> : null}
      {props?.iconRight ? (
        <TouchableOpacity>{props?.iconRight}</TouchableOpacity>
      ) : (
        <Text></Text>
      )}
    </View>
  );
};

export default Header;

const styles = StyleSheet.create({
  wrapHeader: {
    height: 50,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: scale(20),
  },
});
