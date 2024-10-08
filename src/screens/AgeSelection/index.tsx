import * as S from './styles';
import React, { useState } from 'react';
import ProgressBar from '@components/ProgressBar';
import Button from '@components/Button';
import AgeSelector from '@components/AgeSelector';
import { RegisterRequest } from '@services/RegisterService';

interface AgeSelectionScreenProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const AgeSelectionScreen: React.FC<AgeSelectionScreenProps> = ({ navigation, formData, setFormData }) => {
  const [selectedAge, setSelectedAge] = useState(formData.idade || 25); // Inicializa com o valor atual de formData.idade ou 25 como padrão
  const [currentPage] = useState(2);
  const totalPages = 8;

  const handleNextPress = () => {
    // Atualiza o formData com a idade selecionada
    setFormData({
      ...formData,
      idade: selectedAge,
    });

    // Navega para a próxima tela
    navigation.navigate('AdressSelection');
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
      <S.TitleTxt>Qual é a sua idade?</S.TitleTxt>
      <S.SubtitleTxt>
        Para uma melhor experiência com o app, por favor nos conte um pouco mais sobre você, agora pela sua idade!
      </S.SubtitleTxt>

      {/* AgeSelector gerencia a seleção da idade */}
      <AgeSelector selectedAge={selectedAge} setSelectedAge={setSelectedAge} />

      <Button Title={'Próximo'} onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default AgeSelectionScreen;
