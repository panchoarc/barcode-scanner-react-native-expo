
# Barcode Scanner App using React Native and Expo

This application is a barcode scanner POC (proof of concept) built with React Native and Expo. It utilizes [Expo's barcode scanner](https://docs.expo.dev/versions/latest/sdk/bar-code-scanner/) module to scan various types of barcodes.

## Prerequisites

Before getting started, ensure you have the following:

- Node.js installed on your machine.
- Expo CLI installed globally. If not, you can install it using npm:
```bash
npm install -g expo-cli
```
## Clone the Repository:

```bash
git  clone  https://github.com/panchoarc/barcode-scanner-react-native-expo.git
```
## Navigate to the Project Directory:
```bash
cd  barcode-scanner-react-native-expo
```

## Navigate to the Project Directory:

```bash
npm  install
# or
yarn  install
```

## Start the Expo Development Server:

```bash
expo  start
```

## Run the App:

Once the Expo development server starts, it will open a new browser window displaying the Expo Developer Tools. You can run the app on an iOS/Android simulator or a physical device using the Expo Go app.

To run on an iOS/Android simulator:

 - Choose the desired simulator option from the Expo Developer Tools.
   
  - Click on the "Run on iOS simulator" or "Run on Android
   device/emulator" button.

To run on a physical device:

 - Install the Expo Go app on your device from the App Store (iOS) or
   Google Play Store (Android).
   
  
 - Scan the QR code displayed in the Expo Developer Tools using the Expo
   Go app.

## Using the Barcode Scanner:

Once the app is running, you'll be able to access the barcode scanner feature. Explore the app and use the barcode scanner functionality to scan different types of barcodes.

# Building with EAS (Expo Application Services)

## 1. Install EAS CLI:

If you haven't already installed the EAS CLI, do so using npm:

    npm install -g eas-cli

## 2. Configure EAS Build:

    eas configure

## 3. Build the Application:

    eas build -p android -t apk
    # or
    eas build -p ios -t archive

Replace -p with the platform (android or ios) and -t with the desired build type.