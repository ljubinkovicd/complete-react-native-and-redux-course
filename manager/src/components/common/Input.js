import React from 'react';
import { TextInput, View, Text } from 'react-native';

const Input = props => {
  const {
    placeholderText,
    labelText,
    value,
    onChangeText,
    secureTextEntry
  } = props;
  const { containerStyle, labelStyle, inputStyle } = styles;

  return (
    <View style={containerStyle}>
      <Text style={labelStyle}>{labelText}</Text>
      <TextInput
        secureTextEntry={secureTextEntry}
        placeholder={placeholderText}
        autoCorrect={false}
        style={inputStyle}
        value={value}
        onChangeText={onChangeText}
      />
    </View>
  );
};

const styles = {
  containerStyle: {
    height: 40,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  labelStyle: {
    fontSize: 18,
    paddingLeft: 20,
    flex: 1 // 1/4 will be allocated
  },
  inputStyle: {
    color: '#000000',
    paddingRight: 5,
    paddingLeft: 5,
    fontSize: 18,
    lineHeight: 23,
    flex: 3 // 3/4 will be allocated
  }
};

export { Input };
