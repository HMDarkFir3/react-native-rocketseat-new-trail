import React from 'react';
import { TextInputProps } from 'react-native';

import { useTheme } from '@/hooks/useTheme';

import { Container, StyledInput } from './styles';

interface Props extends TextInputProps {}

export const Input = (props: Props) => {
  const { ...rest } = props;

  const { theme } = useTheme();

  return (
    <Container>
      <StyledInput placeholderTextColor={theme.colors.text600} {...rest} />
    </Container>
  );
};
