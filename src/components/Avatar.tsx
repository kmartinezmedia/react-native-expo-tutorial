import React from "react";

import { ImageProps } from "styles/config";

import { Image } from "./Image";
import { View } from "./View";

interface AvatarProps extends Omit<ImageProps, "source"> {
  size?: number;
  rounded?: boolean;
  uri: string | undefined;
}

const Avatar = (props: AvatarProps) => {
  const { size = 48, uri, rounded = false, ...otherProps } = props;

  return (
    <View
      borderRadius={rounded ? size / 2 : "medium"}
      overflow="hidden"
      size={size}
    >
      {uri ? (
        <Image bg="placeholder" size={size} source={{ uri }} {...otherProps} />
      ) : (
          <View bg="placeholder" size={size} />
        )}
    </View>
  );
};

export default Avatar;
