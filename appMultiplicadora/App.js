import React, { Component } from 'react';
import { View, Text, Button,TextInput} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      resultado: 0
    };
    this.multiplicar = this.multiplicar.bind(this);
    this.getX = this.getX.bind(this);
    this.getY = this.getY.bind(this);
  }
  getX(valor){
    this.setState({
      x: valor
    });
  }
  getY(valor){
    this.setState({
      y: valor
    });
  }
  multiplicar(){
    this.setState({
      resultado: this.state.x * this.state.y
    });
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.texto}> {'Multiplicador de Números'} </Text>  
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Digite o primeiro nº"
        placeholderTextColor="white"
        onChangeText={this.getX}
      />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Digite o segundo nº"
        placeholderTextColor="white"
        onChangeText={this.getY}
      />  
      <Button title="Calcular" onPress={this.multiplicar} />
      <Text style={styles.resultado}> {'Resultado: ' + this.state.resultado} </Text>  
      </View>
    );
  }
}
 
export default App;