import styled from 'styled-components/native';

import { STATUS_BAR_HEIGHT } from '@/utils/constants';

export const Container = styled.View`
  flex: 1;

  padding: 0 24px;

  background-color: ${({ theme }) => theme.colors.primary};
`;

export const Header = styled.View`
  margin-top: ${STATUS_BAR_HEIGHT + 40}px;
`;

export const EventName = styled.Text`
  font-size: 24px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text100};
`;

export const EventDate = styled.Text`
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text600};
`;

export const InputWrapper = styled.View`
  flex-direction: row;
  gap: 8px;

  margin: 36px 0 48px 0;
`;

export const Participants = styled.Text`
  font-size: 20px;
  font-family: ${({ theme }) => theme.fonts.bold};
  color: ${({ theme }) => theme.colors.text100};
`;

export const EmptyParticipants = styled.Text`
  margin-top: 28px;

  text-align: center;
  font-size: 16px;
  font-family: ${({ theme }) => theme.fonts.regular};
  color: ${({ theme }) => theme.colors.text100};
`;
