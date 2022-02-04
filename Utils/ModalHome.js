import * as React from 'react';
import { Button, Text, View } from 'react-native';


export function ModalHome({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
        <Text style={{ fontSize: 32, marginBottom: 16 }}>Home Screen</Text>
        <Button
          onPress={() => navigation.navigate("PantallaModal")}
          title="Abrir Modal"
        />
      </View>
    );
  }