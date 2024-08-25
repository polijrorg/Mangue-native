import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as S from './styles'; // Importa os estilos do arquivo styles.js

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
}

const InputComponent = ({ label, placeholder, value }: InputProps) => {
  const [username, setUsername] = useState('');

  return (
    <S.Container>
      <S.StyledLabel>{label}</S.StyledLabel>
      <S.StyledInput
        placeholder={placeholder}
        value={username}
        onChangeText={setUsername}
      />
    </S.Container>
  );
};

export default InputComponent;
