import { SafeAreaView,Text, View } from "react-native";
import { StatusBar } from 'expo-status-bar';
import * as React from 'react';

export default function Welcome() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Text>Welcome page</Text>
      
    </SafeAreaView>
  );
}
