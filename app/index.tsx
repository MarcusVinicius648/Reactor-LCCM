import * as React from 'react';
import {SafeAreaView, Text, View } from "react-native";
import { createStaticNavigation, NavigationIndependentTree } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Welcome from "./pages/welcome";
import CreateAccount from "./pages/createAccount";
import Home from './pages/home';
import History from './pages/history';
import ReviewTest from './pages/reviewTest';
import PreProcess from './pages/preProcess';
import Test from './pages/test';
import SingleHistory from './pages/singlehistory';


const RootStack = createNativeStackNavigator({
  initialRouteName: 'WelcomeScreen',
  screenOptions: {headerShown: false},
  screens:{
    WelcomeScreen: Welcome,
    CreateAccountScreen: CreateAccount,
    HomeScreen:Home,
    HistoryScreen:History,
    ReviewTestScreen:ReviewTest,
    PreProcessScreen:PreProcess,
    TestScreen:Test,
    SingleHistoryScreen:SingleHistory,
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

