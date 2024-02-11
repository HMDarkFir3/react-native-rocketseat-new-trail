import React from 'react';
import { RectButtonProps } from 'react-native-gesture-handler';
import { useTheme } from 'styled-components';
import { Icon, IconProps } from 'phosphor-react-native';

import { Border, Container } from './styles';

interface IconType {
  component: Icon;
  style?: IconProps;
}

interface Props extends RectButtonProps {
  icon: IconType;
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
