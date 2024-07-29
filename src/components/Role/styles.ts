import styled from 'styled-components/native';
import { TouchableOpacity, Text } from 'react-native';

export const Card = styled(TouchableOpacity)`
  background-color: ${({ selected, theme }) => (selected ? theme.colors.primary.light : theme.colors.primary.dark)};
  padding: 15px;
  border-radius: 50px;
  align-items: center;
  margin: 10px 0px;
  width: 85%;
`;

export const Title = styled(Text)`
  font-size: 18px;
  font-family: Poppins;
  font-weight: bold;
  color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.black)};
`;

export const Description = styled(Text)`
  font-size: 10px;
  color: ${({ selected, theme }) => (selected ? theme.colors.white : theme.colors.black)};
  text-align: center;
  margin-top: 10px;
`;
