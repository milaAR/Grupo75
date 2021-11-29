import React from 'react';
import {Text, StyleSheet, View} from 'react-native';

const Nosotros = () => {
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

export default Nosotros;
