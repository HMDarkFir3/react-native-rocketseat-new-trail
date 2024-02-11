import React from 'react';
import { useTheme } from 'styled-components';
import { Check, Trash } from 'phosphor-react-native';

import { TaskDTO } from '@/dtos/TaskDTO';

import clipboardImg from '../../assets/clipboard.png';

import {
  Container,
  TitleWrapper,
  Title,
  Border,
  CheckButton,
  RemoveButton,
  TaskCardEmptyContainer,
  TaskCardEmptyImage,
  TaskCardEmptyTitle,
  TaskCardEmptyDescription,
} from './styles';

interface Props {
  data: TaskDTO;
  onCheck: () => void;
  onRemove: () => void;
}

export const TaskCard = (props: Props) => {
  const { onCheck, onRemove } = props;
  const { name, isDone } = props.data;

  const { colors } = useTheme();

  return (
    <Container>
      <Border isDone={isDone}>
        <CheckButton isDone={isDone} onPress={onCheck}>
          {isDone && <Check size={12} color={colors.gray100} weight="bold" />}
        </CheckButton>
      </Border>

      <TitleWrapper>
        <Title isDone={isDone}>{name}</Title>
      </TitleWrapper>

      <RemoveButton onPress={onRemove}>
        <Trash size={20} color={colors.gray300} />
      </RemoveButton>
    </Container>
  );
};

export const TaskCardEmpty = () => {
  return (
    <TaskCardEmptyContainer>
      <TaskCardEmptyImage source={clipboardImg} />

      <TaskCardEmptyTitle>
        Você ainda não tem tarefas cadastradas{'\n'}
        <TaskCardEmptyDescription>
          Crie tarefas e organize seus itens a fazer
        </TaskCardEmptyDescription>
      </TaskCardEmptyTitle>
    </TaskCardEmptyContainer>
  );
};
