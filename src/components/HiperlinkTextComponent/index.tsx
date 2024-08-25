import React, { useState } from 'react';
import { View, TextInput, Button, Text, Linking } from 'react-native';
import * as S from './styles'; // Importa os estilos do arquivo styles.js

interface InputProps {
  text: string;
  url: string;
}

const HiperlinkTextComponent = ({ text, url }: InputProps) => {

  const handlePress = () => {
    Linking.openURL(url);
  };

  return (
    <S.Container>
      <S.StyledLabel onPress={handlePress}>{text}</S.StyledLabel>
    </S.Container>
  );
};

export default HiperlinkTextComponent;
