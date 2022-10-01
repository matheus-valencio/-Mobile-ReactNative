import React, { Component } from 'react';
import { View, StyleSheet, FlatList, Text } from 'react-native';
 
class App extends Component{
 
  constructor(props) {
    super(props);
    this.state = {
      feed:[
        {id: 1, vaga: 'Estagiário de Informática (ti)', salario: "R$ 924", descricao: 'O Notre Dame é uma instituição de Ensino tradicional e conceituada, localizada no bairro de Ipanema, na Zona Sul do Rio de Janeiro. Todos nossos estagiários são vinculados mediante contrato através da NUBE. Estamos com vaga aberta no período de 10:00 às 16:15, de segunda a sexta.', contato: '(21) 2227-9200'},
        {id: 2, vaga: 'Técnico de Informática I', salario: "a combinar", descricao: 'Atuar com suporte técnico em Hardware e Software para usuários internos, presencial e remoto;\n Realizar atendimentos de chamados via sistema, telefone, e-mail;\n Suporte e manutenção de Hardware em Notebooks e Desktops;', contato: '(41) 3218-7700'},
        {id: 3, vaga: 'Analista de TI Sênior', salario: "a combinar", descricao: 'Buscamos pessoas obstinadas pela melhoria continua com forte capacidade de integração de dados utilizando as ferramentas Zabbix, Grafana e Phyton.', contato: '(64) 3403-0871'},
      ]
    }
  }
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.h1}>{'Vagas'}</Text>
        <FlatList 
        data={this.state.feed}
        keyExtractor={(item) => item.id}
        renderItem={ ({item}) => <Vagas data={item}/>}
        />
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    flex: 1,
    padding: 10,
  },
  areaVagas:{
    borderColor: '#cccccc',
    borderWidth: 1,
    height: 280,
    marginBottom: 15,
    marginTop: 15,
    padding:20
  },
  vaga:{
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
  },
 salario:{
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
  },
  descricao:{
    color: 'black',
    fontSize: 15,
    textAlign: 'left',
  },
  contato:{
    color: 'black',
    fontSize: 20,
    textAlign: 'left',
  },
  h1:{
    fontSize:50,
    textAlign: 'center',
    marginBottom:30,
    marginTop:30,
  },
 
})
 
export default App;
 
class Vagas extends Component{
  render(){
    return(
      <View style={styles.areaVagas}>
        <Text style={styles.vaga}>{this.props.data.vaga} </Text>
        <Text style={styles.salario}> Salário: {this.props.data.salario} </Text>
        <Text style={styles.descricao}> Descrição: {this.props.data.descricao} </Text>
        <Text style={styles.contato}> Contato: {this.props.data.contato} </Text>
      </View>
    );
  }
}
