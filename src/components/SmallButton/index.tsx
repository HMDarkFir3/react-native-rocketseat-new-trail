import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Icon, IconProps } from 'phosphor-react-native';

import { Border, Container } from './styles';

interface Props extends RectButtonProps {
  icon: {
    component: Icon;
    style?: IconProps;
  };
}

export const SmallButton = (props: Props) => {
  const { ...rest } = props;
  const { component: IconComponent, style } = props.icon;

  const { colors } = useTheme();

  return (
    <Border>
      <Container {...rest}>
        <IconComponent color={colors.gray100} {...style} />
      </Container>
    </Border>
  );
};
