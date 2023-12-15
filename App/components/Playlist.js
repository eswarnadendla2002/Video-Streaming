import { View, Text, StyleSheet, FlatList, Image } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";

export default function Playlist() {
  const courseList = [
    {
      id: 1,
      name: "Angular Tutorials",
      imageUrl:
        "https://cdn.pixabay.com/photo/2017/09/24/02/02/emery-2780656_1280.jpg",
    },
    {
      id: 2,
      name: "React Tutorials",
      imageUrl:
        "https://cdn.pixabay.com/photo/2023/03/06/21/30/men-7834548_1280.jpg",
    },
    {
      id: 3,
      name: "Vue Tutorials",
      imageUrl:
        "https://cdn.pixabay.com/photo/2016/11/08/05/20/sunset-1807524_1280.jpg",
    },
  ];
  return (
    <View style={styles.container}>
      <Text style={styles.heading}>Top Course List</Text>
      <FlatList
        data={courseList}
        horizontal={true}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View>
            <Image source={{ uri: item.imageUrl }} style={styles.imageCourse} />
            <Text style={styles.title}>{item.name}</Text>
          </View>
        )}
      ></FlatList>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 15,
  },
  heading: {
    fontSize: 20,
    color: Colors.white,
    fontWeight: "bold",
  },
  imageCourse: {
    width: 200,
    height: 130,
    borderRadius: 10,
    marginRight: 15,
    marginTop: 5,
  },
  title: {
    color: Colors.white,
    fontSize: 15,
    textAlign: "center",
    padding: 5,
  },
});
