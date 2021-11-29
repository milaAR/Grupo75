import 'react-native-gesture-handler';
import React from 'react';
import {Text, View} from 'react-native';

//react navigation

import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

//import Views
import Inicio from './views/Inicio';
import Ciudades from './views/Ciudades';
import Nosotros from './views/Nosotros';
import NuevaCiudad from './views/NuevaCiudad';
import Mapa from './views/Mapa';

const Stack = createStackNavigator();

const App = () => {
  return (
    <>
      <NavigationContainer>
        <Stack.Navigator initialRouteName="Inicio">
          <Stack.Screen name="Inicio" component={Inicio} />
          <Stack.Screen name="Ciudades" component={Ciudades} />
          <Stack.Screen name="Nosotros" component={Nosotros} />
          <Stack.Screen name="NuevaCiudad" component={NuevaCiudad} />
          <Stack.Screen name="Mapa" component={Mapa} />
        </Stack.Navigator>
      </NavigationContainer>
    </>
  );
};

export default App;
