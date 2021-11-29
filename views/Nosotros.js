import React from 'react';
import {Text, StyleSheet, View,Linking} from 'react-native';

const Nosotros = () => {
<<<<<<< HEAD
  return (
    <View>
      <Text style={styles.text}>Creadores</Text>
      <Text style={styles.text}>GitHub Repo</Text>
    </View>
  );
};
const styles = StyleSheet.create({
  text: {
    textAlign: 'center',
  },
});
=======

    const url="https://github.com/milaAR/Grupo75"
    return (
        <View>

        <Text style={styles.text}>Creadores</Text>
   
        <Text style={styles.textLink} onPress={()=> Linking.openURL(url)}>GitHub Repo</Text>

        </View>
    );
}
const styles = StyleSheet.create({
    textLink:{
        textAlign:'center',
        color:'blue'
    },
    text:{
        textAlign:'center',
    }
})
>>>>>>> wheather-api

export default Nosotros;
