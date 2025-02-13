import * as React from 'react';
import { SafeAreaView,Text, View, StyleSheet, StatusBar, TextInput, TouchableOpacity } from "react-native";


import colors from "@/assets/styles/colors";
import fonts from "@/assets/styles/fonts";
import { Button } from '@/components/button';

export default function Welcome() {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.top_green}/>

      <View style={styles.topgrade}>

        <Text style={styles.title}>Bem vindo</Text>

        <View style={styles.inputsBox}>
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={styles.inputs}/>

          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.inputs}/>
        </View>
        
        <View style={styles.button}>
          <TouchableOpacity 
            activeOpacity={0.7}
          >
            <Button title='Login'/>
          </TouchableOpacity>
        </View>

        <Text style={styles.bottomlabel}>Criar nova Conta</Text>
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
    fontSize:14,
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
