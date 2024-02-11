import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  width: 100%;
  height: 60px;

  background-color: ${({ theme }) => theme.colors.secondary};
  border-radius: 4px;
`;

export const Name = styled.Text`
  margin-left: 16px;

  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text100};
`;
