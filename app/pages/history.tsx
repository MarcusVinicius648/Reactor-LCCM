import React from "react";
import { SafeAreaView,Text,StyleSheet,View, TouchableOpacity,Image } from "react-native";

import {HistoryCard} from "@/components/historyCard"
import colors from "@/assets/styles/colors";
import { useNavigation } from "@react-navigation/native";

export default function History(){

    const navigation =useNavigation()

    return(
        <SafeAreaView style={styles.container}>

        <View style={styles.header}>
            
            <View>
            <Text style={styles.title}>Histórico</Text>
            </View>
            
        </View>
            
        <HistoryCard/>
        <HistoryCard/>
        <HistoryCard/>
        <HistoryCard/>
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
        flexDirection:'row',
    
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
        textAlign:'center',   
        
        alignSelf:'center',
        justifyContent:'center'
      },
})