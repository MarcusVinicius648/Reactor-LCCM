import colors from "@/assets/styles/colors";
import React, { useState } from "react";
import { SafeAreaView, StyleSheet, Text, TextInput, TouchableOpacity, View } from "react-native";

//import { pubInfos } from "@/server/connection_mqtt";

import { Entypo } from "@expo/vector-icons";

export default function Test(){

    const [execution, setExecution] = useState(false);
    const [topic,setTopic] = useState('');
    const [tempMessage,setTempMessage] = useState('');

    const handleSendMessage = () =>{
       // pubInfos(topic,tempMessage)
    }

    return(
        <SafeAreaView style={styles.container}>
           <View style={styles.header}>
                <Text style={styles.title}>Teste</Text>
            </View>

            <View style={styles.inputsBox}>
                <Text style={styles.label}>Escolha a temperatura alvo que será passada ao sistema:</Text>
                <View style={styles.inputsBox1}>
                    <TextInput style={styles.inputs} placeholder="Temperatura setPoint" value={tempMessage} onChangeText={setTempMessage}/>
                    <TouchableOpacity activeOpacity={0.7} onPress={handleSendMessage}>
                        <Entypo name="arrow-with-circle-right" style={{fontSize:40}}/>
                    </TouchableOpacity>
                </View>
                

            </View>

            <View style={styles.tempbox}>
                <Text  style={styles.templabel}>Temperatura da Malha:</Text>
                <View  style={styles.tempboxinner}>
                    <Text  style={styles.temptext}>0 ºC</Text>
                </View>
            </View>

            <View style={styles.tempbox}>
                <Text  style={styles.templabel}>Temperatura do Composto:</Text>
                <View  style={styles.tempboxinner}>
                    <Text  style={styles.temptext}>0 ºC</Text>
                </View>
            </View>

            {!execution ? 
                 <TouchableOpacity activeOpacity={0.7} style={styles.buttonbox} onPress={()=>setExecution(true)}>
                    <View style={styles.buttongreen}>
                         <Entypo name="controller-play" style={styles.icon}/>
                    </View>
                 </TouchableOpacity>
                        :
                <TouchableOpacity activeOpacity={0.7} style={styles.buttonbox} onPress={()=>setExecution(false)}>
                    <View style={styles.buttonred}>
                        <Entypo name="controller-paus" style={styles.icon}/>
                    </View>
                </TouchableOpacity>
            }

           
            

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
            marginTop: 20,
            
      },
      inputsBox1:{
        flexDirection:'row',
        width:'90%',
        justifyContent:'space-evenly',
        alignItems:'center',
        marginBottom:25,
      },
      inputslabel:{
          flexDirection:'row',
          justifyContent:'flex-start',
          width:'80%'
      },
       label:{
              marginBottom:15,
              textAlign: 'left',
              fontSize:14,
              marginTop:20
    },
    inputs:{
        width:240,
        textAlign:'left',
        borderWidth:1,
        borderColor:colors.gray,
        borderRadius:10,
        paddingLeft:15
    },
    tempbox:{
        width:'90%',
        marginBottom:20
    },
    templabel:{
        fontSize:14,
        fontWeight:'regular',
        marginBottom:10
    },
    tempboxinner:{
        width:196,
        height:56,
        borderColor:'black',
        borderRadius:25,
        borderWidth:1,
        paddingLeft:15,
        justifyContent:'center',

       
    },
    icon:{
        fontSize:50
    },
    temptext:{
        fontSize:34,
        fontWeight:'bold'
    },
    buttonbox:{
        marginTop: 50
    },
    buttongreen:{
        height: 55,
        backgroundColor: colors.button_green,
        width: 357,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation:10
    },
    buttonred:{
        height: 55,
        backgroundColor: colors.red_alert,
        width: 357,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        
        shadowColor: '#000',
        shadowOffset: { width: 5, height: 10 },
        shadowOpacity: 0.3,
        shadowRadius: 6,
        elevation:10
    }
})