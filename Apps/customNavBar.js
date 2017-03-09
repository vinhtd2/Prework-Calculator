import React, {Component} from 'react';
import {
  TouchableOpacity,
  Text,
  Appregistry,
  Navigator,
  StyleSheet

} from 'react-native';

var NavigationBarRouteMapper = {
  LeftButton: (route, navigator, index, navState) => {
    return
  },
  RightButton: (route, navigator, index, navState) => {
    if(route.id != 'CalculatorPage'){
      return (
        <TouchableOpacity  onPress={() => navigator.pop()}>
          <Text>Save</Text>
        </TouchableOpacity>
      );
    }
    else{
      return(
        <TouchableOpacity  onPress={() => navigator.push({id: 'SettingPage'})}>
          <Text>Setting</Text>
        </TouchableOpacity>
      );
    }
  },
  Title: (route, navigator, index, navState) => {
    return;
  },
}

module.exports = (
  <Navigator.NavigationBar
    routeMapper={NavigationBarRouteMapper} />
)
