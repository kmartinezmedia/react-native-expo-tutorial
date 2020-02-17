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
  FlexboxProps,
  PositionProps,
  BorderProps,
  LayoutProps,
  SpaceProps,
  ThemeColor
} from "../types";

interface AliasProps {
  bg?: ThemeColor;
  align?: ImageStyle["alignItems"];
  justify?: ImageStyle["justifyContent"];
  wrap?: ImageStyle["flexWrap"];
}

export type ImageProps = Omit<
  RNImageProps,
  | "borderRadius"
  | "borderTopLeftRadius"
  | "borderTopRightRadius"
  | "borderBottomLeftRadius"
  | "borderBottomRightRadius"
> &
  BorderProps &
  SpaceProps &
  FlexboxProps &
  PositionProps &
  LayoutProps &
  AliasProps;

export default [compose(space, border, position, flexbox, layout)];
