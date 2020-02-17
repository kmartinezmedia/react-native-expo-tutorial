import React from "react";
import { StyleSheet, Text, View } from "react-native";
import { registerRootComponent } from "expo";

const App = () => {
  return (
    <View style={styles.container}>
      <Text>Open u App.tsx to start working on your app!</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});

export { App };
export default registerRootComponent(App);
