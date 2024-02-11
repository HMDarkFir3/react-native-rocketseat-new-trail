import React, { useState } from 'react';
import { PlusCircle } from 'phosphor-react-native';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';
import { QuantityCard } from '@/components/QuantityCard';

import { TaskDTO } from '@/dtos/TaskDTO';

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
  const [tasks, setTasks] = useState<TaskDTO[]>([
    {
      id: '1',
      name: 'Fazer café',
      done: false,
    },
    {
      id: '2',
      name: 'Fazer café',
      done: false,
    },
  ]);

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
          <QuantityCard title="Criadas" quantity={tasks.length} type="create" />
          <QuantityCard title="Concluídas" quantity={0} type="done" />
        </QuantityWrapper>
      </Wrapper>
    </Container>
  );
};
