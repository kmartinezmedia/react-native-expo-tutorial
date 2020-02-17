import React from "react";
import { registerRootComponent, AppLoading } from "expo";
import { ThemeProvider } from "styled-components/native";

import { images, fonts } from "assets";
import { AnimatedView, Text, View } from "components";
import { useAssetsLoader } from "hooks";
import { theme } from "styles";

const App = () => {
  const { isLoadingAssets, ...callbackFns } = useAssetsLoader({
    images: Object.values(images),
    fonts
  });
  if (isLoadingAssets) return <AppLoading {...callbackFns} />;

  return (
    <ThemeProvider theme={theme}>
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
    </ThemeProvider>
  );
};

export { App };
export default registerRootComponent(App);
