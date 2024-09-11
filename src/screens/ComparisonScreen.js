import React, { useState } from 'react';
import { View, TextInput, Button, Text } from 'react-native';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const ComparisonScreen = () => {
  const [character1Id, setCharacter1Id] = useState('');
  const [character2Id, setCharacter2Id] = useState('');
  const [character1, setCharacter1] = useState(null);
  const [character2, setCharacter2] = useState(null);

  const fetchCharacter = async (id, setCharacter) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    setCharacter(response.data);
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput 
        placeholder="Enter first character ID"
        keyboardType="numeric"
        value={character1Id}
        onChangeText={setCharacter1Id}
        style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
      />
      <TextInput 
        placeholder="Enter second character ID"
        keyboardType="numeric"
        value={character2Id}
        onChangeText={setCharacter2Id}
        style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button 
        title="Compare Characters" 
        onPress={() => {
          fetchCharacter(character1Id, setCharacter1);
          fetchCharacter(character2Id, setCharacter2);
        }}
      />
      
      {character1 && character2 && (
        <View>
          <Text>Comparison Table</Text>
          <CharacterCard character={character1} />
          <CharacterCard character={character2} />
        </View>
      )}
    </View>
  );
};

export default ComparisonScreen;
