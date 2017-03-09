import React, {Component} from 'react';
import {
  Navigator,
  AsyncStorage
} from 'react-native';
import Calculator from './calculator';
import CustomNavBar from './customNavBar';
import Settings from './Settings';

export default class PowerRanger extends Component {
  constructor(props){
    super(props);
    this.state = {
      sceneTransition: ''
    }
  }

  renderScene(route) {
    switch(route.id){
      case 'CalculatorPage':
        return <Calculator/>
        break;
      case 'SettingPage':
        return <Settings/>
        break;
    }
  }


  async getSceneTransition() {
    try{
      let sceneTransitionValue = await AsyncStorage.getItem('SCENE_SELECTED');
      this.setState({
        sceneTransition: sceneTransitionValue
      })
    }catch(error){
      console.log('hmmmm, something went wrong when get data ...'+ error)
    }
  }
  configureScene(route, routeStack){
    this.getSceneTransition();
    let selectValue = this.state.sceneTransition;
    if(!selectValue){
      return Navigator.SceneConfigs.FloatFromRight;
    }
    else {
      return Navigator.SceneConfigs[selectValue];
    }

  }
  componentDidMount(){
    this.getSceneTransition();
  }


  render() {
    return(
      <Navigator
        initialRoute={{id: 'CalculatorPage'}}
        renderScene={this.renderScene.bind(this)}
        configureScene={(route) => {
          if(route.sceneConfig) {
            return route.sceneConfig;
          }
          return Navigator.SceneConfigs.FloatFromRight;
        }}
        navigationBar={CustomNavBar}
        configureScene={this.configureScene.bind(this)}
      />
    )
  }
}
