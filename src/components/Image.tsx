import { Image as RNImage } from "react-native";
import styled from "styled-components/native";

import { withAnimated } from "hocs";
import { imageConfig, ImageProps } from "styles/config";

const Image = styled(RNImage)<ImageProps>(() => imageConfig);
const AnimatedImage = withAnimated<typeof RNImage, ImageProps>(
  RNImage,
  imageConfig
);

export { Image, AnimatedImage };
