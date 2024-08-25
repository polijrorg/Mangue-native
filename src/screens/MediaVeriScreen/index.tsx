import * as S from './styles';
import React, { useState } from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import Input from '@components/Input';

const MediaVeriScreen = ({navigation}) => {

  const [username, setUsername] = useState('');

  const handleNextPress = () => {
    navigation.navigate('MusicGenreSelection')
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (

  <S.Wrapper>
    <ProgressBar 
    currentPage={6} 
    totalPages={8} 
    onBackPress={handleBackPress} />
    <S.TitleTxt>Verifique suas mídias</S.TitleTxt>
    <S.SubtitleTxt>Para uma melhor experiência com o app, por favor nos conte um pouco mais sobre você, inicie
     o processo de verificação de suas mídias sociais</S.SubtitleTxt>
    <Input label={'Instagram'} placeholder={'Ex.: matue.art'} value={'username'} />
    <Input label={'Facebook'} placeholder={'Ex.: matue.art'} value={'username'} />
    <Input label={'TikTok'} placeholder={'Ex.: matue.art'} value={'username'} />
    <Input label={'Youtube'} placeholder={'Ex.: matue.art'} value={'username'} />
    <Input label={'Spotify'} placeholder={'Ex.: matue.art'} value={'username'} />
    <Button 
    Title={'Próximo'} 
    onPress={handleNextPress} />

  </S.Wrapper>
)};

export default MediaVeriScreen;
