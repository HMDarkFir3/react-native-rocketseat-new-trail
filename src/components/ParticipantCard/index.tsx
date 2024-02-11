import React from 'react';

import { SmallButton } from '@/components/SmallButton';

import { ParticipantDTO } from '@/dtos/ParticipantDTO';

import { Container, Name } from './styles';

interface Props {
  data: ParticipantDTO;
  onRemove: () => void;
}

export const ParticipantCard = (props: Props) => {
  const { onRemove } = props;
  const { name } = props.data;

  return (
    <Container>
      <Name>{name}</Name>
      <SmallButton type="remove" onPress={onRemove} />
    </Container>
  );
};
