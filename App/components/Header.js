import { View, Text, Image, StyleSheet } from "react-native";
import React from "react";
import Colors from "../Shared/Colors";

export default function Header() {
  return (
    <View style={styles.flex}>
      <View>
        <Text style={styles.welcome}>Welcome</Text>
        <Text style={styles.username}>Eswar Nadendla</Text>
      </View>
      <View>
        <Image
          style={styles.userImage}
          source={{
            uri: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSgF2suM5kFwk9AdFjesEr8EP1qcyUvah8G7w&usqp=CAU",
          }}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  flex: {
    // flex: 1,
    flexDirection: "row",
    justifyContent: "space-between",
  },
  userImage: {
    width: 45,
    height: 45,
    borderRadius: 50,
  },
  welcome: {
    fontSize: 20,
    fontWeight: "bold",
    color: Colors.white,
  },

  username: {
    color: Colors.white,
    fontSize: 15,
  },
});
