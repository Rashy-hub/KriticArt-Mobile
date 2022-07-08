import { View, StatusBar } from 'react-native';
import { useFonts } from "expo-font";
import { isUserConnected } from './utils/connection/isUserConnected';
import { VisitorPage } from './screens/visitorPage';
import Navigation from './navigation';



export default function App() {
  const [loaded] = useFonts({
    Courgette: require('./assets/fonts/Courgette-Regular.ttf'),
  })


  if (!loaded) {
    return null;
  }

  const isConnected = isUserConnected()
  if (!isConnected) {
    return (<VisitorPage />)
  }

  return (
    <View style={{ flex: 1 }}>
      <StatusBar />
      <Navigation />
    </View>
  );
}
