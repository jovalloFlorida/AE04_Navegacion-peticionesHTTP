import * as React from 'react';
import { Button, Text, View } from 'react-native';
import { LogBox } from 'react-native';

LogBox.ignoreLogs([
  "[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
]);

export function HomeStackScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Text style={{ fontSize: 32, marginBottom: 16 }}>Pantalla Stack</Text>
        <Button
          title=" Go to Profile"
          onPress={() => navigation.navigate('Profile')}
        />
      </View>
    );
  }