import styled from 'styled-components/native';
import { TouchableOpacity, View, Text } from 'react-native';

export const CheckboxContainer = styled(TouchableOpacity)`
  flex-direction: row;
  align-items: center;
  height: 20px;
`;

export const CheckboxSquare = styled(View)`
  height: 15px;
  width: 15px;
  border-width: 2px;
  border-color: ${({ theme }) => theme.colors.highEmphasis};
  align-items: center;
  justify-content: center;
  margin-right: 2px;
  background-color: ${({ checked, theme }) => (checked ? theme.colors.highEmphasis : 'transparent')};
`;

export const CheckboxLabel = styled(Text)`
  color: ${({ theme }) => theme.colors.highEmphasis};
  font-size: 10px;
  font-family: 'Poppins';
`;