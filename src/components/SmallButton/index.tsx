import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { AntDesign } from '@expo/vector-icons';

import { Border, Container } from './styles';

interface Props extends RectButtonProps {
  type: 'add' | 'remove';
}

export const SmallButton = (props: Props) => {
  const { type, ...rest } = props;

  const selectedType = type === 'add' ? 'plus' : 'minus';

  return (
    <Border>
      <Container type={type} {...rest}>
        <AntDesign name={selectedType} size={24} color="#fff" />
      </Container>
    </Border>
  );
};
