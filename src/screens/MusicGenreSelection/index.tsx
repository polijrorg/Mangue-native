import * as S from './styles';
import React from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import Input from '@components/Input';
import HiperlinkTextComponent from '@components/HiperlinkTextComponent';

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
    currentPage={7} 
    totalPages={8} 
    onBackPress={handleBackPress} />
    <S.TitleTxt>Qual é o seu gênero de música de preferência?</S.TitleTxt>
    <S.SubtitleTxt>Para uma melhor experiência com o app, por favor continue a falar conosco, nos
     dê mais detalhes sobre sua preferência de gênero musical</S.SubtitleTxt>
    <Input label={'Gênero de preferência'} placeholder={'Ex.: Trap'} value={'username'} />
    <HiperlinkTextComponent text={'Ver exemplos de gêneros populares'} url={'www.clonacartao.com.br'} />
    <Button 
    Title={'Próximo'} 
    onPress={handleNextPress} />

  </S.Wrapper>
)};

export default MusicGenreSelection;
