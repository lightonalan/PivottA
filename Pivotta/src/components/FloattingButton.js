import {useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {
  View,
  ImageBackground,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import FastImage from 'react-native-fast-image';

import AddNotice from 'src/assets/Icons/AddNotice';
import ReplyArrow from 'src/assets/Icons/ReplyArrow';
import images from 'src/assets/images';
import HeaderBack from 'src/components/HeaderBack';
import {scale} from 'src/utils/theme/Scale';

export default FloattingButton = props => {
  const {onPress} = props;

  return (
    <View>
      <TouchableOpacity {...{onPress}} style={styles.container}>
        <AddNotice />
      </TouchableOpacity>
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    position: 'absolute',
    bottom: scale(20),
    right: scale(20),
    backgroundColor: '#004FAC',
    padding: scale(18),
    borderRadius: 30,
    // position:'absolute',
    // bottom:0,
    // alignSelf:'flex-end'
  },
})
