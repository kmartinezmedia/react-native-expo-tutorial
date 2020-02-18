import { ImageProps as RNImageProps, ImageStyle } from "react-native";
import {
  compose,
  space,
  border,
  position,
  flexbox,
  layout
} from "styled-system";

import {
  ExtractCollisions,
  RNAnimatedImageProps,
  FlexboxProps,
  PositionProps,
  BorderProps,
  LayoutProps,
  SpaceProps,
  ThemeColor
} from "../types";

type AliasProps = {
  bg?: ThemeColor;
  align?: ImageStyle["alignItems"];
  justify?: ImageStyle["justifyContent"];
  wrap?: ImageStyle["flexWrap"];
};

type StyledProps = BorderProps &
  SpaceProps &
  FlexboxProps &
  PositionProps &
  LayoutProps &
  AliasProps;

// Extract native props that conflict with types in our custom style props
type ImageProps = ExtractCollisions<StyledProps, RNImageProps>;
type AnimatedImageProps = ExtractCollisions<StyledProps, RNAnimatedImageProps>;

export { ImageProps, AnimatedImageProps };

export default [compose(space, border, position, flexbox, layout)];
