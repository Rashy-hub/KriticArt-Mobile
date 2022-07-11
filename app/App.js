import { View, StatusBar } from 'react-native';
import { useFonts } from "expo-font";

import { themeAtom } from './atom';
import { useAtom } from 'jotai'
import { isUserConnected } from './utils/connection/isUserConnected';
import { VisitorPage } from './screens/visitorPage';
import Navigation from './navigation';



export default function App() {

  const [theme, updateTheme] = useAtom(themeAtom)

  const [loaded] = useFonts({
    Courgette: require('./assets/fonts/Courgette-Regular.ttf'),
  })


  if (!loaded) {
    return null;
  }


/*   const isConnected = isUserConnected()
  if (!isConnected) {
    return (<VisitorPage />)
   // <Stack.Screen name='visitor' component={VisitorPage}/>
  } */




  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Navigation />
    </View>


  );
}
