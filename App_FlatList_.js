/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */

import React, {Component} from 'react';
import {StyleSheet, Text, View, FlatList} from 'react-native';

constructor(props);{
  super(props);
  this.state = {
    flatData:[
      {key:1,nome:'Pedro',idade:'40'},
      {key:2,nome:'João',idade:'23'},
      {key:3,nome:'Fernanda',idade:'22'},
      {key:4,nome:'Joice',idade:'5'},
      {key:5,nome:'Carlos',idade:'62'},
      {key:6,nome:'Sérgio',idade:'14'},
      {key:7,nome:'Paulo',idade:'29'},
    ]
  }
}

flatRender(item);{
  return(
    <Text style={styles.flatItem}>{item.nome}, {item.idade}anos</Text>
  );
}

export default class App extends Component {
  render() {
    return (
      <View style={styles.body}>
        <Flatlist style={styles.flatList} data={this.state.flatData} renderItem={({item })=> this.flatRender(item)}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body:{
    paddingTop:20,
    //flex:1
  },
  flatItem:{
    fontSize:18,
    height:40,
    padding:10
  },
  flatList:{
    backgroundColor:'red',
    height:80
  }
});
