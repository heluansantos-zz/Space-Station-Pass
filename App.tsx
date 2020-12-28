import React from 'react';
import {
  SafeAreaView,
  Text,
  StatusBar,
} from 'react-native';

declare const global: {HermesInternal: null | {}};

const App = () => {
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <Text style={{textAlign: 'center', fontSize: 30}}>
         Space Station Pass
        </Text>
      </SafeAreaView>
    </>
  );
};

export default App;
