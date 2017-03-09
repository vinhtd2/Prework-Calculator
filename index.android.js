/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Navigator,
  Button
} from 'react-native';
import Calculator from './Apps/calculator';
import Settings from './Apps/Settings';
import PowerRanger from './Apps/powerranger'

export default class PreworkCalculator extends Component {
  render() {
    return (
      <PowerRanger />

    );
  }
}

AppRegistry.registerComponent('PreworkCalculator', () => PreworkCalculator);
