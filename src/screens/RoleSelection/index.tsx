import * as S from './styles';
import React, { useState } from 'react';
import RoleSelection from '@components/Role';
import Button from '@components/Button';
import ProgressBar from '@components/ProgressBar';

const RoleSelectionScreen = ({ navigation }) => {
  const [selectedRole, setSelectedRole] = useState(null);
  const [currentPage, setCurrentPage] = useState(1);
  const totalPages = 5;

  const handlePress = (role) => {
    setSelectedRole(role);
  };

  const handleNextPress = () => {
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
        selected={selectedRole === 'Cantor'}
        onPress={() => handlePress('Cantor')}
      />
      <RoleSelection 
        title="Compositor"
        description="quam tempor a ipsum ut rutrum. Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!"
        selected={selectedRole === 'Compositor'}
        onPress={() => handlePress('Compositor')}
      />
      <RoleSelection 
        title="Ambos"
        description="quam tempor a ipsum ut rutrum. Vivamus vehicula neque nunc, . In leo nunc, dapibus vel elementum eget, auctor in felis.co!"
        selected={selectedRole === 'Ambos'}
        onPress={() => handlePress('Ambos')}
      />
      <Button Title="Próximo" onPress={handleNextPress} />
    </S.Wrapper>
  );
};

export default RoleSelectionScreen;
