import React, { useState } from 'react';
import { Alert } from 'react-native';
import * as S from './styles';
import Checkbox from '@components/CheckBox';
import { RegisterRequest } from '@services/RegisterService';

interface SignUpComponentProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const SignUpComponent: React.FC<SignUpComponentProps> = ({
  formData,
  setFormData,
  navigation,
}) => {
  const [agreedToTerms, setAgreedToTerms] = useState(false);

  const handleInputChange = (field: keyof RegisterRequest, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  const handleNextPress = () => {
    if (!agreedToTerms) {
      Alert.alert('Aviso', 'É necessário concordar com os Termos de Uso para prosseguir.');
      return;
    }

    navigation.navigate('RoleSelection');
  };

  return (
    <S.Container>
      <S.StyledLabel>Nome Completo</S.StyledLabel>
      <S.StyledInput
        placeholder="Nome e Sobrenome"
        value={formData.name}
        onChangeText={(text) => handleInputChange('name', text)}
      />
      <S.StyledLabel>Email</S.StyledLabel>
      <S.StyledInput
        placeholder="exemplo@gmail.com"
        value={formData.email}
        onChangeText={(text) => handleInputChange('email', text)}
      />
      <S.StyledLabel>Senha</S.StyledLabel>
      <S.StyledInput
        placeholder="**********"
        value={formData.password}
        onChangeText={(text) => handleInputChange('password', text)}
        secureTextEntry
      />
      <S.ThermsWrapper>
        <Checkbox
          label="Concordo com os Termos do App e Política de privacidade"
          checked={agreedToTerms}
          onPress={() => setAgreedToTerms(!agreedToTerms)}
        />
      </S.ThermsWrapper>
      <S.StyledButton onPress={handleNextPress}>
        <S.ButtonText>Registrar-se</S.ButtonText>
      </S.StyledButton>
    </S.Container>
  );
};

export default SignUpComponent;
