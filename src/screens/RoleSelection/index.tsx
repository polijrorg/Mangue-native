import * as S from './styles';
import React, { useState } from 'react';
import RoleSelection from '@components/Role';
import Button from '@components/Button';
import ProgressBar from '@components/ProgressBar';
import { RegisterRequest } from '@services/RegisterService';
import { Alert } from 'react-native';

interface RoleSelectionScreenProps {
  formData: RegisterRequest;
  setFormData: React.Dispatch<React.SetStateAction<RegisterRequest>>;
  navigation: any;
}

const RoleSelectionScreen: React.FC<RoleSelectionScreenProps> = ({ navigation, formData, setFormData }) => {
  const [selectedRole, setSelectedRole] = useState(formData.espcldd || ''); // Inicializa com o valor atual de formData.espcldd
  const [currentPage] = useState(1);
  const totalPages = 8;

  const handlePress = (role: string) => {
    setSelectedRole(role); // Atualiza o role selecionado
  };

  const handleNextPress = () => {
    if (!selectedRole) {
      Alert.alert('Seleção Necessária', 'Por favor, selecione uma especialidade.');
      return;
    }

    // Atualiza o formData com o role selecionado
    setFormData({
      ...formData,
      espcldd: selectedRole,
    });

    // Navega para a próxima tela
    navigation.navigate('AgeSelection');
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
      <S.TitleTxt>Qual é sua especialidade?</S.TitleTxt>
      <S.SubtitleTxt>Para uma melhor experiência com o app, por favor nos informe o 
        principal motivo pela qual está usando o app</S.SubtitleTxt>

      <RoleSelection 
        title="Cantor" 
        description="quam tempor a ipsum ut rutrum. Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!"
        selected={selectedRole === 'cantor'}
        onPress={() => handlePress('cantor')}
      />
      <RoleSelection 
        title="Compositor"
        description="quam tempor a ipsum ut rutrum. Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!"
        selected={selectedRole === 'compositor'}
        onPress={() => handlePress('compositor')}
      />
      <RoleSelection 
        title="Ambos"
        description="quam tempor a ipsum ut rutrum. Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!"
        selected={selectedRole === 'ambos'}
        onPress={() => handlePress('ambos')}
      />
      <Button Title="Próximo" onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default RoleSelectionScreen;
