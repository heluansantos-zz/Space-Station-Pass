import React, { useEffect,useState } from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
  View,
  FlatList,
} from 'react-native';
import api from '../../Services/api';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Pass: React.FC = () => {
  const [pass, setPass] = useState([]);
  useEffect(()=>{
    getPass();
  },[])

  async function getPass() {
    const passX = await api.get('/iss-pass.json?lat=LAT&lon=LON');
    setPass(passX.data);
    console.log(passX.data)
  }
  return (
    <>
      <StatusBar barStyle="light-content" />
      <SafeAreaView style={{backgroundColor: '#000', height: '100%'}}>
      <FlatList
        data={pass}
        style={{marginTop: 40}}
        renderItem={(item)=>(
        <View 
        style={{
          borderWidth: 1, 
          borderColor: '#ddd', 
          borderRadius: 8,
          height: 100,
          marginBottom: 3,
          padding: 10,
          marginTop: 3,
          flexDirection: 'row'
          }}>
            <MaterialCommunityIcons 
                name="account-tie" 
                size={50} 
                color="#fff" 
                style={{marginTop: 9}}
              />
        <Text style={{fontSize: 18,color: '#fff'}}>{item.item.name}</Text>
        </View>
        )}
        keyExtractor={item => item.id}
      />
      </SafeAreaView>
    </>
  );
};

export default Pass;