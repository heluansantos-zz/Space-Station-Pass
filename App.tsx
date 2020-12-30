import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaView, StatusBar, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import LottieView from 'lottie-react-native';
import Map from './src/Pages/Map';
import Menu from './src/Pages/Menu';
import Astro from './src/Pages/Astro';
import About from './src/Pages/About';
import Pass from './src/Pages/Pass';
import Curiosity from './src/Pages/Curiosity';

const Stack = createStackNavigator();

const App = () => {
  return (
    <View style={{backgroundColor: '#000'}}>
      <StatusBar barStyle="light-content" />
      <View style={{height: '100%'}}>
        <NavigationContainer>
          <Stack.Navigator initialRouteName="Menu">
            <Stack.Screen 
              name="Menu" 
              component={Menu} 
              options={{ 
                title: 'Space Station Pass',
                headerTintColor: '#fff',
                headerTransparent: true,
              }}
            />
            <Stack.Screen 
              name="Map" 
              component={Map} 
              options={{ 
                title: 'Localização da ISS',
                headerTintColor: '#fff',
                headerTransparent: true,
              }}
            />
            <Stack.Screen 
              name="Astro" 
              component={Astro} 
              options={{ 
                title: 'Astronautas a Bordo',
                headerTintColor: '#fff',
                headerTransparent: true, 
              }}
            />
            <Stack.Screen 
              name="About" 
              component={About} 
              options={{ 
                title: 'Sobre o Desenvolvedor',
                headerTintColor: '#fff',
                headerTransparent: true, 
              }}
            />
            <Stack.Screen 
              name="Pass" 
              component={Pass} 
              options={{ 
                title: 'Próximas passagens da ISS',
                headerTintColor: '#fff',
                headerTransparent: true, 
              }}
            />
            <Stack.Screen 
              name="Curiosity" 
              component={Curiosity} 
              options={{ 
                title: 'Curiosidades da ISS',
                headerTintColor: '#fff',
                headerTransparent: true,
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </View>
    </View>
  );
};

export default App;
