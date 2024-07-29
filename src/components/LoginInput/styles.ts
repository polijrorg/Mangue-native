import { theme } from '@styles/default.theme';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 95%;
  justify-content: center;
  padding: 0 16px;
`;

export const StyledInput = styled.TextInput`
  font-family: 'Poppins-Regular';
  font-size: 10px;
  height: 40px;
  background-color: ${theme.colors.primary.dark};
  border-radius: 15px;
  margin-top: 4px;
  margin-bottom: 15px;
  padding: 0 8px;
`;

export const StyledLabel = styled.Text`
  /* margin-bottom: 2px; */
  font-family: 'Poppins-Regular';
  font-size: 10px;
`;

export const StyledButton = styled.TouchableOpacity`
  background-color: ${theme.colors.primary.main};
  padding: 10px;
  border-radius: 30px;
  align-items: center;
  font-family: 'Poppins-Regular';
  margin-top: 10px;
`;

export const ButtonText = styled.Text`
  font-size: 14px;
  font-weight: bold;
  color: white;
  font-family: 'Poppins-Regular';
  font-size: 16px;
`;

