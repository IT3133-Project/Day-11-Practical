import { StyleSheet, KeyboardAvoidingView, Platform, View } from 'react-native';
import { PaperProvider } from 'react-native-paper';
import { SafeAreaProvider, SafeAreaView } from 'react-native-safe-area-context';
import Home from './components/Home';
import ContactUs from './components/ContactUs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import AboutUs from './components/AboutUs';

const Stack = createNativeStackNavigator();

function RootStack() {
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerStyle: { backgroundColor: 'lightblue' },  
      }}
    >
      <Stack.Screen
        name="Home"
        component={Home}
        options={{ title: 'Welcome' }}
      />
      <Stack.Screen
        name="Contact"
        component={ContactUs}
        options={{ title: 'Contact Us' }}
      />
      <Stack.Screen
        name="AboutUs"
        component={AboutUs}
        options={{ title: 'About Us' }}
      />
    </Stack.Navigator>
  );
}


export default function App() {
  return (
    <PaperProvider>
      <SafeAreaProvider>
        <SafeAreaView style={styles.safeArea}>
          <NavigationContainer>
            <RootStack />
          </NavigationContainer>
          <StatusBar style="auto" />
        </SafeAreaView>
      </SafeAreaProvider>
    </PaperProvider>
  );
}

const styles = StyleSheet.create({
  safeArea: {
    flex: 1,
    backgroundColor: '#fff',
  },
});
