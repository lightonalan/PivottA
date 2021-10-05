import React from 'react';
import {View, StyleSheet, ActivityIndicator} from 'react-native';

const Mode = {small: 'small', full: 'full', overlay: 'overlay'};

const Spinner = ({mode}) => {
  let containerStyle = styles.container;
  switch (mode) {
    case Mode.full:
      containerStyle = styles.container_full_stretch;
      break;
    case Mode.small:
      containerStyle = styles.container_full_stretch;
      break;
    case Mode.overlay:
      containerStyle = styles.container_overlay;
      break;
  }
  return (
    <View style={containerStyle}>
      <ActivityIndicator
        size={mode === 'small' ? 'small' : 'large'}
        color="#000000"
        style={[styles.wrapper]}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'transparent',
    height: undefined,
    width: undefined,
  },
  container_full_stretch: {
    flexGrow: 1,
    height: undefined,
    width: undefined,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container_overlay: {
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    height: undefined,
    width: undefined,
    // backgroundColor: 'rgba(0,0,0,0.2)',
    alignItems: 'center',
    justifyContent: 'center',
    zIndex: 1000,
  },
  wrapper: {
    backgroundColor: 'transparent',
    zIndex: 100,
  },
});

Spinner.defaultProps = {
  mode: Mode.overlay,
};

export default Spinner;
