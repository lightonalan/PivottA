import React, {useState} from 'react';
import {View, Text} from 'react-native';
import {Overlay} from 'react-native-elements';
const Error = props => {
  const {visible, title} = props;
  return (
    <View>
      <Overlay isVisible={true}>
        <Text>{title}</Text>
      </Overlay>
    </View>
  );
};
export default Error;
