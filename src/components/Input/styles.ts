import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;

  width: 100%;
  height: 54px;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.gray500};
  border-radius: 6px;
  border: 1px solid ${({ theme }) => theme.colors.gray700};
`;

export const StyledInput = styled.TextInput`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray100};
`;
