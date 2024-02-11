import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 172px;

  background-color: ${({ theme }) => theme.colors.gray700};
`;
