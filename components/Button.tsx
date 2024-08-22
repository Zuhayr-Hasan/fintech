import React, { FC } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { ButtonProps } from '../types/componentType'

const Button: FC<ButtonProps> = ({ onPress, title, backgroundColor = '#7081FF' }) => {
  return (
    <View>
      <TouchableOpacity style={[styles.button, { backgroundColor }]} onPress={onPress}>
        <Text style={styles.buttonText}>{title}</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 10,
  },
  button: {
    paddingVertical: 18,
    paddingHorizontal: 30,
    borderRadius: 15,
    marginTop: 10,
  },
  buttonText: {
    color: '#FFFFFF',
    fontSize: 16,
    fontWeight: '600',
    textAlign: 'center'
  },
});
