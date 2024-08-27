import React from 'react';
import * as S from './styles';
import { RegisterRequest } from '@services/RegisterService';

interface AdressComponentProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
}

const AdressComponent: React.FC<AdressComponentProps> = ({ formData, setFormData }) => {
  const handleInputChange = (field: keyof RegisterRequest, value: string) => {
    setFormData({ ...formData, [field]: value });
  };

  return (
    <S.Container>
      <S.StyledLabel>Estado</S.StyledLabel>
      <S.StyledInput
        placeholder="Preencha seu estado"
        value={formData.estado}
        onChangeText={(text) => handleInputChange('estado', text)}
      />
      <S.StyledLabel>Cidade</S.StyledLabel>
      <S.StyledInput
        placeholder="Preencha sua cidade"
        value={formData.cidade}
        onChangeText={(text) => handleInputChange('cidade', text)}
      />
    </S.Container>
  );
};

export default AdressComponent;
