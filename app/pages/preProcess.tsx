import React, { useEffect, useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

import colors from "@/assets/styles/colors";
import { Button } from "@/components/button";
//import { connect,brokerUrl } from "@/server/connection_mqtt";

import { useNavigation } from "@react-navigation/native";

export default function PreProcess(){

    const [status, setStatus] = useState(false);
    //const [ip, setip] = useState(brokerUrl);

    useEffect(()=>{
       // setStatus(connect());
    },[])

    const navigation = useNavigation();

    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.header}>
                <Text style={styles.title}>Novo teste</Text>
            </View>

            <View style={styles.inputsBox}>
                    <Text style={styles.label}>Título do teste:</Text>
                    <TextInput style={styles.inputs}/>
            </View>

            <Text style={styles.label}>Quantidade de módulos:</Text>    
            
            <View style={styles.inputslabel}>
                <View style={styles.modulesBox}><Text style={styles.moduleText}>1</Text></View>
                <View style={styles.modulesBox}><Text style={styles.moduleText}>2</Text></View>
                <View style={styles.modulesBox}><Text style={styles.moduleText}>3</Text></View>
            </View>

           {/* <View style={styles.boxBroker}>
                <Text style={styles.labelbroker}>Verificando conexão com o Broker: {ip} </Text>
                {status==true ? <Entypo name="icloud" style={styles.icontrue}/> : <Entypo name="icloud" style={styles.iconfalse}/>}
                {status==true ? <Text style={styles.labelbroker}>Conectado!</Text> :  <Text style={styles.labelbroker}>Não Conectado!</Text>}
                
            </View>*/}

            <TouchableOpacity 
            activeOpacity={0.7} 
            style={styles.button} 
            onPress={()=>navigation.navigate('TestScreen')}
            >
                <Button title="Iniciar teste"/>
            </TouchableOpacity>

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
    },
    header:{
        justifyContent: "center",
        alignItems: "center",
        width:'100%',
        
        height:100,
        backgroundColor: colors.top_green,
        
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 5 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation:20,
        borderBottomEndRadius:25,
        borderBottomStartRadius:25,
    },
    title:{
        fontWeight:'bold',
        fontSize:34,
    },
     inputsBox:{
          alignItems: "flex-start",
          justifyContent:"space-between",
          alignSelf:'center',
          marginTop: 50,
          
    },
    inputslabel:{
        flexDirection:'row',
        justifyContent:'flex-start',
        width:'80%'
    },
    labelbroker:{
        marginBottom:15,
        textAlign: 'center',
        fontSize:14,
        fontWeight:'bold'
    },
    boxBroker:{
        marginTop:40,
    },
    modulesBox:{
        width:93,
        height:89,
        borderRadius:25,
        backgroundColor:colors.button_green,
        marginRight:15,

        alignItems:'center',
        justifyContent:'center',

        shadowColor: '#000',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation:10,
    },
    moduleText:{
        fontSize:32,
        color:colors.white,
        fontWeight:'bold'
    },
    label:{
        marginBottom:15,
        textAlign: 'left',
        fontSize:14,
        marginTop:20
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
        marginTop:30
    },
    icontrue:{
        fontSize:64,
        textAlign:'center',
        color:colors.button_green
    },
    iconfalse:{
        fontSize:64,
        textAlign:'center',
        color:colors.red_alert
    }
})