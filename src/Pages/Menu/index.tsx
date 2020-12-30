import React, { useEffect,useState } from 'react';
import { useNavigation } from '@react-navigation/native';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  Button,
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
      
      <LottieView 
      style={{position: 'absolute',height: 300, alignSelf: 'center',bottom: 1}}
      source={require('../../Assets/earth.json')} 
      autoPlay 
      loop 
      />
        <TouchableOpacity 
        onPress={() => navigation.navigate('Map')}
        style={{
          borderWidth: 1, 
          borderColor: '#ddd', 
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10,
          marginTop: 50,
          }}>
            <MaterialCommunityIcons 
                name="satellite-variant" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
        <Text style={{fontSize: 18,color: '#fff'}}>Localização da ISS</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Astro')}
        style={{
          borderWidth: 1, 
          borderColor: '#ddd', 
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10
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
          borderWidth: 1, 
          borderColor: '#ddd', 
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10
          }}>
            <MaterialCommunityIcons 
                name="antenna" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
          <Text style={{fontSize: 18,color: '#fff'}}>Próxima Passagem da ISS</Text>
        </TouchableOpacity>
        <TouchableOpacity 
        onPress={() => navigation.navigate('Curiosity')}
        style={{
          borderWidth: 1, 
          borderColor: '#ddd', 
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10
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
          borderWidth: 1, 
          borderColor: '#ddd', 
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10
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
  );
};

export default Menu;