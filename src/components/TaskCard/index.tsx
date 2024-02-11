import React from 'react';

import clipboardImg from '../../assets/clipboard.png';

import {
  TaskCardEmptyContainer,
  TaskCardEmptyImage,
  TaskCardEmptyTitle,
  TaskCardEmptyDescription,
} from './styles';

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
