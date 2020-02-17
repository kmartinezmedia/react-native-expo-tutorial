import styled from "styled-components/native";
import { Text as RNText } from "react-native";

import { withAnimated } from "hocs";
import { textConfig, TextProps } from "styles/config";

const Text = styled(RNText)<TextProps>(() => textConfig);
const AnimatedText = withAnimated<TextProps>(Text);

export { Text, AnimatedText };
