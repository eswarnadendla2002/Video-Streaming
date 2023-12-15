import { useRoute } from "@react-navigation/native";
import React, { useCallback, useEffect, useState } from "react";
import { Dimensions, StyleSheet, Text, View } from "react-native";
import YoutubePlayer from "react-native-youtube-iframe";
import Color from "../Shared/Colors";
const playerWidth = Dimensions.get("screen").width;
function Player({ param }) {
  const [playing, setPlaying] = useState(false);
  const [videoData, setVideoData] = useState([]);
  useEffect(() => {
    console.log("Param:", param);
    setVideoData(param.videoData);
  }, []);
  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      //   Alert.alert("video has finished playing!");
    }
  }, []);
  return (
    <View style={styles.webviewContainer}>
      <YoutubePlayer
        height={200}
        play={playing}
        videoId={videoData.url}
        onChangeState={onStateChange}
      />
      <Text style={styles.title}>{videoData.name}</Text>
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    width: 200,
    height: 160,
  },
  title: {
    color: Color.white,
    fontSize: 20,
    fontWeight: "bold",
  },
});
export default Player;
