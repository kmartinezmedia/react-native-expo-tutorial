import React from "react";

import { Image } from "./Image";
import { View } from "./View";

import { ImageProps } from "~/styles/config/imageConfig";

interface AvatarProps extends Omit<ImageProps, "source"> {
  size?: number;
  rounded?: boolean;
  uri: string | undefined;
}

const Avatar = (props: AvatarProps) => {
  const { size = 48, uri, rounded = false, ...otherProps } = props;

  return (
    <View overflow="hidden" size={size} style={{ borderRadius: size / 2 }}>
      {uri ? (
        <Image bg="placeholder" size={size} source={{ uri }} {...otherProps} />
      ) : (
          <View bg="placeholder" size={size} />
        )}
    </View>
  );
};

export default Avatar;
