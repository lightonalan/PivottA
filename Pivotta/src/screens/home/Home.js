/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect, useState, memo, useRef} from 'react';
import {verticalScale, scale, deviceIos} from 'src/utils/theme/Scale';
import {View, StyleSheet, Text} from 'react-native';
import API from 'src/common/network/API';

const Home = () => {
  return (
    <View style={styles.container}>
      <Text>Home</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignSelf: 'center',
  },
});

export default Home;
