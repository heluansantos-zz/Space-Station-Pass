import React, { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  ImageBackground,
} from 'react-native';
import api from '../../Services/api';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const Menu: React.FC = () => {
  
  const navigation = useNavigation();
  return (
      <View style={{height: '100%'}}> 
       <LottieView 
      style={{position: 'absolute',height: 1100}}
      source={require('../../Assets/background-menu.json')} 
      autoPlay 
      loop 
      />
      <ImageBackground 
        source={require('../../Assets/backgroundjpeg.jpeg')}
        style={{
          flex: 1,
          alignSelf: 'stretch',
          width: '100%',
          height: '100%',
          opacity: 0.8
        }}
      >
        <LottieView 
      style={{position: 'absolute',height: 300, alignSelf: 'center',bottom: 1}}
      source={require('../../Assets/earth.json')} 
      autoPlay 
      loop 
      />
      <View style={{marginTop: 40}}>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Map')}
        style={{ 
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10,
          marginTop: 50,
          margin: 5,
          backgroundColor: 'rgba(255,255,255,0.2)',
          }}>
            <MaterialCommunityIcons 
                name="space-station" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
        <Text style={{fontSize: 18,color: '#fff'}}>Localização da ISS</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Astro')}
        style={{
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10,
          margin: 5,
          backgroundColor: 'rgba(255,255,255,0.2)',
          }}>
            <MaterialCommunityIcons 
                name="account-group" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
        <Text style={{fontSize: 18,color: '#fff'}}>Astronautas a Bordo</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Pass')}
        style={{
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10,
          margin: 5,
          backgroundColor: 'rgba(255,255,255,0.2)',
          }}>
            <MaterialCommunityIcons 
                name="satellite-variant" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
          <Text style={{fontSize: 18,color: '#fff'}}>Próximas Passagens da ISS</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Curiosity')}
        style={{
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10,
          margin: 5,
          backgroundColor: 'rgba(255,255,255,0.2)',
          }}>
            <MaterialCommunityIcons 
                name="android-messages" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
          <Text style={{fontSize: 18,color: '#fff'}}>Curiosidades da ISS</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('About')}
        style={{
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10,
          margin: 5,
          backgroundColor: 'rgba(255,255,255,0.2)',
          }}>
            <MaterialCommunityIcons 
                name="badge-account-horizontal-outline" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
          <Text style={{fontSize: 18,color: '#fff'}}>Sobre o desenvolvedor</Text>
        </TouchableOpacity>
        <View style={{position: 'absolute'}}>
      </View>
      </View>
      </ImageBackground>
      </View>
  );
};

export default Menu;