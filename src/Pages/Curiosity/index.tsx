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
      <LottieView source={require('../../Assets/background-menu.json')} autoPlay loop />
        <View style={{
          borderWidth: 1, 
          borderColor: '#ddd', 
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10,
          marginTop: 50
          }}>
            <MaterialCommunityIcons 
                name="satellite-variant" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
        <Text style={{fontSize: 18,color: '#fff'}}>Localização da ISS</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Curiosity;