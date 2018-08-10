import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';


export default class appexponovo extends Component {
  render() {
    return (

      <View style={{flex:1, flexDirection:'column', justifyContent:'center', alignItems:'center'}}>
      <View style={{width:50, height:50, backgroundColor:'blue'}}></View>
      <View style={{width:50, height:50, backgroundColor:'white'}}></View>
      <View style={{flex:1, height:50, backgroundColor:'white'}}><Text>Bandeira USA</Text></View>
      <View style={{width:50, height:50, backgroundColor:'red'}}></View>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  texto: {
    fontSize: 30
  }
});