import React, { Component } from 'react';
import { View, Text, Image, Linking,StyleSheet} from 'react-native';
 
class App extends Component{
  render(){
  
    return(
      <View style={styles.container}>

        <Image
          source={require('./assets/matheus.png')}
          style={styles.img}
        />
        <Text style={styles.h1}>{'Dados Pessoais:'}</Text>
        <Text style={styles.h2}>{'Matheus Valencio Fonseca'}</Text>
        <Text style={styles.h2}>{'28 Anos'}</Text>
        <Text style={styles.h1}>{'Formação:'}</Text>
        <Text style={styles.h2}>{'Fatec Baixada Santista Rubens Lara'}</Text>
        <Text style={styles.h3}>{'Tecnólogo, Sistemas para Internet'}</Text>
        <Text style={styles.h4}>{'Fevereiro de 2020 - Dezembro 2022'}</Text>
        <Text style={styles.h1}>{'Experiência:'}</Text>
        <Text style={styles.h2}>{'Estagiário de TI'}</Text>
        <Text style={styles.h3}>{'Meta Sistemas e Assessoria Ltda'}</Text>
        <Text style={styles.h4}>{'Estágio fev de 2022 - o momento'}</Text>
        <Text style={styles.h4}>{'Santos, São Paulo, Brazil'}</Text>
        <Text style={styles.h1}>{'Projetos:'}</Text>
        <Text style={styles.hyperlink} onPress={() => { 
            Linking.openURL('https://github.com/matheus-valencio'); 
          }}> 
          GitHub 
        </Text> 
      </View>
    )
  }
}

const styles = StyleSheet.create({

  container: {
    backgroundColor: 'rgba(0, 0, 0, 0.9)',
    flex: 1
  },
  img:{
    width: 250, 
    height: 250, 
    alignSelf: 'center', 
    marginTop:60,
    marginBottom:30
  },
  h1:{
    fontSize: 30,
    marginLeft: 8,
    marginBottom:6,
    marginTop:8,
    color: 'white'
  },
  h2:{
   fontSize:18,
   marginLeft: 8,
   color: 'white'
  },
  h3:{
    fontSize: 16,
    marginLeft: 8,
    color: 'white'
  },
  h4:{
    fontSize: 14,
    marginLeft: 8,
    color: 'white'
  },
  hyperlink: {
    color: 'blue',
    fontSize: 25,
    marginLeft: 8
  },
});
 
export default App;