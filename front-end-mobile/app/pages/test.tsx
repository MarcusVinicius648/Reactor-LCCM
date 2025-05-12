import colors from "@/assets/styles/colors";
import React, { useState } from "react";
import {
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  KeyboardAvoidingView,
  Platform,
} from "react-native";

import { Entypo } from "@expo/vector-icons";

export default function Test() {
  const [execution, setExecution] = useState(false);
  const [topic, setTopic] = useState("");
  const [tempMessage, setTempMessage] = useState("");

  const handleSendMessage = () => {};

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.cardContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Teste</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.inputsBox}>
                <Text style={styles.label}>
                  Escolha a temperatura alvo que será passada ao sistema:
                </Text>
                <View style={styles.inputsBox1}>
                  <TextInput
                    style={styles.inputs}
                    placeholder="Temperatura setPoint"
                    value={tempMessage}
                    onChangeText={setTempMessage}
                  />
                  <TouchableOpacity
                    activeOpacity={0.7}
                    onPress={handleSendMessage}
                  >
                    <Entypo
                      name="arrow-with-circle-right"
                      style={{ fontSize: 40 }}
                    />
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.tempboxout}>
                <View style={styles.tempbox}>
                  <Text style={styles.templabel}>Temperatura da Malha:</Text>
                  <View style={styles.tempboxinner}>
                    <Text style={styles.temptext}>0 ºC</Text>
                  </View>
                </View>

                <View style={styles.tempbox}>
                  <Text style={styles.templabel}>Temperatura do Composto:</Text>
                  <View style={styles.tempboxinner}>
                    <Text style={styles.temptext}>0 ºC</Text>
                  </View>
                </View>
              </View>

              {!execution ? (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.buttonbox}
                  onPress={() => setExecution(true)}
                >
                  <View style={styles.buttongreen}>
                    <Entypo name="controller-play" style={styles.icon} />
                  </View>
                </TouchableOpacity>
              ) : (
                <TouchableOpacity
                  activeOpacity={0.7}
                  style={styles.buttonbox}
                  onPress={() => setExecution(false)}
                >
                  <View style={styles.buttonred}>
                    <Entypo name="controller-paus" style={styles.icon} />
                  </View>
                </TouchableOpacity>
              )}
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
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 20,
    width: "100%",
  },
  inputsBox1: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "space-evenly",
    alignItems: "center",
    marginBottom: 25,
  },
  inputslabel: {
    flexDirection: "row",
    justifyContent: "flex-start",
    width: "80%",
  },
  label: {
    marginBottom: 15,
    textAlign: "left",
    fontSize: 14,
    marginTop: 20,
  },
  inputs: {
    width: "80%",
    borderWidth: 1,
    borderColor: "#e2e8f0", // slate-200 equivalent
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  tempboxout: {
    width: "100%",
  },
  tempbox: {
    width: "100%",
    marginBottom: 20,
  },
  templabel: {
    fontSize: 14,
    fontWeight: "regular",
    marginBottom: 10,
  },
  tempboxinner: {
    width: "80%",
    height: 56,
    borderColor: "#e2e8f0",
    borderRadius: 25,
    borderWidth: 1,
    paddingLeft: 15,
    justifyContent: "center",
  },
  icon: {
    fontSize: 50,
  },
  temptext: {
    fontSize: 34,
    fontWeight: "bold",
  },
  buttonbox: {
    marginTop: 50,
  },
  buttongreen: {
    height: 55,
    backgroundColor: colors.button_green,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
  buttonred: {
    height: 55,
    backgroundColor: colors.red_alert,
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
});
