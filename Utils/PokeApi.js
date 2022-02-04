import axios from 'axios';
import * as React from 'react';
import { useState } from 'react';
import {
  Image,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Button,
} from 'react-native';

export default PokeApi = () => {
  //llamadas axios a API
  const [pokemonInfo, setPokemonInfo] = useState({});
  const [habilidades, setHabilidades] = useState([]);
  const [tipo, setTipo] = useState([]);
  const [front_default, setFrontDefault] = useState();
  const [back_default, setBackDefault] = useState();
  const [pokemonName, setPokemonName] = useState();

  const getPokemon = async () => {
    const res = await axios.get(
      `https://pokeapi.co/api/v2/pokemon/${pokemonName}`
    );
    setPokemonInfo(res.data);
    setHabilidades(res.data.moves[0].move.name);
    setTipo(res.data.types[0].type.name);
    setFrontDefault(res.data.sprites.front_default);
    setBackDefault(res.data.sprites.back_default);
  };

  const onPressBuscar = () => {
    getPokemon();
    setPokemonName('');
  };

  return (
    <ScrollView
      contentContainerStyle={{ alignItems: 'center', flex: 1, paddingTop: 30 }}>
      <View style={{ alignItems: 'center' }}>
        <TextInput
          style={{ fontSize: 12 }}
          placeholder="Introduce nombre de pokemon..."
          value={pokemonName}
          onChangeText={setPokemonName}
          autoCapitalize="none"
        />
        <View style={{ borderWidth: 0, paddingTop: 10, paddingBottom: 20 }}>
          <Button
            title=" Buscar Pokemon"
            borderRadius
            onPress={onPressBuscar}
          />
        </View>
      </View>

      <View style={styles.card}>
        <View style={{ borderWidth: 0, paddingBottom: 5 }}>
          <Text style={{ fontSize: 16, fontWeight: 'bold' }}>
            Nombre: {pokemonInfo.name}
          </Text>
        </View>

        <Text>Posicion Pokedex: {pokemonInfo.id}</Text>
        <Text>Habilidades: {habilidades}</Text>
        <Text>Tipo: {tipo}</Text>

        <Text>Experiencia: {pokemonInfo.base_experience}</Text>
        <Text>Altura: {pokemonInfo.height}</Text>
        <Text>Peso: {pokemonInfo.weight}</Text>
        <Image style={styles.avatar} source={{ uri: front_default }} />
        <Image style={styles.avatar} source={{ uri: back_default }} />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  avatar: {
    height: 200,
    width: 200,
    borderRadius: 64,
  },
  card: {
    paddingLeft: 40,
    width: 300,
    height: 525,
    padding: 14,
    borderWidth: 3,
    borderColor: '#E7E3EB',
    borderRadius: 24,
    backgroundColor: '#FFFFFF',
  },
});
