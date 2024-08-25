import * as S from './styles';
import React from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import Input from '@components/Input';

const MusicGenreSelection = ({navigation}) => {

  const handleNextPress = () => {
    navigation.navigate('VisualIdentitySelection')
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (

  <S.Wrapper>
    <ProgressBar 
    currentPage={8} 
    totalPages={8} 
    onBackPress={handleBackPress} />
    <S.TitleTxt>Escolha sua identidade visual!</S.TitleTxt>
    <S.SubtitleTxt>Para uma melhor experiência com o app, por favor escolha as cores principais que vão compor
     sua identidade visual</S.SubtitleTxt>
    <Input label={'Cor primária'} placeholder={'Ex.: #FF0000'} value={'username'} />
    <Input label={'Cor secundária'} placeholder={'Ex.: #5ea3cb'} value={'username'} />
    <Input label={'Cor secundária'} placeholder={'Ex.: #53d97e'} value={'username'} />
    <Button 
    Title={'Finalizar'}
    onPress={handleNextPress} />

  </S.Wrapper>
)};

export default MusicGenreSelection;
