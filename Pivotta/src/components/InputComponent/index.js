import React from 'react';
import {StyleSheet, Text, TextInput, View} from 'react-native';
import {scale, verticalScale} from 'src/utils/theme/Scale';

const InputComponent = ({
  placeholder,
  inputStyle,
  value,
  textError,
  onChange,
  textArea,
  onFocus,
  onBlur,
  isFocus,
  customPlaceholder,
  ...props
}) => {
  return (
    <View>
      <TextInput
        style={[isFocus ? styles.input : styles.inputFocus, inputStyle]}
        placeholder={
          customPlaceholder
            ? '※記入例\n \n \n今まで約100社以上の新規事業を考案してきました。新規事業を立ち上げる際は、スピード感が一番重要だと考えています。なかなか事業が進まないとお悩みの企業様は、是非お気軽にご相談ください。よろしくお願い致します。\n \n \n 対応可能日時】\n平日の午前中、もしくは土曜日であれば大抵可能です。その他の日程はご相談ください。'
            : placeholder
        }
        onChangeText={text => onChange(text)}
        onFocus={() => onFocus && onFocus()}
        onBlur={() => onBlur && onBlur()}
        value={value && value}
        numberOfLines={textArea ? 4 : 1}
        multiline={textArea ? true : false}
        {...props}
      />
      {textError?.length !== 0 ? (
        <Text style={styles.txtError}>{textError && textError[0]}</Text>
      ) : null}
    </View>
  );
};

export default InputComponent;

const styles = StyleSheet.create({
  input: {
    height: 52,
    borderWidth: 1,
    marginVertical: 8,
    borderColor: '#59CDD5',
    borderRadius: 16,
    paddingHorizontal: 18,
  },
  inputFocus: {
    height: 52,
    borderWidth: 1,
    marginVertical: 8,
    borderColor: '#E5E5E5',
    borderRadius: 16,
    paddingHorizontal: 18,
  },
  txtError: {
    color: 'red',
    marginBottom: verticalScale(8),
  },
});
