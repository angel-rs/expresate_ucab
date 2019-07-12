import React, { Component } from 'react';
import {
  View,
  Text,
  StyleSheet,
} from 'react-native';
import { Ionicons, FontAwesome } from '@expo/vector-icons';

export default class LikesScreen extends Component {
  static navigationOptions = {
    title: 'Buscar',
    headerStyle: {
      fontWeight: 'bold',
      fontSize: 18,
    },
  };

  render() {
    return (
      <View style={styles.container}>
        <FontAwesome name="search" size={100} color='rgba(0, 9, 0, 0.12)'/>
        <Text style={{fontWeight: 'bold', color:'rgba(0, 9, 0, 0.22)' }}>No hay nada aun...¡Regresa mas tarde!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
