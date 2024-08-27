import React from 'react';
import * as S from './styles'; // Importa os estilos do arquivo styles.js

interface InputProps {
  label: string;
  placeholder: string;
  value: string;
  onChangeText: (text: string) => void;
}

const InputComponent: React.FC<InputProps> = ({ label, placeholder, value, onChangeText }) => {
  return (
    <S.Container>
      <S.StyledLabel>{label}</S.StyledLabel>
      <S.StyledInput
        placeholder={placeholder}
        value={value}
        onChangeText={onChangeText}
      />
    </S.Container>
  );
};

export default InputComponent;
