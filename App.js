import * as React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import PokeApi from "./Utils/PokeApi";
import TiempoApi from "./Utils/TiempoApi";
import { ModalScreen } from "./Utils/ModalScreen";
import { StackScreen } from "./Utils/StackScreen";




const Tab = createBottomTabNavigator();
export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false }}>
        <Tab.Screen name="ModalName" component={ModalScreen} options={{ tabBarLabel: "Modal", tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="projector-screen" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="StackName" component={StackScreen} options={{ tabBarLabel: "Stack", tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="stack-overflow" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="API1" component={PokeApi} options={{ tabBarLabel: "API Pokemon", tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="api" color={color} size={size} />
            ),
          }}
        />
        <Tab.Screen name="API2" component={TiempoApi} options={{ tabBarLabel: "API Tiempo", tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="database-import" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
