import React from 'react';
import {Text, StyleSheet, View,Button} from 'react-native';


const Ciudades= ({navigation, route}, resultado) => {

    const {name, main}=resultado;
 
  
  //grados Kelvin
  const kelvin = 273.15;


  console.log(resultado);
  const visitarNuevaCiudad = () =>{
        navigation.navigate('NuevaCiudad')
    }
  return (
      
    <View style={styles.clima}>
        {(!name) ?(<><Text>Desde Ciudades</Text> 
            <Button
                    title='Añadir nueva ciudad'
                    onPress={ () => visitarNuevaCiudad()}
            /></>):(
            <>
                <Text style={[styles.texto, styles.actual]} >{ parseInt(main.temp - kelvin) }
                <Text style={styles.temperatura}>
                &#x2103;
                </Text>
                <Image 
                style={{width:66,height:58}}
                source={{uri: `http://openwheathermap.org/img/w/${resultado.weather[0].icon}.png`}}
                
                />
                </Text>
            <View style={styles.temperaturas}>
            <Text style = {styles.temperatura}> Min {' '}
            <Text style={styles.texto }>
                {parseInt(main.temp_min - kelvin)}  &#x2103;
            </Text>
            </Text>
            <Text style = {styles.temperatura} >Max{' '}
            <Text style={styles.texto}>
                {parseInt(main.temp_max - kelvin)}  &#x2103;
            </Text>

            </Text>
        
            </View></> )
            
        }
    
      
    
    </View>
  );
};

const styles = StyleSheet.create({
  clima:{
    marginBottom:20,

  },
  texto:{
    color:'#FFF',
    fontSize:20,
    textAlign: 'center',
    marginRight:20,
  },
  actual:{
    fontSize:80,
    marginRight:0,
    fontWeight:'bold',
    textAlign: 'center',
    justifyContent:'center'

  },
  temperatura:{
    fontSize:22,
    fontWeight:'bold',
    

  },  
  temperaturas:{
    flexDirection :'row',
    justifyContent:'center'
  }
});

export default Ciudades;