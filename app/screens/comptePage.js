import { AppTitle } from '../components/AppTitle'
import { Text, View, StyleSheet } from 'react-native'
import { useAtom } from 'jotai'
import { themeAtom } from '../atom'
import themes from '../styles/theme'
import Bouton from '../components/Bouton'

export const ComptePage = () => {
    const [theme, updateTheme] = useAtom(themeAtom)
    return (
        <View style={styles.container}>
            <AppTitle />
            <Text>Gestion de votre compte</Text>
            <Bouton title="Changer de thème (Dark <=> Light)"
                onPress={() => { updateTheme(theme === themes.Dark ? themes.Light : themes.Dark) }} />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
})
