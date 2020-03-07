import styled from "styled-components/native";
import { Text as RNText, Animated } from "react-native";

import textConfig, {
  TextProps,
  AnimatedTextProps
} from "~/styles/config/textConfig";

const Text = styled(RNText)<TextProps>(() => textConfig);
const AnimatedText = styled(Animated.Text)<AnimatedTextProps>(() => textConfig);

export { Text, AnimatedText };
