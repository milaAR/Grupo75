import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

//import ui
import {Button} from 'react-native-paper';

const Inicio = ({navigation, route}) => {
  const visitarNosotros = () => {
    navigation.navigate('Nosotros');
  };

  const visitarCiudades = () => {
    navigation.navigate('Ciudades');
  };

  return (
    <View>
      <Text>Desde Inicio</Text>
      <Button title="Mis ciudades" onPress={() => visitarCiudades()}>
        Mis ciudades
      </Button>
      <Button onPress={() => visitarNosotros()}>Ir a Nosotros</Button>
    </View>
  );
};

const styles = StyleSheet.create({});

export default Inicio;
