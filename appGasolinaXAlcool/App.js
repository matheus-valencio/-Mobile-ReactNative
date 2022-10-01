import React, { Component } from 'react';
import { View, Text, Button,TextInput,Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      resultado:""
    };
    this.calcular = this.calcular.bind(this);
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
  calcular(){
    if((this.state.x / this.state.y)>0.7){
      this.setState({
      resultado: "Gasolina é a melhor opção!"
    });
    }else{
      this.setState({
      resultado: "Álcool é a melhor opção!"
    });
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.texto}> {'Álcool ou Gasolina'} </Text>  
      <Image
          source={{ uri: 'https://complemento.veja.abril.com.br/economia/calculadora-combustivel/img/abre.jpg'}}
           style={styles.img}
        />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Preço do álcool"
        placeholderTextColor="white"
        onChangeText={this.getX}
      />
      
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Preço da gasolina"
        placeholderTextColor="white"
        onChangeText={this.getY}
      />  
      <Button title="Verificar" onPress={this.calcular} />
      <Text style={styles.resultado}> {'Resultado: ' + this.state.resultado} </Text>  
      </View>
    );
  }
}
 
export default App;