import React from 'react';

import { SmallButton } from '@/components/SmallButton';

import { Container, Name } from './styles';

interface Props {
  name: string;
}

export const ParticipantCard = (props: Props) => {
  const { name } = props;

  return (
    <Container>
      <Name>{name}</Name>
      <SmallButton type="remove" />
    </Container>
  );
};
