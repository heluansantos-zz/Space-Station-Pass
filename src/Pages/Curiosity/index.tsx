import React, { useEffect,useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
} from 'react-native';
import api from '../../Services/api';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

const Curiosity: React.FC = () => {
  

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor: '#000', height: '100%'}}>
        <View style={{
          borderWidth: 0.3, 
          borderBottomColor: '#ddd',
          height: 70,
          padding: 10,
          marginTop: 50,
          flexDirection: 'row'
          }}>
            <MaterialCommunityIcons 
                name="satellite-variant" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
          Velocidade: 28.000 Km/h
        </Text>
        </View>
        <View style={{
          borderWidth: 0.3, 
          borderBottomColor: '#ddd',
          height: 70,
          padding: 10,
          flexDirection: 'row'
          }}>
            <MaterialCommunityIcons 
                name="satellite-variant" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
          Altura: 400 Km
        </Text>
        </View>
        <View style={{
          borderWidth: 0.3, 
          borderBottomColor: '#ddd',
          height: 70,
          padding: 10,
          flexDirection: 'row'
          }}>
            <MaterialCommunityIcons 
                name="satellite-variant" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
          Tamanho: 400m x 100m
        </Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Curiosity;