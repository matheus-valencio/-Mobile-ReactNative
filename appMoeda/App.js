import React, { Component } from 'react';
import { View, Text, Button,TextInput} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
 
class App extends Component{
  constructor(props){
    super(props);
    this.state = {
      resultado:0,
      valor:0,
      moeda1:1,
      moeda2:2
    };
    this.calcular = this.calcular.bind(this);
    this.getValor = this.getValor.bind(this);

  }
  getValor(valor){
    this.setState({valor:valor});
  }
  
  calcular(){
    if(this.state.moeda1 == 1 && this.state.moeda2 == 2){
    this.setState({resultado: (this.state.valor * 5.41)});
    }else if(this.state.moeda1 == 1 && this.state.moeda2 == 3){
      this.setState({resultado: (this.state.valor * 1.02)});
    }else if(this.state.moeda1 == 2 && this.state.moeda2 == 1){
      this.setState({resultado: (this.state.valor / 5.41)});
    }else if(this.state.moeda1 == 2 && this.state.moeda2 == 3){
      this.setState({resultado: (this.state.valor / 5.31)});
    }else if(this.state.moeda1 == 3 && this.state.moeda2 == 1){
      this.setState({resultado: (this.state.valor / 1.02)});
    }else if(this.state.moeda1 == 3 && this.state.moeda2 == 2){
      this.setState({resultado: (this.state.valor / 5.31)});
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
      <Text style={styles.texto}> {'Conversor de Moedas'} </Text>  
      <Text style={styles.texto}> {'Dólar, Real e Euro'} </Text>  
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.texto}> {'Valor:'} </Text>  
      <TextInput
        style={styles.input}
        keyboardType='numeric'
        onChangeText={this.getValor}
      />
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.texto}> {'De:'} </Text>  
      <Picker style={{marginTop:15,marginLeft:45,fontSize:25, color:'black',width:200,height:10,backgroundColor:"white"}} selectedValue={this.state.moeda1} 
      onValueChange={ (itemValue, itemIndex) => this.setState({moeda1: itemValue})}>
        <Picker.Item key={1} value={1} label="Dólar" />
        <Picker.Item key={2} value={2} label="Real" />
        <Picker.Item key={3} value={3} label="Euro" />
        
      </Picker>
      </View>
      <View style={{flexDirection: 'row'}}>
      <Text style={styles.texto}> {'Para:'} </Text>  
      <Picker style={{marginLeft:20,marginTop:15,marginBottom:15,fontSize:25, color:'black',width:200,height:10,backgroundColor:"white"}} selectedValue={this.state.moeda2} 
      onValueChange={ (itemValue, itemIndex) => this.setState({moeda2: itemValue})}>
        <Picker.Item key={1} value={1} label="Dólar" />
        <Picker.Item key={2} value={2} label="Real" />
        <Picker.Item key={3} value={3} label="Euro" />
        
      </Picker>
      </View>
      <Button title="Verificar" onPress={this.calcular} />
      <Text style={styles.resultado}> {'Resultado: ' + this.state.resultado.toFixed(2)} </Text>  
      </View>
    );
  }
}
 
export default App;