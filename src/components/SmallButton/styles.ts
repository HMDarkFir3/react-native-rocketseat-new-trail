import styled from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

export const Border = styled.View`
  border-radius: 6px;

  overflow: hidden;
`;

export const Container = styled(RectButton)`
  align-items: center;
  justify-content: center;

  width: 52px;
  height: 52px;

  background-color: ${({ theme }) => theme.colors.blueDark};
`;
