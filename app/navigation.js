
import { NavigationContainer } from '@react-navigation/native';

import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import { createBottomTabNavigator} from '@react-navigation/bottom-tabs'
import { useAtom } from 'jotai'
import { themeAtom } from './atom';

import { PrivatePage } from './screens/privatePage';
import { ComptePage } from './screens/comptePage';
import { GalleriesPage } from './screens/galleriesPage';
import { FavoriePage } from './screens/favoriePage';
import { HomePage } from './screens/homePage';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { RegisterPage } from './screens/registerPage';

const Tab = createBottomTabNavigator()
const Stack = createNativeStackNavigator();

const bottomTabNav=()=>{
    
            <Tab.Navigator
                initialRouteName='Acceuil'
                screenOptions={({ route }) => ({
                    tabBarShowLabel: false,
                    tabBarActiveTintColor: theme.tabBarActiveTintColor,
                    tabBarInactiveTintColor: theme.tabBarInactiveTintColor,
                    tabBarActiveBackgroundColor: theme.tabBarActiveBackgroundColor,
                    tabBarInactiveBackgroundColor: theme.tabBarInactiveBackgroundColor,
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
      
}



export default Navigation = () => {
    const [theme] = useAtom(themeAtom)
    return (
        <NavigationContainer style={{ flex: 1 }} theme={theme}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name='bottomTabNav' component={bottomTabNav} />    
          <Stack.Screen name='register' component={RegisterPage} />
        </Stack.Navigator>
      </NavigationContainer>
    )
}