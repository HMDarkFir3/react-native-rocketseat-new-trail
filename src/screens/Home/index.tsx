import React, { useState } from 'react';
import { FlatList, Alert } from 'react-native';
import uuid from 'react-native-uuid';
import { PlusCircle } from 'phosphor-react-native';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';
import { QuantityCard } from '@/components/QuantityCard';
import { TaskCard, TaskCardEmpty } from '@/components/TaskCard';

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
      name: 'Estudar React Native',
      done: false,
    },
    {
      id: '2',
      name: 'Fazer café',
      done: true,
    },
  ]);

  const onAddTask = (taskName: string) => {
    if (!taskName) {
      return Alert.alert('Atenção', 'Informe o nome da tarefa');
    }

    if (tasks.find((t) => t.name === taskName)) {
      return Alert.alert('Atenção', `Tarefa já está na lista.`);
    }

    const newTask: TaskDTO = {
      id: uuid.v4(),
      name: taskName.trim(),
      done: false,
    };

    setTasks((prevState) => [...prevState, newTask]);
    setTask('');
  };

  const onRemoveTask = (id: string) => {
    Alert.alert('Remover tarefa', 'Deseja remover a tarefa?', [
      {
        text: 'Não',
        style: 'cancel',
      },
      {
        text: 'Sim',
        onPress: () => {
          const newTasks = tasks.filter((task) => task.id !== id);

          setTasks(newTasks);
        },
      },
    ]);
  };

  const onCheckTask = (id: string) => {
    const newTasks = tasks.map((task) => {
      if (task.id === id) {
        return {
          ...task,
          done: !task.done,
        };
      }

      return task;
    });

    setTasks(newTasks);
  };

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
          <SmallButton
            icon={{ component: PlusCircle, style: { size: 20 } }}
            onPress={() => onAddTask(task)}
          />
        </Floating>

        <QuantityWrapper>
          <QuantityCard title="Criadas" quantity={tasks.length} type="create" />
          <QuantityCard title="Concluídas" quantity={0} type="done" />
        </QuantityWrapper>

        <FlatList
          contentContainerStyle={{ gap: 8 }}
          data={tasks}
          keyExtractor={(item) => String(item.id)}
          renderItem={({ item }) => (
            <TaskCard
              data={item}
              onCheck={() => onCheckTask(String(item.id))}
              onRemove={() => onRemoveTask(String(item.id))}
            />
          )}
          ListEmptyComponent={() => <TaskCardEmpty />}
        />
      </Wrapper>
    </Container>
  );
};
