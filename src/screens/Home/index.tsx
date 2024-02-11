import React, { useState, useCallback } from 'react';
import { FlatList, Alert } from 'react-native';
import uuid from 'react-native-uuid';

import { Input } from '@/components/Input';
import { SmallButton } from '@/components/SmallButton';
import { ParticipantCard } from '@/components/ParticipantCard';

import { ParticipantDTO } from '@/dtos/ParticipantDTO';

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
  const [participantName, setParticipantName] = useState<string>('');
  const [participants, setParticipants] = useState<ParticipantDTO[]>([]);

  const onAddParticipant = useCallback(
    (name: string) => {
      if (!name) {
        return Alert.alert('Atenção', 'Digite o nome do participante.');
      }

      if (participants.find((p) => p.name === name)) {
        return Alert.alert('Atenção', `Participante ${name} já está na lista.`);
      }

      const newParticipant: ParticipantDTO = {
        id: uuid.v4(),
        name,
      };

      setParticipants((prevState) => [...prevState, newParticipant]);
      setParticipantName('');
    },
    [participants],
  );

  const onRemoveParticipant = useCallback((name: string) => {
    Alert.alert('Atenção', `Deseja remover ${name} da lista?`, [
      {
        text: 'Cancelar',
        style: 'cancel',
      },
      {
        text: 'Remover',
        onPress: () =>
          setParticipants((prev) =>
            prev.filter((participant) => participant.name !== name),
          ),
      },
    ]);
  }, []);

  return (
    <Container>
      <Header>
        <EventName>Rocketseat</EventName>
        <EventDate>Sexta, 4 de Novembro de 2022.</EventDate>
      </Header>

      <InputWrapper>
        <Input
          placeholder="Nome do participante"
          value={participantName}
          onChangeText={setParticipantName}
          onSubmitEditing={() => onAddParticipant(participantName)}
        />
        <SmallButton
          type="add"
          onPress={() => onAddParticipant(participantName)}
        />
      </InputWrapper>

      <Participants>Participantes</Participants>

      <FlatList
        style={{ marginTop: 16, marginBottom: 24 }}
        contentContainerStyle={{ gap: 8 }}
        data={participants}
        keyExtractor={(item) => String(item.id)}
        renderItem={({ item }) => (
          <ParticipantCard
            data={item}
            onRemove={() => onRemoveParticipant(item.name)}
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
