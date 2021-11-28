import React from 'react';
import {Text, StyleSheet, View,Button} from 'react-native';


const Ciudades= ({navigation, route}) => {

    const visitarNuevaCiudad = () =>{
        navigation.navigate('NuevaCiudad')
    }
    return (
        <View>
            <Text>Desde Ciudades</Text> 
            <Button
                title='Añadir nueva ciudad'
                onPress={ () => visitarNuevaCiudad()}
            />
        </View>
        
    );
}

export default Ciudades;