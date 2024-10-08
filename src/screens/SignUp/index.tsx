import * as S from './styles';
import React, { useState } from 'react';
import SignUpComponent from '@components/SignUp';
import { RegisterRequest } from '@services/RegisterService';

interface SignUpProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const SignUp: React.FC<SignUpProps> = ({ formData, setFormData, navigation }) => {
  return (
    <S.Wrapper>
      <S.TitleTxt>Criar Conta</S.TitleTxt>
      <S.SubtitleTxt>
        Preencha as informações abaixo para poder acessar as informações do nosso aplicativo
      </S.SubtitleTxt>
      <SignUpComponent
        formData={formData}
        setFormData={setFormData}
        navigation={navigation}
      />
    </S.Wrapper>
  );
};

export default SignUp;
