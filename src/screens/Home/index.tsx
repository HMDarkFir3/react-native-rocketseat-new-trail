import React, { useState } from 'react';
import { FlatList, Alert } from 'react-native';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';
import { ParticipantCard } from '@/components/ParticipantCard';

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
  const [participant, setParticipant] = useState<string>('');
  const [participants, setParticipants] = useState<string[]>([]);

  const onAddParticipant = (participant: string) => {
    if (participant) {
      setParticipants((prev) => [...prev, participant]);
      setParticipant('');
    } else {
      Alert.alert('Atenção', 'Digite o nome do participante.');
    }
  };

  const onRemoveParticipant = (participant: string) => {
    Alert.alert('Atenção', `Deseja remover ${participant} da lista?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () =>
          setParticipants((prev) =>
            prev.filter((name) => name !== participant),
          ),
      },
    ]);
  };

  return (
    <Container>
      <Header>
        <EventName>Rocketseat</EventName>
        <EventDate>Sexta, 4 de Novembro de 2022.</EventDate>
      </Header>

      <InputWrapper>
        <Input
          placeholder="Nome do participante"
          value={participant}
          onChangeText={setParticipant}
        />
        <SmallButton type="add" onPress={() => onAddParticipant(participant)} />
      </InputWrapper>

      <Participants>Participantes</Participants>

      <FlatList
        style={{ marginTop: 16, marginBottom: 24 }}
        contentContainerStyle={{ gap: 8 }}
        data={participants}
        keyExtractor={(item) => item}
        renderItem={({ item }) => (
          <ParticipantCard
            name={item}
            onRemove={() => onRemoveParticipant(item)}
          />
        )}
        ListEmptyComponent={() => (
          <EmptyParticipants>
            Ninguém chegou no evento ainda?{'\n'}Adicione participantes a sua
            lista de presença.
          </EmptyParticipants>
        )}
        showsVerticalScrollIndicator={false}
      />
    </Container>
  );
};
