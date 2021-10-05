import React from 'react';
import {View} from 'react-native';
import PropTypes from 'prop-types';
import DropDownPicker from 'react-native-dropdown-picker';
import Text from '../Text';
import {styles} from './styles';

const FormSelect = props => {
  const {
    label,
    isRequire,
    error,
    items = [],
    unit = '',
    customContainerStyle,
    defaultValue,
    onChangeValue,
    open,
    setOpen,
    value,
    setValue,
    setItems,
  } = props;
  return (
    <View style={[styles.container]}>
      {label ? (
        <View style={styles.labelView}>
          <Text style={styles.labelText}>{label}</Text>
          {isRequire ? <Text style={styles.requireText}>※必須</Text> : null}
        </View>
      ) : null}

      <View style={styles.pickerSelectStyle}>
        <DropDownPicker
          items={items}
          containerStyle={[customContainerStyle]}
          style={styles.pickerContainer}
          open={open}
          itemStyle={{fontSize: 12}}
          setItems={items}
          setOpen={setOpen}
          placeholder=""
          value={value}
          setValue={setValue}
          onChangeValue={onChangeValue}
          dropDownContainerStyle={styles.dropDownStyles}
        />
        {unit ? <Text style={styles.unit}>{unit}</Text> : null}
      </View>
    </View>
  );
};

export default FormSelect;

FormSelect.propTypes = {
  label: PropTypes.string,
  isRequire: PropTypes.bool,
  error: PropTypes.any,
  items: PropTypes.any,
  unit: PropTypes.string,
  customContainerStyle: PropTypes.object,
  defaultValue: PropTypes.any,
  onChangeValue: PropTypes.func,
  open: PropTypes.bool,
  setOpen: PropTypes.func,
  value: PropTypes.any,
  setValue: PropTypes.func,
  setItems: PropTypes.func,
};
