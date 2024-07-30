import * as S from './styles';
import React, { useState } from 'react';
import Button from '@components/Button';

const ForgotPasswordScreen = ({navigation}) => {
  const [username, setUsername] = useState('');
  const email = username;

  const handleNextPress = () => {
    navigation.navigate('ForgotToken', {username})
  }

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (

  <S.Wrapper>
    <S.TitleTxt>Esqueceu sua senha?</S.TitleTxt>
    <S.SubtitleTxt>Preencha as informações abaixo para poder receber
    uma nova senha para nosso aplicativo</S.SubtitleTxt>
    <S.Container>
      <S.StyledLabel>Email</S.StyledLabel>
    </S.Container>
      <S.StyledInput
        placeholder="exemplo@gmail.com"
        value={username}
        onChangeText={setUsername}
      />
    
    <Button 
    Title={'Enviar Código de Verificação'} 
    onPress={handleNextPress} />
  </S.Wrapper>
)};

export default ForgotPasswordScreen;
