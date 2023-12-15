import { View, Text, ScrollView } from "react-native";
import React from "react";
import Header from "../components/Header";
import Slider from "../components/Slider";
import Playlist from "../components/Playlist";

import GridList from "../components/GridList";

export default function HomeScreen() {
  return (
    <View>
      <Header />
      <Slider />
      <Playlist />
      <GridList />
    </View>
  );
}
