import { Pressable, StyleSheet, Text, TouchableHighlight, TouchableOpacity } from 'react-native'
import { useTheme } from '../styles/theme'

export default Bouton = ({ title, onPress }) => {
    const theme = useTheme()
    return (
        <TouchableOpacity onPress={onPress} style={[styles.button, theme.button]}>
            <Text style={[styles.buttonText, theme.buttonText]}>
                {title}
            </Text>
        </TouchableOpacity>
    )
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