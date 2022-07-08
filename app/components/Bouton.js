import { Pressable, StyleSheet, Text } from 'react-native'
import { useTheme } from '../styles/theme'

export default Bouton = ({ title, onPress }) => {
    const theme = useTheme()
    return <Pressable onPress={onPress} style={({ pressed }) => [
        {
            backgroundColor: pressed
                ? theme.colors.card
                : theme.colors.background
        }, [styles.button, theme.button],]}>
        <Text style={[styles.buttonText, theme.buttonText]}>
            {title}
        </Text>
    </Pressable>
}

const styles = StyleSheet.create({
    button: {
        marginTop: 20,
        padding: 20,
        height: 60,
        justifyContent: 'center',
        alignItems: 'center',
    },
    buttonText: {
        fontSize: 16,
    },
});