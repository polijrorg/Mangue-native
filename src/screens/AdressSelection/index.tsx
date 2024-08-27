import * as S from './styles';
import React, { useState } from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import AdressComponent from '@components/AdressComponent';
import { RegisterRequest } from '@services/RegisterService';
import { Alert } from 'react-native';

interface AdressSelectionScreenProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const AdressSelectionScreen: React.FC<AdressSelectionScreenProps> = ({ navigation, formData, setFormData }) => {
  const [currentPage] = useState(3);
  const totalPages = 8;

  const handleNextPress = () => {
    if (!formData.estado || !formData.cidade) {
      Alert.alert('Aviso', 'Por favor, preencha todos os campos antes de continuar.');
      return;
    }

    navigation.navigate('ArtistNameSelection');
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  return (
    <S.Wrapper>
      <ProgressBar 
        currentPage={currentPage} 
        totalPages={totalPages} 
        onBackPress={handleBackPress} 
      />
      <S.TitleTxt>Qual é o seu endereço?</S.TitleTxt>
      <S.SubtitleTxt>
        Para uma melhor experiência com o app, por favor nos conte um pouco mais sobre você. Seu endereço é essencial para te conhecermos melhor!
      </S.SubtitleTxt>
      <AdressComponent formData={formData} setFormData={setFormData} />
      <Button Title={'Próximo'} onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default AdressSelectionScreen;
