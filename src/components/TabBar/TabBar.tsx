import React, { useRef, useEffect, useContext } from "react";
import { Animated, Dimensions } from "react-native";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import { useSafeArea } from "react-native-safe-area-context";

import { TabBarContext } from "providers";

import { AnimatedView } from "../View";
import { DEFAULT_PADDING } from "./constants";
import Tab from "./Tab";

export const { height: SCREEN_HEIGHT } = Dimensions.get("window");

const TabBar = (props: BottomTabBarProps) => {
  const { index: activeIndex, routes } = props.state;
  const translateY = useRef(new Animated.Value(0)).current;
  const insets = useSafeArea();
  const paddingBottom = insets.bottom + DEFAULT_PADDING;

  const { isTabBarVisible } = useContext(TabBarContext);

  useEffect(() => {
    Animated.spring(translateY, {
      toValue: isTabBarVisible ? 0 : 114,
      friction: 5.65,
      tension: 10,
      useNativeDriver: true
    }).start();
  }, [isTabBarVisible, translateY]);

  return (
    <AnimatedView
      position="absolute"
      bottom={0}
      flexDirection="row"
      justifyContent="space-around"
      alignItems="center"
      bg="white"
      width="100%"
      px={4}
      pt={3}
      pb={paddingBottom}
      style={{ transform: [{ translateY }] }}
    >
      {routes.map(({ key, name }, index) => {
        return (
          <Tab
            key={key}
            isActive={index === activeIndex}
            name={name}
            goToTab={props.navigation.navigate}
          />
        );
      })}
    </AnimatedView>
  );
};

export default TabBar;
