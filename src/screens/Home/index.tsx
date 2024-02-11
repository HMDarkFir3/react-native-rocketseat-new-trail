import React from 'react';

import { Input } from '@/components/Input';

import { Container, Header, Title, Date, InputWrapper } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header>
        <Title>Rocketseat</Title>
        <Date>Sexta, 4 de Novembro de 2022.</Date>
      </Header>

      <InputWrapper>
        <Input placeholder="Nome do participante" />
      </InputWrapper>
    </Container>
  );
};
