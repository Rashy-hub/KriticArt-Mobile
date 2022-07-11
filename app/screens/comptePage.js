import { AppTitle } from '../components/AppTitle'
import { Text, View, StyleSheet } from 'react-native'
import { useAtom } from 'jotai'
import { DARK, LIGHT, ThemeAtom, useTheme } from '../styles/theme'
import Bouton from '../components/Bouton'

export const ComptePage = () => {
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <AppTitle />
            <Text style={[styles.subTitle, theme.subTitle]}>Gestion de votre compte</Text>
            <Bouton title="Changer de thème (Dark <=> Light)"
                onPress={() => { theme.toggle() }} />
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
