import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
} from 'react-native';
import {Button} from 'react-native-paper';

const NuevaCiudad = ({navigation, route}) => {
  const visitarMapa = () => {
    navigation.navigate('Mapa');
  };
  return (
    //añadir componente formulario o crear formulario aqui
    <View>
      <TextInput>Pais</TextInput>
      <TextInput>Ciudad</TextInput>
      <TouchableHighlight>
        <Text>Añadir</Text>
      </TouchableHighlight>
      <Button title="Ver en Mapa" onPress={() => visitarMapa()} />
    </View>
  );
};

export default NuevaCiudad;
