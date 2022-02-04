import * as React from 'react';
import { Button, Text, View } from 'react-native';


export function PantallaModal({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 32, marginBottom: 16 }}>Pantalla Modal</Text>
        <Button onPress={() => navigation.goBack()} title="Descartar" />
      </View>
    );
  }