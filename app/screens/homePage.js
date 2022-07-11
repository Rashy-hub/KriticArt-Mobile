import { View } from 'react-native'
import { AppTitle } from '../components/AppTitle'
import { PublicGallery } from '../components/PublicGallery'

export const HomePage = () => {

    return (
        <View style={{ flex: 1 }}>
            <AppTitle />
            <PublicGallery case={false} />
        </View>
    )
}