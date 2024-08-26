import React, { useState } from 'react';
import * as S from './styles'; // Importa os estilos do arquivo styles.js

const LoginComponent = ({username, password, setUsername, setPassword, handleLogin}) => {

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
        placeholder="********"
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
