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

const Home: React.FC = () => {
  const [localization, setLocalization] = useState({
    latitude: 0,
    longitude: 0,
    latitudeDelta: 0,
    longitudeDelta: 0,
  });
  const [astros, setAstros] = useState({
    message: "",
    number: 0,
    people: {
      craft: "", 
      name: "",
    },
  });
  
  useEffect(()=>{
    const interval = setInterval(() => {
      getISS();
    }, 1000);
    // console.log(localization)
    return () => clearInterval(interval);
  });

  useEffect(()=>{
    getAstros();
  },[])

  async function getISS() {
    const geolocation = await api.get('/iss-now.json');
    setLocalization(geolocation.data.iss_position);
  }

  async function getAstros() {
    const astrosX = await api.get('/astros.json');
    setAstros(astrosX.data);
    console.log(astros)
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
            description={"description"}
            pinColor = {"purple"}
          >
            <Text style={{color: '#fff'}}>ISS</Text>
          </Marker>
        </MapView>
        </View>
        <View style={{marginTop: 350}}>
            <Text>Aeronave :{astros.people[0].craft}</Text>
            <Text>Astronalta :{astros.people[0].name}</Text>
            <Text>Aeronave :{astros.people[1].craft}</Text>
            <Text>Astronalta :{astros.people[1].name}</Text>
            <Text>Aeronave :{astros.people[2].craft}</Text>
            <Text>Astronalta :{astros.people[2].name}</Text>
            <Text>Aeronave :{astros.people[3].craft}</Text>
            <Text>Astronalta :{astros.people[3].name}</Text>
            <Text>Aeronave :{astros.people[4].craft}</Text>
            <Text>Astronalta :{astros.people[4].name}</Text>
            <Text>Aeronave :{astros.people[5].craft}</Text>
            <Text>Astronalta :{astros.people[5].name}</Text>
            <Text>Aeronave :{astros.people[6].craft}</Text>
            <Text>Astronalta :{astros.people[6].name}</Text>
        </View>
      </SafeAreaView>
    </>
  );
};

export default Home;