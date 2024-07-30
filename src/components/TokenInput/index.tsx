import React, { useState, createRef, useRef } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import styles from './styles';

const TokenInput = () => {
  const [code, setCode] = useState<string[]>(new Array(4).fill(''));
  const inputs = Array(4).fill(null).map(() => useRef<TextInput>(null));

  const handleInput = (text: string, index: number) => {
    const newCode = [...code];
    newCode[index] = text;
    setCode(newCode);

    if (text && index < 3 && inputs[index + 1].current) {
      inputs[index + 1].current.focus();  // Move para o próximo input
    } else if (!text && index > 0 && inputs[index - 1].current) {
      inputs[index - 1].current.focus();  // Move para o input anterior
    }
  };

  return (
    <View style={styles.container}>
      {code.map((digit, index) => (
        <TextInput
          key={index}
          style={styles.input}
          keyboardType="numeric"
          maxLength={1}
          onChangeText={(text) => handleInput(text, index)}
          value={digit}
          ref={inputs[index]}
          onKeyPress={({ nativeEvent }) => {
            if (nativeEvent.key === 'Backspace' && !digit) {
              if (index > 0 && inputs[index - 1].current) {
                inputs[index - 1].current.focus();
              }
            }
          }}
        />
      ))}
    </View>
  );
};

export default TokenInput;