import Checkbox from '@components/CheckBox';
import * as S from './styles';
import Heading from '@components/Heading';
import LoginScreen from '@components/LoginInput';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import SignUpComponent from '@components/SignUp';

const SignUp = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (

  <S.Wrapper>
    <S.TitleTxt>Criar Conta</S.TitleTxt>
    <S.SubtitleTxt>Preencha as informações abaixo para poder acessar as informações de nosso aplicativo</S.SubtitleTxt>
    <SignUpComponent navigation={navigation}/>

  </S.Wrapper>
)};

export default SignUp;
