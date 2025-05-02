import React from "react";
import {
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from "react-native";

import colors from "@/assets/styles/colors";
import { HistoryCard } from "@/components/historyCard";
import { useNavigation } from "@react-navigation/native";

export default function History() {
  const navigation = useNavigation();

  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.top_green} />
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.cardContainer}>
          <View style={styles.header}>
            <View>
              <Text style={styles.title}>Histórico</Text>
            </View>
          </View>

          <View style={styles.card}>
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
            <HistoryCard />
          </View>
        </View>
      </ScrollView>
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
  scrollView: {
    flexGrow: 1,
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
    height: 100,
    backgroundColor: colors.button_green,
    borderTopLeftRadius: 8,
    borderTopRightRadius: 8,
  },
  title: {
    fontWeight: "bold",
    fontSize: 34,
  },
  card: {
    backgroundColor: "white",
    borderBottomLeftRadius: 8,
    borderBottomRightRadius: 8,
    paddingHorizontal: 32,
    paddingTop: 32,
    paddingBottom: 24,
  },
});
