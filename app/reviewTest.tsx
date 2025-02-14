import React from "react";
import { SafeAreaView,Text,StyleSheet } from "react-native";

export default function ReviewTest(){
    return(
        <SafeAreaView style={styles.container}>
            <Text>Home</Text>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent:"center",
    }
})