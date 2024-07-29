import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import * as S from './styles'; // Importa os estilos do arquivo styles.js

const LoginComponent = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    //testando funcionalidade do botão
    console.log('Usuário:', username);
    console.log('Senha:', password);
  };

  return (
    <S.Container>
      <S.StyledLabel>Email</S.StyledLabel>
      <S.StyledInput
        placeholder="exemplo@gmail.com"
        value={username}
        onChangeText={setUsername}
      />
      <S.StyledLabel>Senha</S.StyledLabel>
      <S.StyledInput
        placeholder="123456789"
        value={password}
        onChangeText={setPassword}
        secureTextEntry
      />
      <S.StyledButton onPress={handleLogin}>
        <S.ButtonText>Iniciar Sessão</S.ButtonText>
      </S.StyledButton>
    </S.Container>
  );
};

export default LoginComponent;
