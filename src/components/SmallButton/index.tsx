import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';

import { Border, Container } from './styles';

interface Props extends RectButtonProps {}

export const SmallButton = (props: Props) => {
  const { ...rest } = props;

  return (
    <Border>
      <Container {...rest} />
    </Border>
  );
};
