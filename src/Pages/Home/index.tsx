import React, { useEffect,useState } from 'react';
import MapView, {
  Callout,
  Marker,
  PROVIDER_GOOGLE,
} from "react-native-maps";
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
} from 'react-native';
import api from '../../Services/api';

interface RegionX {
  latitude: string | number ;
  longitude: string | number;
  latitudeDelta: number;
  longitudeDelta: number;
};

const Home: React.FC = () => {
  const [localization, setLocalization] = useState<RegionX[]>({} as RegionX[]);
  
  useEffect(()=>{
    const interval = setInterval(() => {
      getISS();
    }, 1000);
    console.log(localization)
    return () => clearInterval(interval);
  });

  async function getISS() {
    const geolocation = await api.get('/iss-now.json');
    setLocalization(geolocation.data.iss_position);
  }

  function getInitialState() {
    return {
      region: {
        latitude: localization.latitude,
        longitude: localization.longitude,
        latitudeDelta: 10,
        longitudeDelta: 10,
      },
    };
  }
  
  function onRegionChange(region) {
    setLocalization(region);
  }

  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <View>
        <Text style={{textAlign: 'center'}}>
         Space Station Pass
        </Text>
        </View>
        <View>
        <MapView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: 300,
          }}
          loadingEnabled={true}
          region={{
          latitude: localization.latitude,
          longitude: localization.longitude,
          latitudeDelta: 10,
          longitudeDelta: 10,
          }}
          onRegionChange={onRegionChange}
        >
          <Marker 
          coordinate={{
             latitude : localization.latitude, 
             longitude : localization.longitude,
            }}
          >
            <Text style={{color: '#fff'}}>ISS</Text>
          </Marker>
        </MapView>
        </View>
        
      </SafeAreaView>
    </>
  );
};

export default Home;