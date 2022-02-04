import * as React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { ModalHome } from "./ModalHome";
import { PantallaModal } from "./PantallaModal";


const HomeStack = createNativeStackNavigator();
export function ModalScreen() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen name="Home" component={ModalHome} />
      <HomeStack.Screen name="PantallaModal" component={PantallaModal} />
    </HomeStack.Navigator>
  );
}