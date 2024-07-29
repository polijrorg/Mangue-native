import React from 'react';
import { TouchableOpacity } from 'react-native';
import * as S from './styles';

const Checkbox = ({ label, checked, onPress }) => {
  return (
    <S.CheckboxContainer onPress={onPress}>
      <S.CheckboxSquare checked={checked} />
      <S.CheckboxLabel>{label}</S.CheckboxLabel>
    </S.CheckboxContainer>
  );
};

export default Checkbox;