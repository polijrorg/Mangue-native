import * as S from './styles';
import Heading from '@components/Heading';
import LoginScreen from '@components/LoginInput';
import { StatusBar } from 'expo-status-bar';
import React from 'react';

const Home = () => (
  <S.Wrapper>
    <LoginScreen />
  </S.Wrapper>
);

export default Home;
