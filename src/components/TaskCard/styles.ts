import styled, { css } from 'styled-components/native';
import { BorderlessButton } from 'react-native-gesture-handler';

interface TitleProps {
  isDone: boolean;
}

interface BorderProps {
  isDone: boolean;
}

interface CheckButtonProps {
  isDone: boolean;
}

export const Container = styled.View`
  flex-direction: row;
  align-items: center;

  width: 100%;

  padding: 12px;

  background-color: ${({ theme }) => theme.colors.gray500};
  border: 1px solid ${({ theme }) => theme.colors.gray400};
  border-radius: 8px;
`;

export const TitleWrapper = styled.Text`
  flex: 1;

  padding: 0 8px;
`;

export const Title = styled.Text<TitleProps>`
  font-size: 14px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.gray100};

  ${({ isDone }) =>
    isDone &&
    css`
      text-decoration: line-through;
      color: ${({ theme }) => theme.colors.gray300};
    `}
`;

export const Border = styled.View<BorderProps>`
  border-radius: 12px;

  overflow: hidden;

  ${({ isDone }) =>
    isDone &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.purpleDark};
    `}

  ${({ isDone }) =>
    !isDone &&
    css`
      border: 2px solid ${({ theme }) => theme.colors.blue};
    `}
`;

export const CheckButton = styled(BorderlessButton)<CheckButtonProps>`
  align-items: center;
  justify-content: center;

  width: 16px;
  height: 16px;

  ${({ isDone }) =>
    isDone &&
    css`
      background-color: ${({ theme }) => theme.colors.purpleDark};
    `}
`;

export const RemoveButton = styled(BorderlessButton)``;

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
