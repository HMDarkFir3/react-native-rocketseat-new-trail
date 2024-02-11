import styled from 'styled-components/native';

export const Container = styled.View`
  justify-content: center;

  flex: 1;
  height: 56px;

  padding: 0 16px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

export const StyledInput = styled.TextInput`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text100};
`;
