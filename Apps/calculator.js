import React, { Component } from 'react';
import {
  Text,
  View,
  TextInput,
  Button,
  StyleSheet
} from 'react-native';

import SegmentedControlTab from 'react-native-segmented-control-tab';

export default class Cal extends Component {
  constructor(props){
    super(props);
    this.state = {
      segmentSelectedIndex : 0,
      billAmount: 0,
      result: 0,
      tipAmount: 0,
      segmentControl: 0.1
    }
  }
  handleSegmentChange(index){
    var percent = this.segmentValues()[index];
    percen = parseFloat(percent)/100;
    this.setState({
      segmentSelectedIndex : index,
      segmentControl: percen
    })

    this.handleBillAmountChange(this.state.billAmount, index);
  }
  handleBillAmountChange(bill, index){
    this.setState({
      billAmount: bill,
    })
    if(!index && index != 0){
      index = this.state.segmentSelectedIndex;
    }
    if(bill == ""){
      this.setState({
        result: 0,
        tipAmount: 0,
        billAmount: 0

      })
    }
    else{
      bill = parseFloat(bill);
      var percent = this.segmentValues()[index]; // 10%, 15%, 50%
      percen = parseFloat(percent)/100; // 0.1 0.5
      var result = bill + (bill * percen);
      this.setState({
        result: result,
        tipAmount: (bill * percen).toFixed(2),
      })
    }
  }
  segmentValues(){
    return(
      ["10%", "15%", "50%"]
    )
  }

  render() {
    return(
      <View>

        <View>
          <Text style={styles.h1}>Tip Calculator</Text>
        </View>

        <View>
          <Text style={styles.h2}>Bill Amount</Text>
          <TextInput
            keyboardType = 'numeric'
            maxLength = {10}
            onChangeText = {(billAmount) => this.handleBillAmountChange(billAmount)}
            placeholder = "Type here to calculate"/>


        </View>

        <View>
          <Text style={styles.h2}>Tip amount : {this.state.tipAmount}</Text>
        </View>

        <View>
          <SegmentedControlTab
            values={this.segmentValues()}
            onTabPress= {index => this.handleSegmentChange(index)}
          />
        </View>

        <View>
          <Text style={styles.h3}>Bill input: {this.state.billAmount}</Text>
          <Text style={styles.h3}>Tip amount: {this.state.tipAmount}</Text>
          <Text style={styles.h3}>Segment control: {this.state.segmentControl}</Text>
        </View>

        <View>
          <Text style={[styles.text, styles.h3]}>{"\n"}Result: {this.state.result}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  h1: {
    fontWeight: 'bold',
    fontSize: 30,
    textAlign: 'center'
  },
  h2: {
    fontSize: 20
  },
  h3: {
    fontSize: 15
  },
  text: {
    fontWeight: 'bold',
  },
})
