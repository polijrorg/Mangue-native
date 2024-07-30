import * as S from './styles';
import React, { useState } from 'react';
import Button from '@components/Button';
import TokenInput from '@components/TokenInput';

const ForgotTokenScreen = ({navigation, route}) => {
  const {username} = route.params

  const handleNextPress = () => {
    navigation.navigate('NextPage')
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (

  <S.Wrapper>
    <S.TitleTxt>Verifique o Código</S.TitleTxt>
    <S.SubtitleTxt>Preencha o código que acabamos de mandar
    para o email:</S.SubtitleTxt>
    <S.SubtitleTxt2>{username}</S.SubtitleTxt2>

    <TokenInput />
    <S.SubtitleTxt>Não recebeu o código?</S.SubtitleTxt>
    <S.SignUpText2>Reenviar</S.SignUpText2>

    <Button 
    Title={'Verificar'} 
    onPress={handleNextPress} />
  </S.Wrapper>
)};

export default ForgotTokenScreen;
