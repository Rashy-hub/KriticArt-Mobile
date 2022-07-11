import { Pressable, StyleSheet, Text } from "react-native"

export default  Bouton = ({ title, onPress }) => {
    return <Pressable onPress={onPress} style={({ pressed }) => [
        {
            backgroundColor: pressed
                ? 'lightsteelblue'
                : 'blue'
        }, styles.button,]}><Text style={styles.buttonText}>{title}</Text></Pressable>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 16,
        height: 40,
        width: '70%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        padding: 8,
        fontSize: 16,
        color: 'antiquewhite',
    },
});