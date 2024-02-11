import React from 'react';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';

import { Container, Header, Title, Date, InputWrapper } from './styles';

export const Home = () => {
  const onAddParticipant = () => {
    alert('Adicionando participante');
  };

  return (
    <Container>
      <Header>
        <Title>Rocketseat</Title>
        <Date>Sexta, 4 de Novembro de 2022.</Date>
      </Header>

      <InputWrapper>
        <Input placeholder="Nome do participante" />
        <SmallButton type="add" onPress={onAddParticipant} />
      </InputWrapper>
    </Container>
  );
};
