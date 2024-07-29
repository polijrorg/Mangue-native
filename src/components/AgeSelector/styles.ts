import styled from 'styled-components/native';

export const ITEM_HEIGHT = 60;

export const ItemContainer = styled.View`
  height: ${ITEM_HEIGHT}px;
  justify-content: center;
  align-items: center;
  border-bottom-width: ${({ selected }) => (selected ? 1 : 0)}px;
  border-top-width: ${({ selected }) => (selected ? 1 : 0)}px;
  border-color: purple;
`;

export const ItemText = styled.Text`
  font-size: 40px;
  color: ${({ selected }) => (selected ? 'purple' : 'gray')};
  font-weight: ${({ selected }) => (selected ? 'bold' : 'normal')};
`;
