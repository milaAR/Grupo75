
import React,{useState, useEffect} from 'react';
import {Text, StyleSheet, View,TextInput,TouchableWithoutFeedback,Button,Alert} from 'react-native';

const NuevaCiudad = ({navigation,route}) => {

   const [busqueda, setBusqueda] = useState({
    ciudad:' ',
    pais:' ',
  })
    const {ciudad, pais} = busqueda;
  const [consultar, setConsultar] = useState(false);
  const [resultado, setResultado] = useState ({});

  const consultarClima = () => {
    if (pais.trim() === ''|| ciudad.trim() === ''){
      mostrarAlertaForm();
      return;
    }
    //consultar la api
    setConsultar(true);
  }

  const mostrarAlertaForm = () => {
    Alert.alert(
      'Error',
      'Agrega una ciuda y pais para la busqueda',
      [{text: 'Entendido'}]
    )
  };

  useEffect(() => {
    
    const consultarClima = async () =>{
   
        if(consultar){
        const appId = 'c483af8115f8934ea9d7dd7bbccb6256';
        const url = `http://api.openweathermap.org/data/2.5/weather?q=${ciudad},${pais}&appid=${appId}`

        try {
          const respuesta = await fetch(url);
          const resultado = await respuesta.json();
          setResultado(resultado);
          setConsultar(false);
        const kelvin =273.15;
          const {main}=resultado;
          const actual =main.temp - kelvin;

        }catch (error){
          mostrarAlerta();
        }
    }
    }
    consultarClima();
  }, [consultar]);

    const mostrarAlerta = () => {
      Alert.alert(
        'Error',
        'No hay resultados, intenta con otra ciudad o pais',
        [{text: 'OK'}]
      )
  }


    const visitarMapa = () =>{
        navigation.navigate('Mapa')
    }
     const visitarCiudades = () =>{
        navigation.navigate('Ciudades', resultado)
    }

    return (
        <View>
        <TextInput
            value={pais}
            onChangeText={ pais => setBusqueda ({...busqueda, pais})}
            placeholder="Pais"
            placeholderTextColor="#666"
        />
        <TextInput
            value={ciudad}
            onChangeText={ ciudad => setBusqueda ({...busqueda, ciudad})}
            placeholder="Ciudad"
            placeholderTextColor="#666"
        />
        <Button
            title='Añadir'
            onPress={()=> consultarClima()}
        />
      
        
        <Button
            title='Ver en Mapa'
            onPress={()=>visitarMapa()}
        />
        <Button
            title='Mis ciudades'
            onPress={()=>visitarCiudades()}
        />

        </View>
       
    );
}

export default NuevaCiudad;