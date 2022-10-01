import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'rgba(0,0,0,0.5)',
      padding: 30,
      
    },
    row:{
      flexDirection:'row'
    },
    h1:{
      fontSize:25, 
      color:'white',
      textAlign:'center'
    },
    texto:{
      fontSize:20, 
      color:'white'
    },
    resultado:{
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      marginTop: 30,
    },
    input:{
        height: 45,
        borderWidth: 1,
        width: 200,
        borderColor: 'white',
        margin: 10,
        fontSize: 20,
        padding: 10,
        color: 'white',
      },
    img:{
      width: 350, 
      height: 350, 
      alignSelf: 'center', 
      marginTop:10,
      marginBottom:10
  },
  teste:{
    color: "white"
  }
  
  });
 
  export {styles};