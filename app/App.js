import { StyleSheet, Text, View ,StatusBar} from 'react-native';
import { useFonts } from "expo-font";
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

import { PrivatePage } from './screens/privatePage';
import { ComptePage } from './screens/comptePage';
import { GalleriesPage } from './screens/galleriesPage' ;
import { FavoriePage } from './screens/favoriePage';
import { HomePage } from './screens/homePage';
import { isUserConnected } from './utils/connection/isUserConnected';
import { VisitorPage } from './screens/visitorPage';

const Tab = createBottomTabNavigator()
export default function App() {

  const [loaded] = useFonts({
    Courgette: require('./assets/fonts/Courgette-Regular.ttf'),})


    if (!loaded) {
      return null;
    }

   const isConnected=isUserConnected()
if(!isConnected)
{
  return (<VisitorPage/> )
}
  return (

      
  
    <NavigationContainer style={{ flex: 1}}>    
        <StatusBar/>  
     <Tab.Navigator 
            initialRouteName='Acceuil'
            screenOptions={({ route }) => ({
            tabBarShowLabel: false,
            tabBarActiveTintColor: 'darkblue',
            tabBarInactiveTintColor: 'steelblue',
            tabBarActiveBackgroundColor: 'antiquewhite',
            tabBarInactiveBackgroundColor: 'lightgrey',
            tabBarIcon: ({ focused, color, size }) => {
                let iconName;
               
                if (route.name === 'Acceuil')   iconName = 'home'
                if (route.name === 'Galleries') iconName = 'grid-view'                
                if (route.name === 'Photo')     iconName = 'add-a-photo'
                if (route.name === 'Favoris')   iconName = 'favorite'
                if (route.name === 'Compte')    iconName = 'account-circle'

                // You can return any component that you like here!
                return <MaterialIcons name={iconName} size={32} color={color} />
            }
            })}
        >
            <Tab.Screen name="Acceuil"    component={HomePage}  />     
            <Tab.Screen name="Galleries"  component={GalleriesPage} />  
            <Tab.Screen name="Photo"      component={PrivatePage}  /> 
            <Tab.Screen name="Favoris"    component={FavoriePage} />
            <Tab.Screen name="Compte"     component={ComptePage}  />
        </Tab.Navigator>      
    </NavigationContainer>
  
  

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
