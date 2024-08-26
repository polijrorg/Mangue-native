import Checkbox from '@components/CheckBox';
import * as S from './styles';
import React, { useState } from 'react';
import LoginComponent from '@components/LoginInput';
import { Alert } from 'react-native';
import LoginService from '@services/LoginService';

const Home = ({ navigation }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isChecked, setIsChecked] = useState(false);

  const handleCheckboxToggle = () => {
    setIsChecked(!isChecked);
  };

  const handleLogin = async () => {
    try {
      const response = await LoginService.login({
        email,
        password,
      });
      Alert.alert('Sucesso', `Bem-vindo, ${response.user.name}!`);
      navigation.navigate('Home');
    } catch (error) {
      Alert.alert('Erro', 'Falha no login. Verifique suas credenciais.');
    }
  };

  return (
    <S.Wrapper>
      <S.LogoImg source={require('public/assets/images/logo.png')} />
      <S.TitleTxt>Logar Resenha Digital</S.TitleTxt>
      <S.SubtitleTxt>
        Bem Vindo de Volta! Preparado para novos descontos?
      </S.SubtitleTxt>
      <LoginComponent
        username={email}
        password={password}
        setUsername={setEmail}
        setPassword={setPassword}
        handleLogin={handleLogin}
      />
      <S.ForgotWrapper>
        <Checkbox
          label="Manter-se conectado"
          checked={isChecked}
          onPress={handleCheckboxToggle}
        />
        <S.ForgotText onPress={() => navigation.navigate('ForgotPassword')}>
          Esqueceu a Senha?
        </S.ForgotText>
      </S.ForgotWrapper>
      <S.SignUpWrapper>
        <S.SignUpText>Não tem uma conta? </S.SignUpText>
        <S.SignUpText2 onPress={() => navigation.navigate('SignUp')}>
          Cadastre-se
        </S.SignUpText2>
      </S.SignUpWrapper>
    </S.Wrapper>
  );
};

export default Home;
