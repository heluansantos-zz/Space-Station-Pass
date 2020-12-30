import React, { useEffect,useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  ImageBackground
} from 'react-native';
import api from '../../Services/api';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import LottieView from 'lottie-react-native';

const Curiosity: React.FC = () => {
  

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
                name="space-station" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
        Velocidade em órbita: 7,66 km/s
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
        Altura da órbita: 408 km
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
                name="diameter-outline" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
        Volume da área de circulação:	358 m³
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
                name="rocket-launch-outline" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
        Data de lançamento: 20 / 11 / 1998
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
                name="cash-usd-outline" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
        Custo: 150 bilhões USD
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
                name="space-station" 
                size={50} 
                color="#fff" 
              />
        <Text style={{fontSize: 18,color: '#fff'}}>
        Fabricantes: 
        Estados Unidos, Rússia, Canadá, Japão, 
        (ESA), Bélgica, 
        Dinamarca, França, Alemanha, Itália, Países Baixos, Noruega, 
        Espanha, Suécia, Suíça, Reino Unido
        </Text>
        </View>
        </ImageBackground>
      </SafeAreaView>
    </>
  );
};

export default Curiosity;