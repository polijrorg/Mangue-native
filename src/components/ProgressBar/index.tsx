import React from 'react';
import * as S from './styles';
import { Ionicons } from '@expo/vector-icons'; // Biblioteca de ícones, você pode usar qualquer outra

const ProgressBar = ({ currentPage, totalPages, onBackPress }) => {
  const progress = (currentPage / totalPages) * 100;

  return (
    <S.Container>
      <S.BackButton onPress={onBackPress}>
        <Ionicons name="arrow-back" size={24} color="#6c63ff" />
      </S.BackButton>
      <S.ProgressBarBackground>
        <S.ProgressBarFill progress={progress} />
      </S.ProgressBarBackground>
      <S.ProgressText>{`${currentPage}/${totalPages}`}</S.ProgressText>
    </S.Container>
  );
};

export default ProgressBar;
