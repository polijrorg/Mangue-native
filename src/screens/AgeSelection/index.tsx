import * as S from './styles';
import React, { useState } from 'react';
import AgeSelector from '@components/AgeSelector';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';

const AgeSelectionScreen = ({navigation}) => {
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
    currentPage={2} 
    totalPages={5} 
    onBackPress={handleBackPress} />
    <S.TitleTxt>Qual é a sua idade?</S.TitleTxt>
    <S.SubtitleTxt>Para uma melhor experiência com o app, por favor
       nos conte um pouco mais sobre você, agora pela sua idade!</S.SubtitleTxt>
    <AgeSelector />
    <Button 
    Title={'Próximo'} 
    onPress={handleNextPress} />

  </S.Wrapper>
)};

export default AgeSelectionScreen;
