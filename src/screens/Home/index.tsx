import React from 'react';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';

import Logo from '../../assets/logo.svg';

import { Container, Wrapper, Header, Floating } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <Wrapper>
        <Floating>
          <Input placeholder="Adicione uma nova tarefa" />
          <SmallButton />
        </Floating>
      </Wrapper>
    </Container>
  );
};
