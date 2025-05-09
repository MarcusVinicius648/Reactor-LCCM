import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

import colors from "@/assets/styles/colors";
import { Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

export function HistoryCard() {
  const navigation = useNavigation();

  return (
    <View style={styles.container}>
      <TouchableOpacity
        activeOpacity={0.7}
        onPress={() => navigation.navigate("SingleHistoryScreen")}
      >
        <View style={styles.textBox}>
          <Text style={styles.title}>Título: Sulfato de Cálcio</Text>
          <Text style={styles.datas}>Data: 03/08/2025</Text>
          <Text style={styles.datas}>Duração: 45min09s</Text>
        </View>

        <Entypo name={"chevron-with-circle-right"} style={styles.icon} />
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "space-around",
    flexDirection: "row",
    backgroundColor: colors.card_green,
    width: "100%",
    borderRadius: 8,
    padding: 16,
    marginTop: 30,
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
    alignSelf: "center",
    marginTop: 15,
  },
});
