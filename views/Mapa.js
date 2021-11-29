import React from 'react';
import MapView, {Marker} from 'react-native-maps';
import openMaps from 'react-native-open-maps';
import {Text, StyleSheet, View} from 'react-native';
import {Button} from 'react-native-paper';

export default function Mapa(props) {
  const {location, name, height} = props;

  const openAppMaps = () => {
    console.log('Opening maps...');

    openMaps({
      latitude: location.latitude,
      longitude: location.longitude,
      zoom: 19,
      query: name,
    });
  };

  return (
    <MapView
      style={{height: height, width: '100%'}}
      initialRegion={location}
      showsUserLocation={true}
      onPress={openAppMaps}>
      <Marker
        coordinate={{
          latitude: location.latitude,
          longitude: location.longitude,
        }}
      />
    </MapView>
  );
}
