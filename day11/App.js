import { StyleSheet, KeyboardAvoidingView, Platform } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
function RootStack() {
  return (
    <Stack.Navigator initialRouteName="Home"  screenOptions={{
      headerStyle: { backgroundColor: 'lightblue' },
    }}>
      <Stack.Screen name="Home" component={Home} options={{ title: "Welcome" }} />
      <Stack.Screen name="contact" component={ContactUs} options={{ title: "Contact Us" }} />
    </Stack.Navigator>
  );
}

export default function App() {
  return (

    <SafeAreaProvider>
      <NavigationContainer>
        <RootStack />
      </NavigationContainer>
    </SafeAreaProvider>




  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
