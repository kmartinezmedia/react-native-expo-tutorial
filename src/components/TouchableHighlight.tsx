import {
  TouchableHighlight as RNTouchableHighlight,
  TouchableHighlightProps as RNTouchableHighlightProps
} from "react-native";
import styled from "styled-components/native";

import { withAnimated } from "hocs";
import viewConfig, {
  ViewProps,
  AnimatedViewProps
} from "styles/config/viewConfig";
import { ExtractCollisions } from "styles/types";

type TouchableHighlightProps = ExtractCollisions<
  ViewProps,
  RNTouchableHighlightProps
>;
type AnimatedTouchableHighlightProps = ExtractCollisions<
  AnimatedViewProps,
  TouchableHighlightProps
>;

const TouchableHighlight = styled(RNTouchableHighlight)<
  TouchableHighlightProps
>(() => viewConfig);

const AnimatedTouchableHighlight = withAnimated<
  typeof RNTouchableHighlight,
  AnimatedTouchableHighlightProps
>(RNTouchableHighlight, viewConfig);

export { TouchableHighlight, AnimatedTouchableHighlight };
