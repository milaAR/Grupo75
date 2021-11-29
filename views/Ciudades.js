import React from 'react';
import {Text, StyleSheet, View, TouchableOpacity,FlatList} from 'react-native';
import {Button} from 'react-native-paper';

const Ciudades = ({navigation, route}) => {
  const visitarNuevaCiudad = () => {
    navigation.navigate('NuevaCiudad');
  };
  


  return (
    <View>
      <Text>Desde Ciudades</Text>
     

      <Button
        title="Añadir nueva ciudad"
        onPress={() => visitarNuevaCiudad()}
      />

      <Button title="Añadir nueva ciudad" onPress={() => visitarNuevaCiudad()}>
       Ir a Nueva Ciudad
      </Button>
    </View>
  );
};

const styles = StyleSheet.create({});
export default Ciudades;
