import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Inicio = ({navigation, route}) => {
<<<<<<< HEAD
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
=======

    const visitarNosotros = () =>{
        navigation.navigate('Nosotros')
    }

    const visitarCiudades = () =>{
        navigation.navigate('Ciudades')
    }


    return (
        <View>
            <Text>Desde Inicio</Text>
            <Button
                title= 'Mis ciudades'

                onPress= {()=> visitarCiudades()}
            />
            <Button
                title= 'Ir a Nosotros'
                onPress={ () => visitarNosotros()}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    
})

export default Inicio;
>>>>>>> wheather-api
