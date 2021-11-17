import React from 'react';
import {Text, StyleSheet, View,TextInput,TouchableHighlight} from 'react-native';


const NuevaCiudad = () => {
    return (
        //añadir componente formulario o crear formulario aqui
        <>
        <TextInput>Pais</TextInput>
        <TextInput>Ciudad</TextInput>
        <TouchableHighlight>
            <Text>Añadir</Text>
        </TouchableHighlight>
        </>
       
    );
}

export default NuevaCiudad;