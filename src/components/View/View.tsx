import { View as RNView, Animated } from "react-native";
import styled from "styled-components/native";

import viewConfig, {
  ViewProps,
  AnimatedViewProps
} from "styles/config/viewConfig";

const View = styled(RNView)<ViewProps>(() => viewConfig);
const AnimatedView = styled(Animated.View)<AnimatedViewProps>(() => viewConfig);

export { View, AnimatedView };
