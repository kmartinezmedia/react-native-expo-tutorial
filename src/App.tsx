import React from "react";
import { registerRootComponent, AppLoading } from "expo";
import { ThemeProvider } from "styled-components/native";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import { images, fonts } from "~/assets";
import { AnimatedView, TabBar, Text, View } from "~/components";
import { useAssetsLoader } from "~/hooks";
import { TabBarProvider } from "~/providers";
import { theme } from "~/styles";
import { LogConfig } from "~/configs";

if (__DEV__) {
  LogConfig.configure();
}

const Tabs = createBottomTabNavigator();

const App = () => {
  const { isLoadingAssets, ...callbackFns } = useAssetsLoader({
    images: Object.values(images),
    fonts
  });
  if (isLoadingAssets) return <AppLoading {...callbackFns} />;

  return (
    <ThemeProvider theme={theme}>
      <TabBarProvider>
        <NavigationContainer>
          <Tabs.Navigator tabBar={props => <TabBar {...props} />}>
            <Tabs.Screen name="Events" component={Placeholder} />
            <Tabs.Screen name="Feed" component={Placeholder} />
            <Tabs.Screen name="Chats" component={Placeholder} />
            <Tabs.Screen name="Profile" component={Placeholder} />
          </Tabs.Navigator>
        </NavigationContainer>
      </TabBarProvider>
    </ThemeProvider>
  );
};

const Placeholder = () => (
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
