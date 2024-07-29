import Checkbox from '@components/CheckBox';
import * as S from './styles';
import Heading from '@components/Heading';
import LoginScreen from '@components/LoginInput';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';

const Home = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (

  <S.Wrapper>
    <S.LogoImg source={require('public/assets/images/logo.png')} />
    <S.TitleTxt>Logar Resenha Digital</S.TitleTxt>
    <S.SubtitleTxt>Bem Vindo de Volta! Preparado para novos descontos?</S.SubtitleTxt>
    <LoginScreen />
    <S.ForgotWrapper>
      <Checkbox label="Manter-se conectado" checked={isChecked} onPress={handleCheckboxToggle} />
      <S.ForgotText>Esqueceu a Senha?</S.ForgotText>
    </S.ForgotWrapper>
    <S.SignUpWrapper>
      <S.SignUpText>Não tem uma conta? </S.SignUpText>
      <S.ForgotText>Cadastre-se</S.ForgotText>
    </S.SignUpWrapper>
  </S.Wrapper>
)};

export default Home;
