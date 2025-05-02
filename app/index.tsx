import {
  createStaticNavigation,
  NavigationIndependentTree,
} from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import * as React from "react";

import CreateAccount from "./pages/createAccount";
import History from "./pages/history";
import Home from "./pages/home";
import PreProcess from "./pages/preProcess";
import SingleHistory from "./pages/singlehistory";
import Test from "./pages/test";
import Welcome from "./pages/welcome";

const RootStack = createNativeStackNavigator({
  initialRouteName: "WelcomeScreen",
  screenOptions: { headerShown: false },
  screens: {
    WelcomeScreen: Welcome,
    CreateAccountScreen: CreateAccount,
    HomeScreen: Home,
    HistoryScreen: History,
    PreProcessScreen: PreProcess,
    TestScreen: Test,
    SingleHistoryScreen: SingleHistory,
  },
});

const Navigation = createStaticNavigation(RootStack);

export default function Index() {
  return (
    <NavigationIndependentTree>
      <Navigation />
    </NavigationIndependentTree>
  );
}
