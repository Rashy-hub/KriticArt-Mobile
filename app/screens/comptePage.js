import { AppTitle } from '../components/AppTitle'
import { Text, View, StyleSheet } from 'react-native'
import { useAtom } from 'jotai'
import { DARK, LIGHT, ThemeAtom, useTheme } from '../styles/theme'
import Bouton from '../components/Bouton'

export const ComptePage = () => {
    const [theme, updateTheme] = useAtom(ThemeAtom)
    const theme2 = useTheme()
    return (
        <View style={styles.container}>
            <AppTitle />
            <Text style={[styles.subTitle, theme2.subTitle]}>Gestion de votre compte</Text>
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
    subTitle: {
        marginTop: 20,
        textTransform: 'uppercase',
    }
})
