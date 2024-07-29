import { theme } from '@styles/default.theme';
import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  /* justify-content: center; */
  background: ${({ theme }) => theme.colors.white };
`;

export const ForgotWrapper = styled(View)`
  padding: 0px 30px;
  margin-top: 15px;
  margin-bottom: 230px;
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  background: ${({ theme }) => theme.colors.white };
`;

export const SignUpWrapper = styled(View)`
  display: flex;
  flex-direction: row;
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.highEmphasis};
  margin-top: 32px;
`;

export const TitleTxt = styled(Text)`
  color: ${({ theme }) => theme.colors.highEmphasis};
  font-family: Poppins;
  font-size: 30px;
  margin-bottom: 5px;
`;

export const SubtitleTxt = styled(Text)`
  color: ${theme.colors.primary.dark2};
  font-size: 10px;
  margin-bottom: 60px;
  font-family: 'Poppins';
`;

export const LogoImg = styled.Image`
  height: 80px;
  width: 80px;
  margin-top: 70px;
  margin-bottom: 30px;
`;

export const ForgotText = styled(Text)`
  color: ${theme.colors.primary.light};
  font-size: 10px;
  font-family: 'Poppins-Bold';
  text-decoration-line: underline;
`;

export const SignUpText = styled(Text)`
  color: ${theme.colors.secundary.dark};
  font-size: 10px;
  font-family: 'Poppins';
`;
