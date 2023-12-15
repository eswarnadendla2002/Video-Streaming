import { useNavigation } from "@react-navigation/native";
import React from "react";
import {
  Dimensions,
  FlatList,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from "react-native";

import Color from "../Shared/Colors";
import Header from "./Header";
import Slider from "./Slider";
import Playlist from "./Playlist";

function GridList() {
  const navigation = useNavigation();
  const VideoList = [
    {
      id: 1,
      name: "Make Video Using ChatGPT",
      imageUrl: "https://i.ytimg.com/vi/N7xEs9E9Y4A/maxresdefault.jpg",
      url: "N7xEs9E9Y4A",
    },
    {
      id: 2,
      name: "10 Skills AI made useless",
      imageUrl: "https://i.ytimg.com/vi/EgEW5KP6I2A/maxresdefault.jpg",
      url: "N7xEs9E9Y4A",
    },
    {
      id: 3,
      name: "UI Design Tutorial",
      imageUrl: "https://i.ytimg.com/vi/P1_ciTwn6fE/maxresdefault.jpg",
      url: "P1_ciTwn6fE",
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Popular Video</Text>
      <FlatList
        // ListHeaderComponent={
        //   <>
        //     <Header />
        //     <Slider />
        //     <Playlist />
        //   </>
        // }
        data={VideoList}
        numColumns={2}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate("playVideo", { videoData: item })
            }
          >
            <Image source={{ uri: item.imageUrl }} style={styles.image} />
            <Text style={styles.nameText}>{item.name}</Text>
          </TouchableOpacity>
        )}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    fontSize: 20,
    color: Color.white,
    fontWeight: "bold",
    marginBottom: 10,
  },
  image: {
    width: Dimensions.get("screen").width * 0.415,
    height: 100,
    margin: 5,
    borderRadius: 7,
  },
  nameText: {
    color: Color.white,
    marginBottom: 10,
    marginLeft: 5,
    fontSize: 12,
  },
});

export default GridList;
