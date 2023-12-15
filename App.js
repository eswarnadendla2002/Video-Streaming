import { StyleSheet, Text, View } from "react-native";
import HomeScreen from "./App/Screens/HomeScreen";
import Colors from "./App/Shared/Colors";
import { NavigationContainer } from "@react-navigation/native";

export default function App() {
  return (
    <NavigationContainer>
      <View style={styles.container}>
        <HomeScreen />
      </View>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    paddingTop: 40,
    backgroundColor: Colors.blank,
  },
});
