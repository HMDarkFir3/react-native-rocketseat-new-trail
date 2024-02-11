import React from 'react';

import { Container, Title, QuantityWrapper, Quantity } from './styles';

interface Props {
  title: string;
  quantity: number;
  type: 'create' | 'done';
}

export const QuantityCard = (props: Props) => {
  const { title, quantity, type } = props;

  return (
    <Container>
      <Title type={type}>{title}</Title>
      <QuantityWrapper>
        <Quantity>{quantity}</Quantity>
      </QuantityWrapper>
    </Container>
  );
};
