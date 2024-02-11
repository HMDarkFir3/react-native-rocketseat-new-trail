import React from 'react';
import { TextInputProps } from 'react-native';
import { useTheme } from 'styled-components';

import { Container, StyledInput } from './styles';

interface Props extends TextInputProps {}

export const Input = (props: Props) => {
  const { ...rest } = props;

  const { colors } = useTheme();

  return (
    <Container>
      <StyledInput placeholderTextColor={colors.gray300} {...rest} />
    </Container>
  );
};
