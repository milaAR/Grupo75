import React from 'react';
import {
  Text,
  StyleSheet,
  View,
  TextInput,
  TouchableHighlight,
  Button,
} from 'react-native';

const NuevaCiudad = ({navigation, route}) => {
  const visitarMapa = () => {
    navigation.navigate('Mapa');
  };
  return (
    //añadir componente formulario o crear formulario aqui
    <>
      <TextInput>Pais</TextInput>
      <TextInput>Ciudad</TextInput>
      <TouchableHighlight>
        <Text>Añadir</Text>
      </TouchableHighlight>
      <Button title="Ver en Mapa" onPress={() => visitarMapa()} />
    </>
  );
};

export default NuevaCiudad;
