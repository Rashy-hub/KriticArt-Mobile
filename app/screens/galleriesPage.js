import { useTheme } from '../styles/theme'
import { StyleSheet, Text, View } from 'react-native'
import { AppTitle } from '../components/AppTitle'

export const GalleriesPage = () => {
    const theme = useTheme()
    return (
        <View style={styles.container}>
            <AppTitle />
            <Text style={[styles.subTitle, theme.subTitle]}>Gestion des galleries</Text>
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