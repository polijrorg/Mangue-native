import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

const Button = ({ Title, onPress }) => {
  return (
    <S.StyledButton onPress={onPress}>
        <S.ButtonText>{Title}</S.ButtonText>
    </S.StyledButton>
  );
};

export default Button;