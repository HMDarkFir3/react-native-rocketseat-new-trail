import styled, { css } from 'styled-components/native';
import { RectButton } from 'react-native-gesture-handler';

interface ContainerProps {
  type: 'add' | 'remove';
}

export const Border = styled.View`
  border-radius: 8px;

  overflow: hidden;
`;

export const Container = styled(RectButton)<ContainerProps>`
  align-items: center;
  justify-content: center;
  flex: 1;

  width: 56px;

  ${({ type }) =>
    type === 'add' &&
    css`
      background-color: ${({ theme }) => theme.colors.green100};
    `};

  ${({ type }) =>
    type === 'remove' &&
    css`
      background-color: ${({ theme }) => theme.colors.red100};
    `};
`;
