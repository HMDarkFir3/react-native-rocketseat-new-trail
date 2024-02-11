import styled, { css } from 'styled-components/native';

interface TitleProps {
  type: 'create' | 'done';
}

export const Container = styled.View`
  flex-direction: row;
  gap: 8px;
`;

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};

  ${({ type }) =>
    type === 'create' &&
    css`
      color: ${({ theme }) => theme.colors.gray200};
    `};

  ${({ type }) =>
    type === 'done' &&
    css`
      color: ${({ theme }) => theme.colors.purple};
    `};
`;

export const QuantityWrapper = styled.View`
  padding: 2px 8px;

  background-color: ${({ theme }) => theme.colors.gray400};
  border-radius: 40px;
`;

export const Quantity = styled.Text`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray200};
`;
