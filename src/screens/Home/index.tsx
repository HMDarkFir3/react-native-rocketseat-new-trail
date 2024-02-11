import React, { useState } from 'react';
import { PlusCircle } from 'phosphor-react-native';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';
import { QuantityCard } from '@/components/QuantityCard';

import Logo from '../../assets/logo.svg';

import {
  Container,
  Wrapper,
  Header,
  Floating,
  QuantityWrapper,
} from './styles';

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

        <QuantityWrapper>
          <QuantityCard title="Criadas" quantity={0} type="create" />
          <QuantityCard title="Concluídas" quantity={0} type="done" />
        </QuantityWrapper>
      </Wrapper>
    </Container>
  );
};
