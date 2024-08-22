import React, { FC } from 'react';
import { View, TextInput as RNTextInput, Text, StyleSheet } from 'react-native';
import { InputProps } from '../types/componentType'

const Input: FC<InputProps> = ({
  label,
  value,
  onChangeText,
  error = false,
  errorMessage = '',
  secureTextEntry = false,
  keyboardType = 'default',
  placeholder,
  style,
}) => {
  return (
    <View style={styles.container}>
      <RNTextInput
        value={value}
        onChangeText={onChangeText}
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        placeholder={placeholder}
        style={[
          styles.input,
          error && styles.errorInput,
          
        ]}
      />
      {error && errorMessage ? (
        <Text style={styles.errorText}>
          {errorMessage}
        </Text>
      ) : null}
    </View>
  );
};

export default Input;

const styles = StyleSheet.create({
  container: {
    marginBottom: 10,
  },
  label: {
    fontSize: 16,
    color: '#333',
  },
  input: {
    backgroundColor: '#f5f5f5',  
    borderRadius: 15,  
    borderColor: '#ccc',
    borderWidth: 1,
    fontSize: 16,  
    height: 60, 
    paddingLeft: 20
  },
  errorInput: {
    borderColor: 'red', 
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 4,
  },
});
