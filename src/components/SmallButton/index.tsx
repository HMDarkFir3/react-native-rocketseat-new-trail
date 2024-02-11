import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { Plus, Minus } from 'phosphor-react-native';
import { useTheme } from 'styled-components';

import { Border, Container } from './styles';

interface Props extends RectButtonProps {
  type: 'add' | 'remove';
}

export const SmallButton = (props: Props) => {
  const { type, ...rest } = props;

  const { colors } = useTheme();

  return (
    <Border>
      <Container type={type} {...rest}>
        {type === 'add' ? (
          <Plus size={24} color={colors.text100} weight="bold" />
        ) : (
          <Minus size={24} color={colors.text100} weight="bold" />
        )}
      </Container>
    </Border>
  );
};
