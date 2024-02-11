import React from 'react';

import { SmallButton } from '@/components/SmallButton';

import { Container, Name } from './styles';

interface Props {
  name: string;
  onRemove: () => void;
}

export const ParticipantCard = (props: Props) => {
  const { name, onRemove } = props;

  return (
    <Container>
      <Name>{name}</Name>
      <SmallButton type="remove" onPress={onRemove} />
    </Container>
  );
};
