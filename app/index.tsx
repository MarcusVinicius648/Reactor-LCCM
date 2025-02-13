import * as React from 'react';
import {SafeAreaView, Text, View } from "react-native";
import { createStaticNavigation, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/welcome";
import Login from "./pages/login";
import CreateAccount from "./pages/createAccount";


const RootStack = createNativeStackNavigator({
  initialRouteName: 'Welcome',
  screenOptions: {headerShown: false},
  screens:{
    Welcome: Welcome,
    Login: Login,
    CreateAccount: CreateAccount,
  },
});
const Navigation = createStaticNavigation(RootStack);


export default function Index() {
  return (
    
    <NavigationIndependentTree>
      <Navigation/>
    </NavigationIndependentTree>
  )
}

