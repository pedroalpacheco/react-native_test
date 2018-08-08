import React, { Component } from 'react';
import { View,Text,StyleSheet } from 'react-native';

export default  class appexponovo extends Component {

  somar(n1,n2){
    return n1 + n2;
  }

  render(){

    let nome = "Pedro Pacheco"
    
    return(

      <View>
      <Text style={styles.texto}>Meu nome é {nome} e a soma de 2 + 2 é {this.somar(2, 2)}</Text>
      </View>

      );
  }
}
const styles = StyleSheet.create({
  texto:{
    fontSize:30
  }
});