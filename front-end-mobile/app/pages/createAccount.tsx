import colors from "@/assets/styles/colors";
import { Button } from "@/components/button";
import { useNavigation } from "@react-navigation/native";
import * as React from "react";
import {
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

export default function CreateAccount() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <StatusBar backgroundColor={colors.top_green} />
          <View style={styles.cardContainer}>
            <View style={styles.header}>
              <Text style={styles.title}>Crie seu cadastro</Text>
              <Text style={styles.subtitle}>
                Venha fazer parte da nossa comunidade
              </Text>
            </View>
            <View style={styles.card}>
              <View style={styles.inputsBox}>
                <Text style={styles.label}>Nome de Usuário:</Text>
                <TextInput style={styles.inputs} />

                <Text style={styles.label}>E-mail:</Text>
                <TextInput style={styles.inputs} />

                <Text style={styles.label}>Senha:</Text>
                <TextInput style={styles.inputs} />
              </View>

              <TouchableOpacity
                activeOpacity={0.7}
                style={styles.containerbutton}
                onPress={() => navigation.navigate("HomeScreen")}
              >
                <Button title="Cadastrar" />
              </TouchableOpacity>

              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.navigate("WelcomeScreen")}
              >
                <Text style={styles.backWelcome}>Já possui conta?</Text>
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
  header: {
    justifyContent: "center",
    alignItems: "center",
    width: "100%",

    height: 160,
    backgroundColor: colors.button_green,

    shadowColor: "#000",
    shadowOffset: { width: 5, height: 5 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  subtitle: {
    fontWeight: "300",
    fontSize: 17,
    marginTop: 15,
  },
  card: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 24,
  },
  inputsBox: {
    alignItems: "flex-start",
    justifyContent: "space-between",
    alignSelf: "center",
    marginTop: 50,
  },
  label: {
    marginBottom: 15,
    textAlign: "left",
    fontSize: 14,
  },
  inputs: {
    borderWidth: 1,
    borderColor: "#e2e8f0", // slate-200 equivalent
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  containerbutton: {
    marginTop: 50,
  },
  backWelcome: {
    fontSize: 17,
    fontWeight: "medium",
    color: colors.gray,
    textDecorationLine: "underline",
    alignSelf: "center",

    marginTop: 30,
  },
});
