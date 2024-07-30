import Checkbox from '@components/CheckBox';
import * as S from './styles';
import Heading from '@components/Heading';
import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import LoginComponent from '@components/LoginInput';

const Home = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  return (

  <S.Wrapper>
    <S.LogoImg source={require('public/assets/images/logo.png')} />
    <S.TitleTxt>Logar Resenha Digital</S.TitleTxt>
    <S.SubtitleTxt>Bem Vindo de Volta! Preparado para novos descontos?</S.SubtitleTxt>
    <LoginComponent />
    <S.ForgotWrapper>
      <Checkbox label="Manter-se conectado" checked={isChecked} onPress={handleCheckboxToggle} />
      <S.ForgotText onPress={() => navigation.navigate('ForgotPassword')}>Esqueceu a Senha?</S.ForgotText>
    </S.ForgotWrapper>
    <S.SignUpWrapper>
      <S.SignUpText>Não tem uma conta? </S.SignUpText>
      <S.SignUpText2 onPress={() => navigation.navigate('SignUp')} >Cadastre-se</S.SignUpText2>
    </S.SignUpWrapper>
  </S.Wrapper>
)};

export default Home;
