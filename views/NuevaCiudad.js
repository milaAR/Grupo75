import React,{useState}from 'react';
import {Text, StyleSheet, View,TextInput,TouchableWhithoutFeedback} from 'react-native';


const NuevaCiudad = () => {

    const [busqueda, guardarBusqueda]=useState({
        ciudad='',
        pais=''
    })

    return (
        //añadir componente formulario o crear formulario aqui
        <>
            <View>
                <View>
                    <TextInput 
                    placeholder="Pais"
                    onChangeText={pais => guardarBusqueda({...busqueda,pais})}
                    value={pais}/>
                </View>
            <View>
                <TextInput 
                placeholder="Ciudad"
                onChangeText={ciudad => guardarBusqueda({...busqueda,ciudad})}
                value={ciudad}/>
            </View>
            <TouchableWhithoutFeedback>
                <View>
                    <Text>Añadir</Text>
                </View>
            </TouchableWhithoutFeedback>
            </View>
        </>
       
    );
}

export default NuevaCiudad;