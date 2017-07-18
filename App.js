import React from 'react';
// import { BleManager } from 'react-native-ble-plx'
import BleManager from 'react-native-ble-manager';
import { StyleSheet, Text, View } from 'react-native';

const BleManagerModule = NativeModules.BleManager;
const bleManagerEmitter = new NativeEventEmitter(BleManagerModule);

export default class App extends React.Component {
  constructor(props) {
    super(props);
    // this.manager = new BleManager();
    // console.warn(this.manager);
  }
  render() {
    return (
      <View style={styles.container}>
        <Text>Open up App.js!</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
