import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableHighlightProps as RNTouchableHighlightProps
} from "react-native";
import styled from "styled-components/native";

import { withAnimated } from "hocs";
import { viewConfig, ViewProps } from "styles/config";

type TouchableHighlightProps = RNTouchableHighlightProps & ViewProps;

const TouchableHighlight = styled(RNTouchableHighlight)<
  TouchableHighlightProps
>(() => viewConfig);

const AnimatedTouchableHighlight = withAnimated<
  typeof RNTouchableHighlight,
  TouchableHighlightProps
>(RNTouchableHighlight, viewConfig);

export { TouchableHighlight, AnimatedTouchableHighlight };
