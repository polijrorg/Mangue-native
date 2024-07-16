import { Text, View } from 'react-native';
import styled from 'styled-components/native';

export const Wrapper = styled(View)`
  flex: 1;
  align-items: center;
  justify-content: center;
  background: ${({ theme }) => theme.colors.white };
`;

export const StyledText = styled(Text)`
  color: ${({ theme }) => theme.colors.highEmphasis};
  margin-top: 32px;
`;

export const LogoImg = styled.Image`
  height: 60px;
  width: 60px;
`;
