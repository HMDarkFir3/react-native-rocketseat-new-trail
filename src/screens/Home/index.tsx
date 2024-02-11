import React, { useState } from 'react';
import { PlusCircle } from 'phosphor-react-native';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';

import Logo from '../../assets/logo.svg';

import { Container, Wrapper, Header, Floating } from './styles';

export const Home = () => {
  const [task, setTask] = useState<string>('');

  return (
    <Container>
      <Header>
        <Logo />
      </Header>

      <Wrapper>
        <Floating>
          <Input
            value={task}
            onChangeText={setTask}
            placeholder="Adicione uma nova tarefa"
          />
          <SmallButton icon={{ component: PlusCircle, style: { size: 20 } }} />
        </Floating>
      </Wrapper>
    </Container>
  );
};
