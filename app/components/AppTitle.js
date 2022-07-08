import React from "react";
import { Text, StyleSheet, View } from "react-native";
import { useTheme } from "../styles/theme";


export const AppTitle = () => {
    const theme = useTheme()

    return (
        <View style={styles.container}>
            <Text style={[styles.titleText, theme.title]}>KriticArt</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "10%"

    },

    titleText: {
        fontFamily: "Courgette",
        fontSize: 30,

    }
});