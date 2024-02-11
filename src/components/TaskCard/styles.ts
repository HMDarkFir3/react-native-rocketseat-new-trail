import styled from 'styled-components/native';

export const TaskCardEmptyContainer = styled.View`
  align-items: center;
  justify-content: center;
  gap: 16px;

  padding-top: 48px;

  border-top-width: 1px;
  border-color: ${({ theme }) => theme.colors.gray400};
`;

export const TaskCardEmptyImage = styled.Image`
  width: 56px;
  height: 56px;
`;

export const TaskCardEmptyTitle = styled.Text`
  text-align: center;
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.gray300};
`;

export const TaskCardEmptyDescription = styled.Text`
  text-align: center;
  font-family: ${({ theme }) => theme.fonts.regular};
`;
