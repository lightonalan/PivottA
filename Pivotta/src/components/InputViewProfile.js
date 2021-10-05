import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AppColors from 'src/utils/theme/AppColors';
import {verticalScale, scale} from 'src/utils/theme/Scale';
import {useController, useFormContext} from 'react-hook-form';
import Text from 'src/components/TextCustom';

const FormTextInput = ({
  name,
  requie,
  textTitle,
  onChangeInput,
  inputValue,
  placeholder,
  inputStyle,
  textArea,
  onFocus,
  numberPad,
  customDefaultValue,
  setCheckError,
  checkError,
  ...props
}) => {
  const {control, formState} = useFormContext();
  const [isFocused, setIsFocused] = useState(false);

  const formatZipCode = value => {
    value = value?.trim()?.replace(/-/g, '');
    if (value?.length > 3) {
      value = value?.slice(0, 3) + value?.slice(3); // 22/07 change format zip code
    }
    return value;
  };

  const {field} = useController({
    control,
    name,
  });
  const onChange = text => {
    field.onChange(text);
  };
  const {errors} = formState;
  let error = errors[name]?.message;
  if (
    (name === 'last_name_kanji' ||
      name === 'first_name_kanji' ||
      name === 'last_name_kana' ||
      name === 'first_name_kana') &&
    error?.length > 0
  ) {
    setCheckError(true);
  } else if (
    (name === 'last_name_kanji' ||
      name === 'first_name_kanji' ||
      name === 'last_name_kana' ||
      name === 'first_name_kana') &&
    !error
  ) {
    setCheckError(false);
  }

  return (
    <View style={{marginBottom: 15}}>
      <Text style={styles.textTitleInput}>
        {`${textTitle}`}
        <Text style={styles.textRequie}>{`${requie ? ' *' : ''}`} </Text>
      </Text>
      {!error && checkError && <Text style={styles.errorText}> </Text>}
      {error && <Text style={styles.errorText}>{error}</Text>}
      <TextInput
        onBlur={() => setIsFocused(false)}
        keyboardType={numberPad ? 'number-pad' : 'default'}
        control={control}
        defaultValue={
          customDefaultValue ? formatZipCode(field.value) : field.value
        }
        onChangeText={text => onChange(text)}
        {...props}
        multiline={textArea ? true : false}
        numberOfLines={textArea ? 4 : 1}
        style={[
          inputStyle,
          {
            color: 'black',
            borderColor: isFocused
              ? AppColors.backgroundBlue
              : AppColors.innerBorder,
          },
        ]}
        placeholder={placeholder}
        onFocus={() => {
          onFocus();
          setIsFocused(true);
        }}
        selectionColor={'#3B9AE6'}
        placeholderTextColor={AppColors.garyBlack}
        textAlignVertical={textArea ? 'top' : 'center'}
      />
    </View>
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  container: {
    // flex: 1,
    // backgroundColor: AppColors.background,
    // height:textArea?scale(360):scale(90)
  },
  centerView: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  textTitleInput: {
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 23,
  },
  textRequie: {
    fontSize: 13,
    fontWeight: 'bold',
    lineHeight: 23,
    paddingBottom: verticalScale(6),
    color: '#283C50',
  },
  errorText: {
    color: '#D62105',
    marginTop: scale(5),
    fontSize: 10,
  },
});
