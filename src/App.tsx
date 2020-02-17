import React from "react";
import { AnimatedView, Text, View } from "components";
import { registerRootComponent } from "expo";

const App = () => (
  <AnimatedView hasFlexGrow justify="center">
    <Text variant="headline1" mb={3}>
      Hello World
    </Text>
    <View isColumn>
      <View isRow>
        <View hasFlexGrow bg="secondary" size={50} />
        <View bg="primary2" size={50} />
        <View bg="dark" size={50} />
      </View>
      <View isRow>
        <View bg="dark" size={50} />
        <View bg="primary2" size={50} />
        <View hasFlexGrow bg="primary" size={50} />
      </View>
    </View>
  </AnimatedView>
);

export { App };
export default registerRootComponent(App);
