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

export const Floating = styled.View`
  flex-direction: row;

  gap: 4px;

  margin-top: -26px;
`;

export const QuantityWrapper = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  margin-top: 32px;
  padding-bottom: 12px;

  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.colors.gray400};
`;
