import React from 'react';
import { View, StyleSheet, ActivityIndicator } from 'react-native';
import AppColors from 'src/utils/theme/AppColors';

class Loading extends React.PureComponent {

  render() {
    const { showAbsoluteFullScreen } = this.props;
    const style = showAbsoluteFullScreen && styles.fullScreen;
    return (
      <View style={[styles.viewLoading, style]}>
        <View style={styles.modal}>
          <ActivityIndicator size="large" color={AppColors.backgroundBlue} />
        </View>
      </View>
    );
  }
}

export default Loading;

const styles = StyleSheet.create({
  viewLoading: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  modal: {
    width: 72,
    height: 72,
    borderRadius: 12,
    backgroundColor: AppColors.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  fullScreen: { position: "absolute", justifyContent: "center", alignSelf: "center", width: "100%", height: "100%", zIndex: 2 }
});
