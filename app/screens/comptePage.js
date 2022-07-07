import { AppTitle } from "../components/AppTitle"
import { StatusBar, Text, View, Button, TextInput } from 'react-native';
import { useAtom } from 'jotai'
import { themeAtom } from "../atom";
import themes from '../styles/theme'
import Bouton from "../components/Bouton";

export const ComptePage = () => {
    const [theme, updateTheme] = useAtom(themeAtom)
    return (
        <View style={{ flex: 1 }}>
            <AppTitle />
            <Text>Gestion du compte</Text>
            <Bouton title='Press me' onPress={() => { updateTheme(theme === themes.Dark ? themes.Light : themes.Dark) }} />
        </View>
    )
}