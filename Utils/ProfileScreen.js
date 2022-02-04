import * as React from 'react';
import { Button, Text, View } from 'react-native';


export function ProfileScreen({ navigation }) {
    return (
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
        <Button 
          title=" Go to Notifications "
          onPress={() => navigation.navigate('Notifications')}
        />
        <Text style={{ padding: 10}}/>
        <Button 
        title=" Go back " 
        onPress={() => navigation.goBack()} 
        />
      </View>
    );
  }