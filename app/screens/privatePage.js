import { View } from 'react-native'
import { AppTitle } from '../components/AppTitle'
import { PublicGallery } from '../components/PublicGallery'

export const PrivatePage = () => {

    return (
        <View style={{ flex: 1 }}>
            <AppTitle />
            <PublicGallery />
        </View>
    )
}