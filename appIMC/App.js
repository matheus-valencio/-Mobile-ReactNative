import React, { Component } from 'react';
import { View, Text, Button,TextInput,Image} from 'react-native';
import { styles } from './styles';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      x: 0,
      y: 0,
      z: 0,
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

    if(this.state.x / (this.state.y*this.state.y)<18.5){
      this.setState({
      resultado: "Abaixo do peso!"
    });
    }else if(this.state.x / (this.state.y*this.state.y)>=18.5 && this.state.x / (this.state.y*this.state.y) < 24.9){
      this.setState({
      resultado: "Peso normal!"
    });
    }else if(this.state.x / (this.state.y*this.state.y)>25 && this.state.x / (this.state.y*this.state.y) < 29.9){
      this.setState({
      resultado: "Sobrepeso!"
    });
    }else if(this.state.x / (this.state.y*this.state.y)>30 && this.state.x / (this.state.y*this.state.y) < 34.9){
      this.setState({
      resultado: "Obesidade Grau I!"
    });
    }else if(this.state.x / (this.state.y*this.state.y)>35 && this.state.x / (this.state.y*this.state.y) < 39.9){
      this.setState({
      resultado: "Obesidade Grau II!"
    });
    }else if(this.state.x / (this.state.y*this.state.y)>39.9){
      this.setState({
      resultado: "Obesidade Grau III ou Mórbida!"
    });
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.texto}> {'Cálculo IMC'} </Text>  
      <Image
          source={{ uri: 'https://play-lh.googleusercontent.com/ouL1lfSP_CyUgb5OUvI51jG3cevMfulA1GZGtS63r3Xfa8STYiIxq6KiY3PkMc6PcTk'}}
           style={styles.img}
        />
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Peso"
        placeholderTextColor="white"
        onChangeText={this.getX}
      />
      
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        placeholder="Altura"
        placeholderTextColor="white"
        onChangeText={this.getY}
      />  
      <Button title="Verificar" onPress={this.calcular} />
      <Text style={styles.resultado}> {'Classificação: ' + this.state.resultado} </Text>  
      </View>
    );
  }
}
 
export default App;