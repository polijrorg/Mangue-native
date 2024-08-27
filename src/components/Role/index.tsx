import React from 'react';
import * as S from './styles';

interface RoleSelectionProps {
  title: string;
  description: string;
  selected: boolean;
  onPress: () => void;
}

const RoleSelection: React.FC<RoleSelectionProps> = ({ title, description, selected, onPress }) => {
  return (
    <S.Card selected={selected} onPress={onPress}>
      <S.Title selected={selected}>{title}</S.Title>
      <S.Description selected={selected}>{description}</S.Description>
    </S.Card>
  );
};

export default RoleSelection;
