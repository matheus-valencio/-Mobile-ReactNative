import {StyleSheet} from 'react-native';
 
const styles = StyleSheet.create({
    container:{
      flex: 1,
      backgroundColor:'rgba(0,0,0,0.9)',
      padding: 30,
    },
    texto:{
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      marginTop: 30,
      marginBottom: 30,
    },
    resultado:{
      textAlign: 'center',
      fontSize: 30,
      color: 'white',
      marginTop: 30,
      marginBottom: 30,
    },
    input:{
        height: 45,
        borderWidth: 1,
        borderColor: 'white',
        margin: 10,
        fontSize: 20,
        padding: 10,
        color: 'white',
      },
    img:{
      width: 450, 
      height: 250, 
      alignSelf: 'center', 
      marginTop:60,
      marginBottom:30
  }
  
  });
 
  export {styles};