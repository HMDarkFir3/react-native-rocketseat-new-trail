import React from 'react';
import { FlatList, Text } from 'react-native';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';

import {
  Container,
  Header,
  EventName,
  EventDate,
  InputWrapper,
  Participants,
  EmptyParticipants,
} from './styles';

export const Home = () => {
  const participants = ['Henrique'];

  const onAddParticipant = () => {
    alert('Adicionando participante');
  };

  return (
    <Container>
      <Header>
        <EventName>Rocketseat</EventName>
        <EventDate>Sexta, 4 de Novembro de 2022.</EventDate>
      </Header>

      <InputWrapper>
        <Input placeholder="Nome do participante" />
        <SmallButton type="add" onPress={onAddParticipant} />
      </InputWrapper>

      <Participants>Participantes</Participants>

      <FlatList
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => <Text>{item}</Text>}
        ListEmptyComponent={() => (
          <EmptyParticipants>
            Ninguém chegou no evento ainda?{'\n'}Adicione participantes a sua
            lista de presença.
          </EmptyParticipants>
        )}
      />
    </Container>
  );
};
