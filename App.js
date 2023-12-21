import React, { useState, useEffect, useRef } from 'react';
import { Text, View, StyleSheet, Button, StatusBar, AppState, Pressable } from 'react-native';
import { BarCodeScanner, PermissionStatus } from 'expo-barcode-scanner';

export default function App() {
  const [hasPermission, setHasPermission] = useState(null);
  const [scanned, setScanned] = useState(false);
  const [receivedData, setReceivedData] = useState(null)
  const appState = useRef(AppState.currentState);
  const [isCameraActive, setIsCameraActive] = useState(true); // Flag to control camera activation

  useEffect(() => {
    const getBarCodeScannerPermissions = async () => {
      const { status } = await BarCodeScanner.requestPermissionsAsync();
      setHasPermission(status === PermissionStatus.GRANTED);
    };

    getBarCodeScannerPermissions();

    AppState.addEventListener('change', handleAppStateChange);

    return () => {
      AppState.removeEventListener('change', handleAppStateChange);
    };
  }, []);

  const handleAppStateChange = (nextAppState) => {
    if (appState.current.match(/active/) && nextAppState !== 'active') {
      // App is going to background or inactive, stop the camera or do necessary actions
      setIsCameraActive(false);
      setScanned(false);
      setReceivedData(null);
    } else {
      setIsCameraActive(true);
    }

    appState.current = nextAppState;
  };

  const handleBarCodeScanned = ({ type, data }) => {

    console.log(type, data)
    setScanned(true);
    setReceivedData(`Bar code detected is ${data}`)
  };

  if (hasPermission == null) {
    return <Text>Requesting for camera permission</Text>;
  }
  if (hasPermission === false) {
    return <Text>No access to camera</Text>;
  }

  return (
    <View style={styles.screenContainer}>
      <View style={styles.cameraContainer}>

        {
          isCameraActive &&
          <BarCodeScanner
            onBarCodeScanned={scanned ? undefined : handleBarCodeScanned}
            style={StyleSheet.absoluteFillObject}
          />
        }

      </View>
      <View style={styles.infoContainer}>
        {scanned &&
          <Pressable style={styles.button} onPress={() => setScanned(false)} >
            <Text style={styles.text}>Tap to Scan Again</Text>
          </Pressable>
        }
        {receivedData != null ? <Text style={styles.textData} >
          {`${receivedData}`}
        </Text> : null}
      </View>
    </View >
  );
}

const styles = StyleSheet.create({

  screenContainer: {
    flex: 1,
    flexDirection: "column",
    marginTop: StatusBar.currentHeight
  },
  cameraContainer: {
    flex: 0.6,
    flexDirection: 'column',
  },
  infoContainer: {
    flex: 0.4,
    marginVertical: 20
  },
  textData: {
    justifyContent: "center",
    alignContent: "center",
    fontWeight: 'bold',
    fontSize: 20,
    color: "black",
    paddingTop: 30
  },
  button: {
    flexDirection: "column",
    marginHorizontal: "20%",
    alignItems: 'center',
    justifyContent: 'center',
    paddingVertical: 12,
    paddingHorizontal: 32,
    borderRadius: 4,
    elevation: 3,
    backgroundColor: 'black',
  },
  text: {
    fontSize: 16,
    lineHeight: 21,
    fontWeight: 'bold',
    letterSpacing: 0.25,
    color: 'white',
  },
});
