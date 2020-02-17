import React from "react";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";

import { AnimatedLinearGradient } from "../LinearGradient";
import { AnimatedText } from "../Text";
import { TouchableHighlight } from "../TouchableHighlight";
import { AnimatedView } from "../View";
import {
  INACTIVE_TEXT_OFFSET,
  ACTIVE_TEXT_OFFSET,
  ACTIVE_ICON_COLOR,
  ACTIVE_GRADIENT_START,
  ACTIVE_GRADIENT_END,
  INACTIVE_GRADIENT_START,
  INACTIVE_GRADIENT_END,
  INACTIVE_ICON_COLOR
} from "./constants";
import TabIcon from "./TabIcon";
import useTabAnimation from "./useTabAnimation";

type Props = {
  isActive: boolean;
  goToTab: BottomTabBarProps["navigation"]["navigate"];
  name: string;
};

const Tab = (props: Props) => {
  const { isActive, name, goToTab } = props;
  const {
    nonNativeAnimation,
    tabWidth,
    iconTranslateX,
    textOpacity
  } = useTabAnimation(isActive);

  const iconColor = nonNativeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [INACTIVE_ICON_COLOR, ACTIVE_ICON_COLOR]
  });

  const gradientStart = nonNativeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [INACTIVE_GRADIENT_START, ACTIVE_GRADIENT_START]
  });

  const gradientEnd = nonNativeAnimation.interpolate({
    inputRange: [0, 1],
    outputRange: [INACTIVE_GRADIENT_END, ACTIVE_GRADIENT_END]
  });

  const textOffset = textOpacity.interpolate({
    inputRange: [0, 1],
    outputRange: [INACTIVE_TEXT_OFFSET, ACTIVE_TEXT_OFFSET]
  });

  return (
    <TouchableHighlight
      borderRadius="medium"
      height={48}
      onPress={() => goToTab(name)}
      overflow="hidden"
      underlayColor="transparent"
    >
      <AnimatedView
        style={{ width: tabWidth }}
        borderRadius="medium"
        overflow="hidden"
      >
        <AnimatedLinearGradient
          color1={gradientStart}
          color2={gradientEnd}
          width="100%"
          height={48}
          alignItems="center"
          justifyContent="flex-start"
          flexDirection="row"
        >
          <AnimatedView
            position="absolute"
            style={{ transform: [{ translateX: iconTranslateX }] }}
          >
            <TabIcon name={name} iconColor={iconColor} />
          </AnimatedView>
          <AnimatedText
            variant="body1"
            color={isActive ? "primary" : "textLight"}
            textAlign="left"
            numberOfLines={1}
            ellipsizeMode="clip"
            style={{
              opacity: textOpacity,
              transform: [
                {
                  translateX: textOffset
                }
              ]
            }}
          >
            {name}
          </AnimatedText>
        </AnimatedLinearGradient>
      </AnimatedView>
    </TouchableHighlight>
  );
};

export default Tab;
