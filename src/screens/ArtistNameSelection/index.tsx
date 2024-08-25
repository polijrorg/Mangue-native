import * as S from './styles';
import React, { useState } from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import InputComponent from '@components/Input';
import HiperlinkTextComponent from '@components/HiperlinkTextComponent';

const ArtistNameSelectionScreen = ({navigation}) => {

  const[username, setUsername] = useState('');

  const handleNextPress = () => {
    navigation.navigate('ArtistNameSelection')
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (

  <S.Wrapper>
    <ProgressBar 
    currentPage={4} 
    totalPages={8} 
    onBackPress={handleBackPress} />
    <S.TitleTxt>Escolha um nome artístico</S.TitleTxt>
    <S.SubtitleTxt>Para uma melhor experiência com o app, por favor nos conte 
    um pouco mais sobre você, compartilhe conosco seu nome artístico</S.SubtitleTxt>
    <InputComponent label={'Nome artístico'} placeholder={'Ex.: Matuê'} value={username} />
    <HiperlinkTextComponent text={'Verifique a disponibilidade no INPI'} url={'www.clonacartao.com.br'} />
    <S.SubtitleTxt>INPI nada mais é do que ... (iquam tempor a ipsum ut rutrum. Vivamus vehicula neque nunc,
     . In leo nunc, dapibus vel elementum eget, auctor in felis.co!)iquam tempor a ipsum ut rutrum. Vivamus
     vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!iquam tempor a ipsum ut rutrum.
     Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!iquam tempor a ipsum ut
     rutrum. Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co! Vivamus vehicula
     neque nunc, Vivamus vehicula neque nunc, Vivamus vehicula neque nunc,</S.SubtitleTxt>
     <HiperlinkTextComponent text={'Se necessário contate nossa equipe jurídica'} url={'www.clonacartao.com.br'} />
    <Button 
    Title={'Próximo'} 
    onPress={handleNextPress} />

  </S.Wrapper>
)};

export default ArtistNameSelectionScreen;
