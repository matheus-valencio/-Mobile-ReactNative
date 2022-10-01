import React, { Component } from 'react';
import { View, StyleSheet,Button, Text, Switch,TextInput} from 'react-native';
import { styles } from './styles';
import {Picker} from '@react-native-picker/picker';
import Slider from '@react-native-community/slider';

export default class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      inputSexo: "Masculino",
      inputEscolaridade: "Sem Escolaridade",
      inputLimite: 0,
      inputNome:"",
      inputIdade:0,
      inputBrasileiro:false,
      nome:"",
      brasileiro:"",
      idade:"",
      sexo: "",
      escolaridade: "",
      limite: "",

    };
    this.confirmar = this.confirmar.bind(this);
  }

  confirmar(){
    if(this.state.inputBrasileiro){
      this.setState({brasileiro: "Sim"});
    }else{
      this.setState({brasileiro: "Não"});
    }
    this.setState({
      nome: this.state.inputNome,
      idade: this.state.inputIdade,
      sexo: this.state.inputSexo,
      escolaridade: this.state.inputEscolaridade,
      limite: this.state.inputLimite,
  });
  }
 
 render(){
 
  return (
    <View style={styles.container}>

      <Text style={styles.h1}>Abertura de Conta</Text>

      <Text style={styles.texto}>Nome:
      </Text>
      <TextInput
      style={styles.input}
      placeholder="ex. Matheus"
      placeholderTextColor="grey"
      onChangeText={(value) => this.setState({inputNome: value})}
    />
      
      
      <Text style={styles.texto}>Idade:
      </Text>
      <TextInput
      style={styles.input}
      placeholder="ex. 28"
      keyboardType='numeric'
      placeholderTextColor="grey"
      onChangeText={(value) => this.setState({inputIdade: value})}
    />
      
      
      <Text style={styles.texto}>Sexo:
      </Text>
      <Picker
      style={{fontSize:25, color:'white',width:250}}
      selectedValue={this.state.inputSexo}
      onValueChange={ (itemValue) => this.setState({inputSexo: itemValue}) }
      >
        <Picker.Item value={'Masculino'} label="Masculino" />
        <Picker.Item value={'Feminino'} label="Feminino" />
      </Picker>
    
      
      
      <Text style={styles.texto}>Escolaridade:
      </Text>
      <Picker
      style={{fontSize:25, color:'white',width:200}}
      selectedValue={this.state.inputEscolaridade}
      onValueChange={ (itemValue) => this.setState({inputEscolaridade: itemValue}) }
      >
        <Picker.Item value={"Sem Escolaridade"} label="Sem Escolaridade" />
        <Picker.Item value={"Ensino Fundamental"} label="Ensino Fundamental" />
        <Picker.Item value={"Ensino Médio"} label="Ensino Médio" />
        <Picker.Item value={"Ensino Superior"} label="Ensino Superior" />
      </Picker>
   
      
      <Text style={styles.texto}>Limite:
      </Text>
      <Slider
      style={{width:250}}
      minimumValue={0}
      maximumValue={1000}
      onValueChange={ (valorSelecionado) => this.setState({inputLimite: valorSelecionado})}
      value={this.state.inputLimite}
      step={1}
      minimumTrackTintColor='green'
      maximumTrackTintColor='white'
      thumbTintColor='blue'
    />

      <Text style={{textAlign: 'center', fontSize: 30, color:'white'}}>
      {this.state.inputLimite.toFixed(0)}
      </Text>

        
      <Text style={styles.texto}>Brasileiro:
      </Text>
      <Switch 
      style={{width:50}}
      value={this.state.inputBrasileiro}
      onValueChange={ (valorSwitch) => this.setState({inputBrasileiro: valorSwitch})}
      />
    
      <Button title="Confirmar" onPress={this.confirmar}/>
     
      <Text style={styles.texto}>
        Dados Informados:
      </Text>
      <Text style={{fontSize: 20}}>{'Nome: ' + this.state.nome}</Text>
      <Text style={{fontSize: 20}}>{'Idade: ' + this.state.idade}</Text>
      <Text style={{fontSize: 20}}>{'Sexo: ' + this.state.sexo}</Text>
      <Text style={{fontSize: 20}}>{'Escolaridade: ' + this.state.escolaridade}</Text>
      <Text style={{fontSize: 20}}>{'Limite: ' + this.state.limite}</Text>
      <Text style={{fontSize: 20}}>{'Brasileiro: ' + this.state.brasileiro}</Text>

      
    </View>
   );
 }
}

