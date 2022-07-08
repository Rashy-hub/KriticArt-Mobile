
import { NavigationContainer } from '@react-navigation/native'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import { PrivatePage } from './screens/privatePage'
import { ComptePage } from './screens/comptePage'
import { GalleriesPage } from './screens/galleriesPage'
import { FavoriePage } from './screens/favoriePage'
import { HomePage } from './screens/homePage'
import { useTheme } from './styles/theme'


const Tab = createBottomTabNavigator()

export default Navigation = () => {
    const theme = useTheme()
    return (
        <NavigationContainer style={{ flex: 1 }} theme={theme}>
            <Tab.Navigator
                initialRouteName='Acceuil'
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarIcon: ({ focused, color, size }) => {
                        let iconName;
                        if (route.name === 'Acceuil') iconName = 'home'
                        if (route.name === 'Galleries') iconName = 'grid-view'
                        if (route.name === 'Photo') iconName = 'add-a-photo'
                        if (route.name === 'Favoris') iconName = 'favorite'
                        if (route.name === 'Compte') iconName = 'account-circle'
                        // You can return any component that you like here!
                        return <MaterialIcons name={iconName} size={32} color={color} />
                    }
                })}
            >
                <Tab.Screen name="Acceuil" component={HomePage} />
                <Tab.Screen name="Galleries" component={GalleriesPage} />
                <Tab.Screen name="Photo" component={PrivatePage} />
                <Tab.Screen name="Favoris" component={FavoriePage} />
                <Tab.Screen name="Compte" component={ComptePage} />
            </Tab.Navigator>
        </NavigationContainer >
    )
}