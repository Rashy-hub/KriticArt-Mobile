import React from "react";
import { Text, StyleSheet, View } from "react-native";


export const AppTitle = () => {

    return (
        <View style={styles.container}>
            <Text style={styles.titleText}>KriticArt</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        marginTop: "5%"

    },

    titleText: {
        fontFamily: "Courgette",
        fontSize: 35,

    }
});