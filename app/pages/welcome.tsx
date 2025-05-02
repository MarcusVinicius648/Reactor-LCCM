import React, { useState } from "react";
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
import { useNavigation } from "@react-navigation/native";

export default function LoginScreen() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigation = useNavigation();

  const handleLogin = () => {
    console.log({ email, password });
    // Handle login logic here
    navigation.navigate("HomeScreen");
  };

  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.cardContainer}>
            {/* Green header */}
            <View style={styles.headerContainer}>
              <View style={styles.header} />
            </View>

            {/* White card content */}
            <View style={styles.card}>
              <Text style={styles.title}>Bem-vindo</Text>

              <View style={styles.formContainer}>
                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Email:</Text>
                  <TextInput
                    style={styles.input}
                    value={email}
                    onChangeText={setEmail}
                    keyboardType="email-address"
                    autoCapitalize="none"
                  />
                </View>

                <View style={styles.inputContainer}>
                  <Text style={styles.label}>Senha:</Text>
                  <TextInput
                    style={styles.input}
                    value={password}
                    onChangeText={setPassword}
                    secureTextEntry
                  />
                </View>

                <TouchableOpacity style={styles.button} onPress={handleLogin}>
                  <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
              </View>

              <View style={styles.linksContainer}>
                <TouchableOpacity
                  activeOpacity={0.7}
                  onPress={() => navigation.navigate("CreateAccountScreen")}
                >
                  <Text style={styles.createAccountText}>Criar nova conta</Text>
                </TouchableOpacity>

                <TouchableOpacity>
                  <Text style={styles.forgotPasswordText}>
                    Esqueceu a senha?
                  </Text>
                </TouchableOpacity>
              </View>
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
    backgroundColor: colors.top_green, // green-400 equivalent
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
  headerContainer: {
    position: "relative",
  },
  header: {
    height: 160,
    backgroundColor: colors.button_green, // emerald-500 equivalent
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  card: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 32,
  },
  formContainer: {
    gap: 24,
  },
  inputContainer: {
    gap: 8,
  },
  label: {
    fontSize: 16,
  },
  input: {
    borderWidth: 1,
    borderColor: "#e2e8f0", // slate-200 equivalent
    borderRadius: 4,
    padding: 10,
    fontSize: 16,
  },
  button: {
    backgroundColor: colors.button_green, // emerald-500 equivalent
    borderRadius: 4,
    padding: 12,
    alignItems: "center",
    marginTop: 8,
  },
  buttonText: {
    color: "white",
    fontSize: 16,
    fontWeight: "500",
  },
  linksContainer: {
    marginTop: 24,
    alignItems: "center",
    gap: 8,
  },
  createAccountText: {
    fontSize: 16,
    color: "black",
  },
  forgotPasswordText: {
    fontSize: 14,
    color: colors.gray, // gray-500 equivalent
  },
});
