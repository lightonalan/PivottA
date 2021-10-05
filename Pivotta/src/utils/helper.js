import {Platform} from 'react-native';
import Picker from 'react-native-picker';

export const isAndroid = Platform.OS === 'android';

export const isIos = Platform.OS === 'ios';

export function listFormatQualification(data) {
  if (!data) return;
  return data?.map(s => {
    if (s.new) {
      if (s.hasOwnProperty('id')) {
        delete s.id;
      }
      if (s.hasOwnProperty('new')) {
        delete s.new;
      }
    }
    return s;
  });
}

export function initPicker(params) {
  Picker.init({
    pickerTextEllipsisLen: 10,
    pickerCancelBtnText: 'キャンセル',
    pickerConfirmBtnText: '完了',
    ...params,
  });
}
