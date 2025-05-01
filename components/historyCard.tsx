import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "@/assets/styles/colors";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export  function HistoryCard(){

    const navigation =useNavigation();

    return(
        <TouchableOpacity 
        activeOpacity={0.7}
         style={styles.tou} 
         //onPress={()=>navigation.navigate('SingleHistoryScreen')}
         >
        <View style={styles.container}>

            <View style={styles.textBox}>
            <Text style={styles.title}>Título: Sulfato de Cálcio</Text>
            <Text style={styles.datas}>Data: 03/08/2025</Text>
            <Text style={styles.datas}>Duração: 45min09s</Text>
            </View>

            <Entypo name={'chevron-with-circle-right'} style={styles.icon}/>

        </View>
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"space-around",
        flexDirection:'row',
        backgroundColor:colors.card_green,
        width:'80%',
        height:121,
        borderRadius:25,
        marginTop:30
    },
    tou:{
        width:"100%",
        alignItems:'center'
    },
    textBox:{
        alignItems:'flex-start',
        justifyContent:'center',
    },
    title:{
        fontSize:15,
        fontWeight:'bold'
    },
    datas:{
        fontSize:15,
        fontWeight:'medium'
    },
    icon:{
        fontSize:26,
        color:'black'
    }
})