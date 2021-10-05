import React from 'react';
import {View, StyleSheet, StatusBar} from 'react-native';
import Metrics from 'src/assets/metrics';
import {verticalScale, scale, moderateScale} from 'src/utils/theme/Scale';

export const StatusBarView = () => <View style={styles.contain} />;

const styles = StyleSheet.create({
  contain: {
    height: Metrics.safeTopPadding,
  },
});
