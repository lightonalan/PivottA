import {Alert} from 'react-native';

const AlertMessage = (message, title, onPressOk, cancel, changeTxtOk) => {
  Alert.alert(
    title || '',
    message,
    cancel
      ? [
          {
            text: 'NO',
            style: 'default',
          },
          {
            text: changeTxtOk ? 'OK' : 'OK',
            onPress: () => {
              if (typeof onPressOk === 'function') {
                onPressOk();
              }
            },
            style: 'default',
          },
        ]
      : [
          {
            text: 'OK',
            onPress: () => {
              if (typeof onPressOk === 'function') {
                onPressOk();
              }
            },
          },
        ],
    {cancelable: false},
  );
};
export default AlertMessage;
