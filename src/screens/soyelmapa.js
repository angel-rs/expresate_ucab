import React, { Component } from 'react';
import { View, StyleSheet } from 'react-native';
import { Constants, MapView } from 'expo';

export default class App extends Component {
  state = {
    mapRegion: {
      latitude: 8.296761,
      longitude: -62.711517000000015,
      latitudeDelta: 0.0000076,
      longitudeDelta: 0.0000076,
    },
  };

  _handleMapRegionChange = mapRegion => {
    this.setState({ mapRegion });
  };

  render() {
    return (
      <View>
        <MapView
          style={{ alignSelf: 'stretch', height: 612 }}
          region={this.state.mapRegion}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    //paddingTop: Constants.statusBarHeight,
    backgroundColor: '#ecf0f1',
  },
});
