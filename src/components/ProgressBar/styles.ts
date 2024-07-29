import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  margin: 10px 80px;
  position: absolute;
  top: 10%;
`;

export const BackButton = styled.TouchableOpacity`
  margin-right: 10px;
`;

export const ProgressBarBackground = styled.View`
  flex: 1;
  height: 15px;
  border-radius: 8px;
  background-color: #f0f0f0;
  margin-right: 10px;
`;

export const ProgressBarFill = styled.View`
  width: ${({ progress }) => progress}%;
  height: 15px;
  border-radius: 8px;
  background-color: #6c63ff;
`;

export const ProgressText = styled.Text`
  font-size: 12px;
  font-weight: bold;
  color: #6c63ff;
`;
