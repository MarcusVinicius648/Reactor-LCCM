import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "@/assets/styles/colors";
import { Button } from "@/components/button";
import { Entypo } from "@expo/vector-icons";

import { useNavigation } from "@react-navigation/native";
import { LinearGradient } from "expo-linear-gradient";

export default function Home() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <StatusBar />
          <View style={styles.cardContainer}>
            <LinearGradient
              colors={["#128C8B", "#A8B43B"]} // Cores do gradiente
              start={{ x: 0.5, y: 0 }} // Começa no topo (vertical)
              end={{ x: 0.5, y: 1 }} // Termina na parte inferior
              style={styles.topgrade}
            >
              <View style={styles.textbox}>
                <Text style={styles.title}>
                  Olá, Marcus Vinicius! Seja bem vindo!
                </Text>
                <Text style={styles.subtitle}>
                  quinta feira, 15 de janeiro de 2025
                </Text>
              </View>

              <Image source={require("@/assets/icons/logoHome.png")} />
            </LinearGradient>
            <View style={styles.card}>
              <TouchableOpacity
                activeOpacity={0.7}
                style={{ width: "100%" }}
                onPress={() => navigation.navigate("HistoryScreen")}
              >
                <View style={styles.hisBox}>
                  <Text style={styles.hisTitle}>Histórico</Text>
                  <Text style={styles.hisSubtitle}>
                    Acesse os teste feitos anteriomente e faça o download dos
                    dados
                  </Text>
                  <Entypo
                    name={"chevron-with-circle-right"}
                    style={styles.icon}
                  />
                </View>
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => navigation.navigate("PreProcessScreen")}
              >
                <Button title="Novo teste" />
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.top_green,
    justifyContent: "center",
    alignItems: "center",
  },
  keyboardAvoidingView: {
    flex: 1,
  },
  scrollView: {
    flexGrow: 1,
    justifyContent: "center",
    padding: 16,
  },
  cardContainer: {
    width: "100%",
    maxWidth: 400,
    alignSelf: "center",
  },
  topgrade: {
    width: "100%",
    height: "35%",
    backgroundColor: colors.top_green,
    flexDirection: "row",

    justifyContent: "space-between",
    alignItems: "flex-end",
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
    paddingBottom: 70,

    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  textbox: {
    width: "55%",
    height: "40%",
    justifyContent: "center",
    marginLeft: 15,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 12,
    fontWeight: "medium",
  },
  image: {
    resizeMode: "contain",
    width: 120,
    height: 137,
    marginRight: 15,
  },
  card: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 24,
  },
  hisBox: {
    justifyContent: "space-evenly",
    alignItems: "center",
    width: "80%",
    height: 205,
    backgroundColor: colors.card_green,
    alignSelf: "center",
    marginTop: 40,
    padding: 16,
    borderRadius: 25,
    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  hisTitle: {
    fontSize: 20,
    fontWeight: "bold",
  },
  hisSubtitle: {
    fontSize: 14,
    fontWeight: "medium",
    textAlign: "center",
  },
  icon: {
    color: "black",
    fontSize: 26,
  },
  button: {
    marginTop: 60,
    alignSelf: "center",
  },
});
