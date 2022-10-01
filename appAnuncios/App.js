import React, { Component } from 'react';
import { View, StyleSheet, Text, ScrollView,Image } from 'react-native';
 
class App extends Component{
 
  render(){
    return(
      <View style={styles.container}>
        <Text style={styles.h1}>{'Anúncios'}</Text>
        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
        
        <View style={styles.card}><Image
          source={{ uri: 'https://cdn.shopify.com/s/files/1/0264/4957/6017/products/purple_3b1e1edc-db1c-456d-a587-b947be66d9c9_1200x1200.png?v=1632120768'}}
           style={styles.img}
        />
        <Text style={styles.nome}>{'Vape - Dot Mod'}</Text>
        <Text style={styles.valor}>{'R$ 400,00'}</Text>
        </View>
        <View style={styles.card}><Image
          source={{ uri: 'https://d1r6yjixh9u0er.cloudfront.net/Custom/Content/Products/27/08/2708_smartphone-xiaomi-redmi-note-10s-tela-643-6gb128gb-c00312_m1_637556244286924609.png'}}
           style={styles.img}
        />
        <Text style={styles.nome}>{'Redmi Note 10S'}</Text>
        <Text style={styles.valor}>{'R$ 2,759,00'}</Text>
        </View>
        <View style={styles.card}><Image
          source={{ uri: 'https://s2.glbimg.com/qPgH_oQBUw8Vj9pePfLbEDTpRUM=/0x0:695x473/984x0/smart/filters:strip_icc()/i.s3.glbimg.com/v1/AUTH_08fbf48bc0524877943fe86e43087e7a/internal_photos/bs/2021/v/e/rocTlgS6C3OtCNiggYkA/2015-06-10-laptop-xuxa-usar.jpg'}}
           style={styles.img}
        />
        <Text style={styles.nome}>{'Laptop Xuxa'}</Text>
        <Text style={styles.valor}>{'R$ 167,00'}</Text>
        </View>
        <View style={styles.card}><Image
          source={{ uri: 'https://conteudo.imguol.com.br/c/noticias/2e/2019/06/14/atomos-compoem-toda-a-materia-que-existe-mas-eles-tem-de-conviver-no-universo-com-a-antimateria-1560529353025_v2_900x506.jpg.webp'}}
           style={styles.img}
        />
        <Text style={styles.nome}>{'Antimatéria'}</Text>
        <Text style={styles.valorAnti}>{'R$ 18.600.000.000.000'}</Text>
        </View>
          
        </ScrollView>
      </View>
    )
  }
}
 
const styles = StyleSheet.create({
  container:{
    marginTop:80,
    flex: 1
  },
  h1:{
    fontSize:50,
    textAlign: 'center',
    marginBottom:30
  },
  nome:{
    fontSize:20,
    textAlign: 'center',
    marginBottom:30
  },
  valor:{
    fontSize:16,
    textAlign: 'center',
  },
  valorAnti:{
    fontSize:14,
    textAlign: 'center',
  },
  img:{
    width: 150, 
    height: 150, 
    alignSelf: 'center', 
    marginTop:10,
    marginBottom:10
},
  card:{
    height: 250,
    width: 160,
  }
})

 
export default App;