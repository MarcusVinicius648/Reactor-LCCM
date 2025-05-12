import React from "react";
import {
  Image,
  KeyboardAvoidingView,
  Platform,
  SafeAreaView,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import colors from "@/assets/styles/colors";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export default function SingleHistory() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.containerOut}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : "height"}
        style={styles.keyboardAvoidingView}
      >
        <ScrollView contentContainerStyle={styles.scrollView}>
          <View style={styles.cardContainer}>
            <View style={styles.headerOut}>
              <TouchableOpacity
                activeOpacity={0.7}
                onPress={() => navigation.goBack()}
              >
                <Image
                  source={require("@/assets/icons/backarrow.png")}
                  style={{
                    resizeMode: "contain",
                    width: 10,
                    height: 20,
                    marginLeft: 20,
                  }}
                />
              </TouchableOpacity>

              <Text style={styles.titleOut}>Título: Sulfato de Cálcio</Text>
            </View>

            <View style={styles.card}>
              <View style={styles.container}>
                <View style={styles.textBox}>
                  <Text style={styles.title}>Título: Sulfato de Cálcio</Text>
                  <Text style={styles.datas}>Data: 03/08/2025</Text>
                  <Text style={styles.datas}>Duração: 45min09s</Text>
                </View>
              </View>

              <View style={styles.container}></View>

              <View style={styles.container}></View>

              <View style={styles.download}>
                <View style={styles.downloadbox}>
                  <Text style={styles.downloadboxtext}>Salvar em .txt</Text>
                  <Entypo name={"download"} style={styles.icon2} />
                </View>

                <View style={styles.downloadbox}>
                  <Text style={styles.downloadboxtext}>Salvar em .json</Text>
                  <Entypo name={"download"} style={styles.icon2} />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  containerOut: {
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

  headerOut: {
    width: "100%",
    height: 100,
    backgroundColor: colors.button_green,
    paddingTop: 20,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
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
  titleOut: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
  },
  textBox: {
    alignItems: "flex-start",
    justifyContent: "center",
  },
  title: {
    fontSize: 15,
    fontWeight: "bold",
  },
  datas: {
    fontSize: 15,
    fontWeight: "medium",
  },
  icon: {
    fontSize: 26,
    color: "black",
  },
  icon2: {
    fontSize: 30,
    color: colors.white,
    marginTop: 10,
  },
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: colors.card_green,
    width: "100%",
    height: 121,
    borderRadius: 8,
    marginTop: 30,
  },
  download: {
    width: "100%",
    alignItems: "center",
    justifyContent: "center",
    flexDirection: "row",
    marginTop: 30,
  },
  downloadboxtext: {
    fontSize: 15,
    fontWeight: "bold",
    color: colors.white,
  },
  downloadbox: {
    width: 150,
    height: 96,
    backgroundColor: colors.button_green,
    borderRadius: 8,
    alignItems: "center",
    justifyContent: "center",
    marginHorizontal: 10,

    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },
});
