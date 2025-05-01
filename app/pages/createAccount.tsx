import colors from "@/assets/styles/colors";
import { Button } from '@/components/button';
import { useNavigation } from "@react-navigation/native";
import * as React from 'react';
import { SafeAreaView, StatusBar, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";



export default function CreateAccount() {

  const navigation = useNavigation();

  return (

    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.top_green}/>

      <View style={styles.header}>
        <Text style={styles.title}>Crie seu cadastro</Text>
        <Text style={styles.subtitle}>Venha fazer parte da nossa comunidade</Text>
      </View>

       <View style={styles.inputsBox}>
          <Text style={styles.label}>Nome de Usuário:</Text>
          <TextInput style={styles.inputs}/>
      
          <Text style={styles.label}>E-mail:</Text>
          <TextInput style={styles.inputs}/>

          <Text style={styles.label}>Senha:</Text>
          <TextInput style={styles.inputs}/>
        </View>

        <TouchableOpacity
          activeOpacity={0.7}
          style={styles.containerbutton}
          onPress={()=>navigation.navigate("HomeScreen")}
        >
          <Button title="Cadastrar"/>
        </TouchableOpacity>

        <TouchableOpacity
          activeOpacity={0.7}
          onPress={()=>navigation.navigate("WelcomeScreen")}
        >
          <Text style={styles.backWelcome}>Já possui conta?</Text>
        </TouchableOpacity>
        
      
    </SafeAreaView>
  );
}
const styles =StyleSheet.create({
  container:{
    justifyContent: "center",
    alignItems: "center",
  },
  header:{
    justifyContent: "center",
    alignItems: "center",
    width:'100%',

    height:181,
    backgroundColor: colors.top_green,

    shadowColor: '#000',
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation:20
  },
  title:{
    fontWeight:'bold',
    fontSize:34,
  },
  subtitle:{
    fontWeight:'300',
    fontSize:17,
    marginTop:15
  },
   inputsBox:{
      alignItems: "flex-start",
      justifyContent:"space-between",
      alignSelf:'center',
      marginTop: 50,
      
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
    containerbutton:{
      marginTop: 50
    },
    backWelcome:{
      fontSize:17,
      fontWeight:'medium',
      color:colors.gray,
      textDecorationLine:'underline',

      marginTop:30
    }
})