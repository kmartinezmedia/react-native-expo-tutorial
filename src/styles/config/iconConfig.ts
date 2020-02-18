import {
  compose,
  space,
  border,
  position,
  flexbox,
  layout,
  color
} from "styled-system";
import { css } from "@styled-system/css";
import {
  TextProps,
  TouchableHighlightProps,
  TouchableWithoutFeedbackProps
} from "react-native";

import theme from "../theme";
import {
  ExtractCollisions,
  RNAnimatedTextProps,
  ColorProps,
  IconName,
  BorderProps,
  SpaceProps,
  FlexboxProps,
  PositionProps,
  LayoutProps
} from "../types";

type StyledProps = {
  name: IconName;
  size: string;
} & BorderProps &
  SpaceProps &
  FlexboxProps &
  PositionProps &
  LayoutProps &
  ColorProps;

// https://docs.expo.io/versions/v36.0.0/guides/icons/#properties
// Includes any Text, TouchableHighlight or TouchableWithoutFeedback properties
type RNIconProps = TextProps &
  TouchableHighlightProps &
  TouchableWithoutFeedbackProps;

// Extract native props that conflict with types in our custom style props
type IconProps = ExtractCollisions<StyledProps, RNIconProps>;
type AnimatedIconProps = ExtractCollisions<StyledProps, RNAnimatedTextProps>;

export { IconProps, AnimatedIconProps };
export default [
  css({
    color: theme.colors.textLight,
    size: 24
  }) as Record<string, any>,
  compose(space, border, position, flexbox, layout, color)
];
