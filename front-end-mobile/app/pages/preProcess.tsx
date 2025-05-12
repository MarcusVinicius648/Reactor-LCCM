import React, { useEffect, useState } from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "@/assets/styles/colors";
import { Button } from "@/components/button";

import { useNavigation } from "@react-navigation/native";

export default function PreProcess() {
  const [status, setStatus] = useState(false);

  useEffect(() => {}, []);

  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.cardContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Novo teste</Text>
            </View>
            <View style={styles.card}>
              <View style={styles.inputsBox}>
                <Text style={styles.label}>Título do teste:</Text>
                <TextInput style={styles.inputs} />
              </View>

              <Text style={styles.label}>Quantidade de módulos:</Text>

              <View style={styles.inputslabel}>
                <View style={styles.modulesBox}>
                  <Text style={styles.moduleText}>1</Text>
                </View>
                <View style={styles.modulesBox}>
                  <Text style={styles.moduleText}>2</Text>
                </View>
                <View style={styles.modulesBox}>
                  <Text style={styles.moduleText}>3</Text>
                </View>
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.button}
                onPress={() => navigation.navigate("TestScreen")}
              >
                <Button title="Iniciar teste" />
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
  card: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 24,
  },
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    height: 100,
    backgroundColor: colors.button_green,
    borderTopEndRadius: 8,
    borderTopStartRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  inputsBox: {
    alignItems: "center",
    justifyContent: "space-between",
    alignSelf: "center",
    width: "100%",
  },
  inputslabel: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "100%",
  },
  labelbroker: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 14,
    fontWeight: "bold",
  },
  boxBroker: {
    marginTop: 40,
  },
  modulesBox: {
    width: 93,
    height: 89,
    borderRadius: 25,
    backgroundColor: colors.button_green,
    marginRight: 15,

    alignItems: "center",
    justifyContent: "center",

    shadowColor: "#000",
    shadowOffset: { width: 3, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 5,
  },
  moduleText: {
    fontSize: 32,
    color: colors.white,
    fontWeight: "bold",
  },
  label: {
    marginBottom: 15,
    textAlign: "center",
    fontSize: 14,
    marginTop: 20,
  },
  inputs: {
    width: "100%",
    borderWidth: 1,
    borderColor: "#e2e8f0", // slate-200 equivalent
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  button: {
    marginTop: 50,
  },
  icontrue: {
    fontSize: 64,
    textAlign: "center",
    color: colors.button_green,
  },
  iconfalse: {
    fontSize: 64,
    textAlign: "center",
    color: colors.red_alert,
  },
});
