import * as S from './styles';
import React, { useState } from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import AdressComponent from '@components/AdressComponent';

const AdressSelectionScreen = ({navigation}) => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleNextPress = () => {
    navigation.navigate('AdressSelection')
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (

  <S.Wrapper>
    <ProgressBar 
    currentPage={3} 
    totalPages={5} 
    onBackPress={handleBackPress} />
    <S.TitleTxt>Qual é o seu endereço?</S.TitleTxt>
    <S.SubtitleTxt>Para uma melhor experiência com o app, por favor nos conte um 
      pouco mais sobre você, seu endereço é essencial para te conhecermos melhor!</S.SubtitleTxt>
    <AdressComponent />
    <Button 
    Title={'Próximo'} 
    onPress={handleNextPress} />

  </S.Wrapper>
)};

export default AdressSelectionScreen;
