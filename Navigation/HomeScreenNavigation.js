import * as React from "react";
import { View, Text } from "react-native";

import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../App/Screens/HomeScreen";
import Player from "../App/components/Player";
export default function HomeScreenNavigation() {
  const Stack = createNativeStackNavigator();
  return (
    <View>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="playVideo" component={Player} />
      </Stack.Navigator>
    </View>
  );
}
