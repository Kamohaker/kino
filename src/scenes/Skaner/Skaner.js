import React, { useState, useEffect } from 'react';
import { Text, View, StyleSheet, Button,Linking } from 'react-native';
import {NativeBaseProvider,IconButton} from 'native-base';
import { BarCodeScanner } from 'expo-barcode-scanner';
import { AntDesign } from "@expo/vector-icons"

export default function Scan({  navigation }) {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);

  useEffect(() => {
    (async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === 'granted');
    })();
  }, []);

  const handleBarCodeScanned = e => {
    setScanned(true);
    
    Linking.openURL(e.data).catch(err =>
      console.error('An error occured', err)
    );
  };

  if (hasPermission === null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <NativeBaseProvider>
      <View backgroundColor= "#262626">
    <IconButton
       backgroundColor="#171717"
       _icon={{
        color: '#dc2626',
        as: AntDesign,
        name: "back",
      }}
      onPress={() => {
        navigation.goBack()
  }}></IconButton>
    </View>
    <View style={styles.container}>
   
      <BarCodeScanner
        onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
        style={StyleSheet.absoluteFillObject}
      />
         <Text style={styles.tekst}>Skaner kodu QR</Text>
      {scanned && <Button title={'Naciśnij aby zeskanować ponownie'} onPress={() => setScanned(false)} />}
    </View>
    </NativeBaseProvider>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'center',
  },

  tekst:{
    fontSize: 24,
    marginLeft:110,
    marginBottom: 620,
 
    color:"white"
  }
});
