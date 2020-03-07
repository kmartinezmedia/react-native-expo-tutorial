import { Image as RNImage, Animated } from "react-native";
import styled from "styled-components/native";

import imageConfig, {
  ImageProps,
  AnimatedImageProps
} from "~/styles/config/imageConfig";

const Image = styled(RNImage)<ImageProps>(() => imageConfig);
const AnimatedImage = styled(Animated.Image)<AnimatedImageProps>(
  () => imageConfig
);

export { Image, AnimatedImage };
