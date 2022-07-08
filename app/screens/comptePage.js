import { AppTitle } from '../components/AppTitle'
import { Text, View, StyleSheet } from 'react-native'
import { useAtom } from 'jotai'
import { DARK, LIGHT, ThemeAtom } from '../styles/theme'
import Bouton from '../components/Bouton'

export const ComptePage = () => {
    const [theme, updateTheme] = useAtom(ThemeAtom)
    return (
        <View style={styles.container}>
            <AppTitle />
            <Text style={styles.textButton}>Gestion de votre compte</Text>
            <Bouton title="Changer de thème (Dark <=> Light)"
                onPress={() => { updateTheme(theme === DARK ? LIGHT : DARK) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
})
