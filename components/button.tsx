import React from 'react';
import { Text, TouchableOpacityProps, StyleSheet, View } from 'react-native';

import colors from "@/assets/styles/colors"
import fonts from "@/assets/styles/fonts"

interface ButtonProps extends TouchableOpacityProps {
    title: string;
}

export function Button({ title, ...rest }: ButtonProps) {
    return (
        <View style={styles.container}>
            <Text {...rest} style={styles.text} >
                {title}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.button_green,
        width: 357,
        height: 55,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,

    },

    text: {
        fontSize: 30,
        fontWeight:"bold",
        color:colors.white
    },
});