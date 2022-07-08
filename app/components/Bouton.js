import { Pressable, StyleSheet, Text } from 'react-native'
import { useAtom } from 'jotai'
import { themeAtom } from '../atom'

export default Bouton = ({ title, onPress }) => {
    const [theme] = useAtom(themeAtom)
    return <Pressable onPress={onPress} style={({ pressed }) => [
        {
            backgroundColor: pressed
                ? 'lightsteelblue'
                : 'blue'
        }, styles.button,]}><Text style={styles.buttonText}>{title}</Text></Pressable>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        padding: 20,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'blue',
    },
    buttonText: {
        fontSize: 16,
        color: 'antiquewhite',
    },
});