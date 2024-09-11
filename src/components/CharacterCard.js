import React from 'react';
import { View, Text, Image, StyleSheet } from 'react-native';

const CharacterCard = ({ character }) => {
  return (
    <View style={styles.card}>
      <Image source={{ uri: character.sprites.front_default }} style={styles.image} />
      <Text>Name: {character.name}</Text>
      <Text>Height: {character.height}</Text>
      <Text>Weight: {character.weight}</Text>
      <Text>Ability: {character.abilities[0].ability.name}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: 'white',
    padding: 10,
    marginVertical: 10,
    borderRadius: 10,
    alignItems: 'center'
  },
  image: {
    width: 100,
    height: 100
  }
});

export default CharacterCard;
