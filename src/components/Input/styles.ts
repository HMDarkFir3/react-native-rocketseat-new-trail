import styled, { css } from 'styled-components/native';

interface ContainerProps {
  isBorder: boolean;
}

export const Container = styled.View<ContainerProps>`
  flex: 1;
  justify-content: center;

  height: 52px;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.gray500};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray700};

  ${({ isBorder }) =>
    isBorder &&
    css`
      border-color: ${({ theme }) => theme.colors.purpleDark};
    `}
`;

export const StyledInput = styled.TextInput`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray100};
`;
