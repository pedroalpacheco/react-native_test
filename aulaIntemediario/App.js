import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default class App extends React.Component {
  render() {
    return (
      <View >
      <View style={styles.header}>
      <Text style={styles.menu}>O Sistema</Text>

      </View>
        <ScrollView pagingEnable={true}>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>
          <View style={styles.quadrado1}></View>
          <View style={styles.quadrado2}></View>

        </ScrollView>
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
  quadrado1:{
    backgroundColor:'yellow',
    height:200

  },
  quadrado2:{
    backgroundColor:'white',
    height:300

  },
  header:{
    backgroundColor:'blue',
    height:100
  },
  menu:{
    flex:1,
    alignItems:'center',
    borderWidth: 1,
    fontSize: 30,
  }
});
