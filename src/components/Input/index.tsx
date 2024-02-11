import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, StyledInput } from './styles';

interface Props extends TextInputProps {}

export const Input = (props: Props) => {
  const { value, ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container isBorder={!!value}>
      <StyledInput placeholderTextColor={colors.gray300} {...rest} />
    </Container>
  );
};
