import React, {Component} from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';

class Botao extends Component {

  constructor(props){
    super(props);
    this.state = {};
    this.styles = StyleSheet.create({
      botao:{
        width:250,
        height:50,
        borderWidth:2,
        borderColor:props.color,
        backgroundColor:'transparent',
        borderRadius:25

      },
      botaoArea:{
        flex:1,
        flexDirection:'row',
        justifyContent:'center',
        alignItems:'center'
      },
      botaoText:{
        color:props.color,
        fontSize:14,
        fontWeight:'bold',
      }
    });
  }

  render(){
    return(
      <TouchableOpacity style={this.styles.botao} onPress={this.props.onPress}>
        
        <View style={this.styles.botaoArea}>
          <Text style={this.styles.botaoText}>Quebrar biscoito</Text>
        </View>

      </TouchableOpacity>
    );
  }
}

export default class App extends React.Component {

  constructor(props){
    super(props);
    this.state = {texto:''};

    this.frases = ['O dinheiro faz homens ricos, o conhecimento faz homens sábios e a humildade faz grandes homens.',
  'Seja humilde para admitir seus erros, inteligente para aprender com eles e maduro para corrigi-los.',
'Corra o risco. Se der certo, felicidade. Se não, sabedoria.','A dor faz você mais forte, o medo faz você mais corajoso e a paciência faz você mais sábio.',
'A humildade é a parte mais bela da sabedoria.',];

    this.quebraBiscoito = this.quebraBiscoito.bind(this);
  }

  quebraBiscoito(){
    let s = this.state;

    let r = Math.floor(Math.random() * this.frases.length);

    s.texto = this.frases[r];
    this.setState(s);
  }

  render() {
    return (
      <View style={styles.container}>
      <Image source={require('./images/cookie.png')}/>

      <Text style={styles.texto}>"{this.state.texto}"</Text>

        <Botao color='#B59619' text="Quebrar biscoito" onPress={this.quebraBiscoito}/>
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
  texto:{
    fontSize:17,
    color:'#B59619',
    margin:30,
    fontStyle:'italic',
    textAlign:'center'
  }
});
