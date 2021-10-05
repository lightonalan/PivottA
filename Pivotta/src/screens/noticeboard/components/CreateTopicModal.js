import {useRoute} from '@react-navigation/core';
import React, {useEffect} from 'react';
import {
  View,
  Modal,
  StyleSheet,
  Text,
  TouchableOpacity,
  KeyboardAvoidingView,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {TextInput} from 'react-native-gesture-handler';
import CloseCreateTopic from 'src/assets/Icons/CloseCreateTopic';
import AppColors from 'src/utils/theme/AppColors';
import {scale} from 'src/utils/theme/Scale';

export default CreateTopicModal = props => {
  const {visible, onClose, onChangeText} = props;
  return (
    <>
      <Modal
        animationType="slide"
        transparent={true}
        visible={visible}
        onRequestClose={() => {}}>
        <KeyboardAvoidingView
          style={{flex: 1}}
          behavior={'padding'}
          keyboardVerticalOffset={-200}>
          <View style={styles.container}>
            <View style={styles.content}>
              <View style={{flexDirection: 'row', justifyContent: 'flex-end'}}>
                <TouchableOpacity
                  style={{
                    padding: scale(8),
                    backgroundColor: '#ebf1f8',
                    borderRadius: 20,
                  }}
                  onPress={onClose}>
                  <CloseCreateTopic style={{}} />
                </TouchableOpacity>
              </View>
              <View>
                <Text
                  style={{
                    color: '#283C50',
                    textAlign: 'center',
                    fontWeight: '600',
                    fontSize: 16,
                  }}>
                  トピックを作成
                </Text>
                <Text
                  style={{marginHorizontal: scale(10), marginTop: scale(15)}}>
                  トピック名{' '}
                </Text>
                <View
                  style={{
                    padding: scale(12),
                    borderWidth: 1,
                    borderRadius: 10,
                    borderColor: '#D8D8D8',
                    marginVertical: scale(10),
                    marginHorizontal: scale(10),
                  }}>
                  <TextInput
                    onChangeText={onChangeText}
                    placeholder="入力してください"
                  />
                </View>
                <TouchableOpacity
                  style={{
                    backgroundColor: AppColors.backgroundBlue,
                    justifyContent: 'center',
                    alignItems: 'center',
                    paddingVertical: scale(15),
                    marginHorizontal: scale(10),
                    borderRadius: scale(20),
                    marginVertical: scale(8),
                  }}>
                  <Text style={{color: AppColors.white}}>作成する</Text>
                </TouchableOpacity>
              </View>
              <View></View>
            </View>
          </View>
        </KeyboardAvoidingView>
      </Modal>
    </>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: scale(15),
    backgroundColor: 'rgba(0, 0, 0, 0.23)',
  },
  content: {
    width: '100%',
    minHeight: 100,
    backgroundColor: AppColors.white,
    borderRadius: scale(15),
    padding: scale(10),
  },
});
