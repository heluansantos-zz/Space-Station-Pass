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
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Map: React.FC = () => {
  const [localization, setLocalization] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  
  useEffect(()=>{
    const interval = setInterval(() => {
      getISS();
    }, 1000);
    // console.log(localization)
    return () => clearInterval(interval);
  });

  async function getISS() {
    const geolocation = await api.get('/iss-now.json');
    setLocalization(geolocation.data.iss_position);
  }

  return (
      <View style={{backgroundColor: '#000', height: '100%'}}>
      <StatusBar barStyle="light-content" />
        <View>
        <MapView
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            height: 900,
          }}
          loadingEnabled={true}
          region={{
          latitude: localization.latitude,
          longitude: localization.longitude,
          latitudeDelta: 100,
          longitudeDelta: 100,
          }}
          toolbarEnabled={true}
          zoomControlEnabled={true}
        >
          <Marker 
          coordinate={{
             latitude : localization.latitude, 
             longitude : localization.longitude,
            }}
            title={"Iss"}
            description={"Estação Espacial Internacional"}
            pinColor = {"purple"}
          >
            <View style={{
              borderColor: '#fff', 
              borderRadius: 50, 
              borderWidth: 1,
              height: 50,
              width: 50,
              alignContent: 'center',
              alignSelf: 'center',
              alignItems: 'center',
              }}>
              <MaterialCommunityIcons 
                name="satellite-variant" 
                size={30} 
                color="#fff" 
                style={{marginTop: 9}}
              />
            </View>
          </Marker>
        </MapView>
        </View>
      </View>
  );
};

export default Map;