import React, { useState } from 'react';
import { TouchableOpacity  } from 'react-native';
import * as S from './styles'; // Importa os estilos do arquivo styles.js
import { useNavigation } from '@react-navigation/native';

const RoleSelection = ({title, description, selected, onPress}) => { 
  return (
    <S.Card selected={selected} onPress={onPress}>
      <S.Title selected={selected}>{title}</S.Title>
      <S.Description selected={selected}>{description}</S.Description>
    </S.Card>
  );
};

export default RoleSelection;
