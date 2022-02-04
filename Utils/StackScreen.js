import * as React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { HomeStackScreen } from "./HomeStackScreen";
import { NotificationsScreen } from "./NotificationsScreen";
import { ProfileScreen } from "./ProfileScreen";
import { SettingsScreen } from "./SettingsScreen";


const Stack = createStackNavigator();
export function StackScreen() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Stack" component={HomeStackScreen} />
      <Stack.Screen name="Notifications" component={NotificationsScreen} />
      <Stack.Screen name="Profile" component={ProfileScreen} />
      <Stack.Screen name="Settings" component={SettingsScreen} />
    </Stack.Navigator>
  );
}