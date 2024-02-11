import React from 'react';

import { Input } from '@/components/Input';

import Logo from '../../assets/logo.svg';

import { Container, Wrapper, Header, InputWrapper } from './styles';

export const Home = () => {
  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <Wrapper>
        <InputWrapper>
          <Input placeholder="Adicione uma nova tarefa" />
        </InputWrapper>
      </Wrapper>
    </Container>
  );
};
