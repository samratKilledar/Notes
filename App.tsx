import React from 'react';
import {SafeAreaView,StyleSheet,Text} from 'react-native';
import { useEffect } from 'react';
import SplashScreen from 'react-native-splash-screen'

function App(): JSX.Element {
  useEffect(()=>{
    SplashScreen.hide();

  });
  return (
    <SafeAreaView style={{}}>
      <Text>Samrat</Text>
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
 
});

export default App;
