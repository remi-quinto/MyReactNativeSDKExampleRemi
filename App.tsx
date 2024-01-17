/* eslint-disable prettier/prettier */
/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {
  StyleSheet,
  Text,
  View,
} from 'react-native';

import { HelloWorldComponent } from './lib/HelloWorldComponent';

function App(): React.JSX.Element {
  return (
    <View style={styles.container}>
      <Text style={{ ...styles.helloWorldText }}>Hello, World!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  helloWorldText: {
    fontSize: 24,
    fontWeight: '600',
  },
});

export default App;
