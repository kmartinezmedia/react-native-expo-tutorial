import { useRef, useEffect } from "react";
import { Animated } from "react-native";

import {
  DEFAULT_PADDING,
  ACTIVE_TAB_WIDTH,
  INACTIVE_TAB_WIDTH,
  INACTIVE_ICON_OFFSET
} from "./constants";

export type TabAnimation = {
  tabWidth: Animated.Value;
  iconTranslateX: Animated.Value;
  textOpacity: Animated.Value;
  nonNativeAnimation: Animated.AnimatedInterpolation;
};

const useTabAnimation = (isActive: boolean): TabAnimation => {
  const nonNativeAnimation = useRef(new Animated.Value(isActive ? 1 : 0))
    .current;
  const textOpacity = useRef(new Animated.Value(isActive ? 1 : 0)).current;
  const iconTranslateX = useRef(
    new Animated.Value(isActive ? DEFAULT_PADDING : INACTIVE_ICON_OFFSET)
  ).current;
  const tabWidth = useRef(
    new Animated.Value(isActive ? ACTIVE_TAB_WIDTH : INACTIVE_TAB_WIDTH)
  ).current;

  useEffect(() => {
    Animated.parallel([
      Animated.timing(textOpacity, {
        toValue: isActive ? 1 : 0,
        duration: 200,
        useNativeDriver: true
      }),
      Animated.timing(tabWidth, {
        duration: 200,
        toValue: isActive ? ACTIVE_TAB_WIDTH : INACTIVE_TAB_WIDTH
      }),
      Animated.timing(nonNativeAnimation, {
        duration: 200,
        toValue: isActive ? 1 : 0
      }),
      Animated.spring(iconTranslateX, {
        friction: 6, //  Controls "bounciness"/overshoot. Default 7.
        tension: 20, // Controls speed. Default 40.
        toValue: isActive ? DEFAULT_PADDING : INACTIVE_ICON_OFFSET
      })
    ]).start();
  }, [iconTranslateX, isActive, nonNativeAnimation, tabWidth, textOpacity]);

  return { nonNativeAnimation, tabWidth, iconTranslateX, textOpacity };
};

export default useTabAnimation;
