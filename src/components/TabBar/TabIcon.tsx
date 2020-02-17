import React from "react";
import { Animated } from "react-native";

import { useCachedUri } from "hooks";

import { AnimatedIcon } from "../Icon";
import Avatar from "../Avatar";
import { View } from "../View";
import { ICON_SIZE } from "./constants";

type Props = {
  name: string;
  iconColor: Animated.AnimatedInterpolation;
};

const TabIcon = ({ name, iconColor }: Props) => {
  const avatarUri = useCachedUri(
    "https://graph.facebook.com/10214504135732915/picture?width=800"
  );

  const iconProps = {
    style: { color: iconColor },
    size: ICON_SIZE
  };

  switch (name) {
    case "Feed":
      return <AnimatedIcon name="layout-grid" {...iconProps} />;

    case "Chats":
      return (
        <View>
          <AnimatedIcon name="message-square" {...iconProps} />
        </View>
      );

    case "Events":
      return <AnimatedIcon name="health-activity" {...iconProps} />;

    case "Profile":
      return <Avatar size={iconProps.size} uri={avatarUri} />;

    default:
      return null;
  }
};

export default TabIcon;
