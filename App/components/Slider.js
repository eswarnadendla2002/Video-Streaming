import {
  View,
  Text,
  FlatList,
  StyleSheet,
  Image,
  Dimensions,
} from "react-native";
import React, { useEffect, useState } from "react";

export default function Slider() {
  const [sliderList, setSliderList] = useState([]);

  useEffect(() => {
    setSliderList([
      {
        id: "1",
        name: "slider1",
        imageUrl:
          "https://cdn.pixabay.com/photo/2023/02/03/05/18/abstract-7764192_1280.jpg",
      },
      {
        id: "2",
        name: "slider2",
        imageUrl:
          "https://cdn.pixabay.com/photo/2023/02/03/04/57/swirls-7764142_1280.jpg",
      },
      {
        id: "3",
        name: "slider3",
        imageUrl:
          "https://cdn.pixabay.com/photo/2015/12/09/01/02/mandalas-1084082_1280.jpg",
      },
    ]);
  }, []);

  return (
    <View style={{ paddingTop: 20 }}>
      <FlatList
        data={sliderList}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.sliderImage} />
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  sliderImage: {
    width: Dimensions.get("screen").width * 0.88,
    height: 170,
    marginRight: 20,
    borderRadius: 15,
  },
});
