import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;

  background-color: ${({ theme }) => theme.colors.gray600};
`;

export const Wrapper = styled.View`
  padding: 0 24px;
`;

export const Header = styled.View`
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 172px;

  background-color: ${({ theme }) => theme.colors.gray700};
`;

export const InputWrapper = styled.View`
  flex-direction: row;

  gap: 4px;

  margin-top: -27px;
`;
