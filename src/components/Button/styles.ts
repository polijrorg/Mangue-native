import { theme } from '@styles/default.theme';
import styled from 'styled-components/native';

export const StyledButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary.main};
  padding: 10px;
  border-radius: 30px;
  align-items: center;
  font-family: 'Poppins-Regular';
  margin-top: 10px;
  width: 85%;
  position: absolute;
  top: 90%;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

