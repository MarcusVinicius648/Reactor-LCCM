import { useNavigation } from '@react-navigation/native';
import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import colors from "@/assets/styles/colors";
import { Button } from '@/components/button';


export default function Welcome() {

  const navigation = useNavigation();


  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.top_green}/>

      <View style={styles.topgrade}>

        <Text style={styles.title}>Bem vindo!</Text>

        <View style={styles.inputsBox}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={styles.inputs}/>

          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.inputs}/>
        </View>
        
        <View style={styles.button}>
          <TouchableOpacity 
            activeOpacity={0.7}
           onPress={()=>navigation.navigate("HomeScreen")}
          >
            <Button title='Login'/>
          </TouchableOpacity>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={() => navigation.navigate('CreateAccountScreen')}
        >
          <Text style={styles.bottomlabel}>Criar nova Conta</Text>
        </TouchableOpacity>
        <Text style={styles.forgotPass}>Esqueceu a senha?</Text>


      </View>
      

    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container:{
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
    backgroundColor: colors.top_green,
    borderBottomEndRadius:25,
    borderBottomStartRadius:25,
    
    shadowColor: '#000',
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation:10
  },
  topgrade:{
    justifyContent: "space-around",
    alignItems: "center",
    backgroundColor: colors.white,
    marginBottom:0,
  
    height: 480,
    width:662
  },
  title:{
    fontSize:40,
    fontWeight:'bold',
    alignContent: 'center',
    textAlign: 'center',
    //marginBottom:0,
  },
  inputsBox:{
    alignItems: "flex-start",
    justifyContent:"space-between",
  },
  label:{
    marginBottom:15,
    textAlign: 'left',
    fontSize:14,
  },
    inputs:{
      width:300,
      marginBottom:25,
      textAlign:'left',
      borderWidth:1,
      borderColor:colors.gray,
      borderRadius:10,
  },
  button:{
   alignContent:"center",
   justifyContent:"center",
   marginBottom: 20,
  },
  bottomlabel:{
    fontSize:17,
    fontWeight:'bold',
    alignContent: 'center',
    textAlign: 'center',
    marginTop: -10
  },
  forgotPass:{
    fontSize:14,
    color:colors.gray,
    fontWeight:'200',
    alignContent: 'center',
    textAlign: 'center',
    marginBottom:20,
    textDecorationLine: 'underline',
  }

})
