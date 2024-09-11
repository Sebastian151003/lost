import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, FlatList } from 'react-native';
import axios from 'axios';
import CharacterCard from '../components/CharacterCard';

const GalleryScreen = ({ navigation }) => {
  const [numCharacters, setNumCharacters] = useState(5);
  const [characters, setCharacters] = useState([]);

  const fetchRandomCharacters = async () => {
    const randomIds = Array.from({ length: numCharacters }, () => Math.floor(Math.random() * 150) + 1);
    const requests = randomIds.map(id => axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`));
    
    const responses = await Promise.all(requests);
    setCharacters(responses.map(res => res.data));
  };

  return (
    <View style={{ flex: 1, padding: 20 }}>
      <TextInput 
        placeholder="Enter number of characters"
        keyboardType="numeric"
        value={numCharacters.toString()}
        onChangeText={(text) => setNumCharacters(parseInt(text))}
        style={{ marginBottom: 10, padding: 10, borderColor: 'gray', borderWidth: 1 }}
      />
      <Button title="Load Characters" onPress={fetchRandomCharacters} />
      
      <FlatList
        data={characters}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => <CharacterCard character={item} />}
      />
    </View>
  );
};

export default GalleryScreen;
