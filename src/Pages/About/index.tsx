import React, { useEffect,useState } from 'react';
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

const About: React.FC = () => {
  

  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor: '#000', height: '100%'}}>
      <ImageBackground 
        source={require('../../Assets/backgroundjpeg.jpeg')}
        style={{
          flex: 1,
          alignSelf: 'stretch',
          width: '100%',
          height: '100%'
        }}
      >
        <View style={{
         borderWidth: 0.3, 
         borderBottomColor: '#ddd',
         height: 70,
         padding: 10,
         marginTop: 50,
         flexDirection: 'row'
          }}>
            <MaterialCommunityIcons 
                name="instagram" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
          @hevolsoft
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
                name="card-bulleted-settings-outline" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
          www.hevolsoft.com.br
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
                name="consolidate" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
          Localização da ISS: //open-notify.org/
        </Text>
        </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default About;