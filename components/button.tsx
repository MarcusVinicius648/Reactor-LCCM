import React from "react";
import { StyleSheet, Text, TouchableOpacityProps, View } from "react-native";

import colors from "@/assets/styles/colors";

interface ButtonProps extends TouchableOpacityProps {
  title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
  return (
    <View style={styles.container}>
      <Text {...rest} style={styles.text}>
        {title}
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.button_green,
    width: 357,
    height: 55,
    alignItems: "center",
    justifyContent: "center",
    borderRadius: 10,

    shadowColor: "#000",
    shadowOffset: { width: 5, height: 10 },
    shadowOpacity: 0.3,
    shadowRadius: 6,
    elevation: 10,
  },

  text: {
    fontSize: 30,
    fontWeight: "bold",
    color: colors.white,
  },
});
