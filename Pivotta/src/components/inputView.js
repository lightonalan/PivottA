import React, {useState} from 'react';
import {View, StyleSheet, TextInput} from 'react-native';
import AppColors from 'src/utils/theme/AppColors';
import {verticalScale, scale} from 'src/utils/theme/Scale';
import {useController, useFormContext} from 'react-hook-form';
import Text from 'src/components/TextCustom';
import IconSearch from 'src/assets/Icons/IconSearch';
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
  icon,
  inviIcon,
  ...props
}) => {
  const {control, formState} = useFormContext();
  const [isFocused, setIsFocused] = useState(false);

  const formatZipCode = value => {
    value = value?.trim()?.replace(/-/g, '');
    if (value?.length > 3) {
      value = value?.slice(0, 3) + '-' + value?.slice(3);
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
  const error = errors[name]?.message;
  return (
    <>
      <View style={{flex: 1}}>
        <Text style={{fontSize: 13, fontWeight: 'bold', lineHeight: 23}}>
          {`${textTitle}`}
          <Text style={styles.textRequie}>{`${requie ? ' *' : ''}`} </Text>
        </Text>
        {error && <Text style={styles.errorText}>{error}</Text>}
        <View style={{flexDirection: 'row'}}>
          {
            <View
              style={{
                position: 'absolute',
                top: '40%',
                height: '2%',
                left: '6%',
              }}>
              {!inviIcon && icon}
            </View>
          }

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
              setIsFocused(true);
              onFocus();
            }}
            selectionColor={'#3B9AE6'}
            placeholderTextColor={AppColors.grayBlack}
            textAlignVertical={textArea ? 'top' : 'center'}
            maxLength={255}
          />
        </View>
      </View>
    </>
  );
};

export default FormTextInput;

const styles = StyleSheet.create({
  container: {},
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
    color: AppColors.red,
    marginTop: scale(5),
  },
});
