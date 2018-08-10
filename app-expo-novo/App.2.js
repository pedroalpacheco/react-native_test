import React, { Component } from 'react';
import { View, Text, StyleSheet, Button, Image} from 'react-native';

class Imagem extends Component {
  render() {

    let imagem = {
      uri: 'https://i1.wp.com/gamelogia.com.br/wp-content/uploads/2016/11/' + this.props.nome + '.jpg'
    };

    return (
      <Image source={imagem} style={{ width: 300, height: 300 }} />
    );
  }
}

export default class appexponovo extends Component {

  somar(n1, n2) {
    return n1 + n2;
  }

  render() {

    let nome = "Pedro Pacheco"
   

    return (

      <View>
        <Text style={styles.texto}>Meu nome é {nome} e a soma de 2 + 2 é {this.somar(2, 2)}</Text>
        
        

        <Button title="Aperte" onPress={() => {
          alert("Me apertou!");

        }} />

        <Imagem nome='gamer'/>

      </View>

    );
  }
}
const styles = StyleSheet.create({
  texto: {
    fontSize: 30
  }
});