import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as S from './styles'; // Importa os estilos do arquivo styles.js
import Checkbox from '@components/CheckBox';

const SignUpComponent = () => {
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //testando funcionalidade do botão
    console.log('Nome:', username);
    console.log('Email:', email);
    console.log('Senha:', password);
  };

  return (
    <S.Container>
      <S.StyledLabel>Nome Completo</S.StyledLabel>
      <S.StyledInput
        placeholder="Nome e Sobrenome"
        value={username}
        onChangeText={setUsername}
      />
      <S.StyledLabel>Email</S.StyledLabel>
      <S.StyledInput
        placeholder="exemplo@gmail.com"
        value={email}
        onChangeText={setEmail}
        secureTextEntry
      />
      <S.StyledLabel>Senha</S.StyledLabel>
      <S.StyledInput
        placeholder="**********"
        value={password}
        onChangeText={setPassword}
      />
    <S.ThermsWrapper>
      <Checkbox label="Concordo com os Termos do App e Política de privacidade" checked={isChecked} onPress={handleCheckboxToggle} />
    </S.ThermsWrapper>
      <S.StyledButton onPress={handleLogin}>
        <S.ButtonText>Registrar-se</S.ButtonText>
      </S.StyledButton>
    </S.Container>
  );
};

export default SignUpComponent;
