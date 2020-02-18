import { TextProps as RNTextProps } from "react-native";
import {
  compose,
  space,
  typography,
  layout,
  color,
  variant
} from "styled-system";

import {
  ExtractCollisions,
  RNAnimatedTextProps,
  SpaceProps,
  LayoutProps,
  TypographyProps,
  ColorProps,
  ThemeFont,
  ThemeFontSize,
  ThemeFontWeight,
  ThemeLineHeight,
  ThemeLetterSpacing,
  VariantConfig
} from "../types";

type VariantKeys = ThemeFontSize;

type StyledProps = TypographyProps &
  SpaceProps &
  LayoutProps &
  ColorProps & {
    variant?: VariantKeys;
  };

const variantsConfig: VariantConfig<
  VariantKeys,
  {
    fontFamily: ThemeFont;
    fontSize: ThemeFontSize;
    fontWeight: ThemeFontWeight;
    lineHeight: ThemeLineHeight;
    letterSpacing: ThemeLetterSpacing;
  }
> = {
  variants: {
    headline1: {
      fontSize: "headline1",
      lineHeight: "headline1",
      letterSpacing: "headline1",
      fontFamily: "semibold",
      fontWeight: "semibold"
    },
    headline2: {
      fontSize: "headline2",
      lineHeight: "headline2",
      letterSpacing: "headline2",
      fontFamily: "semibold",
      fontWeight: "semibold"
    },
    headline3: {
      fontSize: "headline3",
      lineHeight: "headline3",
      letterSpacing: "headline3",
      fontFamily: "semibold",
      fontWeight: "semibold"
    },
    subline1: {
      fontSize: "subline1",
      lineHeight: "subline1",
      letterSpacing: "subline1",
      fontFamily: "extrabold",
      fontWeight: "extrabold"
    },
    body1: {
      fontSize: "body1",
      lineHeight: "body1",
      letterSpacing: "body1",
      fontFamily: "medium",
      fontWeight: "medium"
    },
    body2: {
      fontSize: "body2",
      lineHeight: "body2",
      letterSpacing: "body2",
      fontFamily: "medium",
      fontWeight: "medium"
    }
  }
};

// Extract native props that conflict with types in our custom style props
type TextProps = ExtractCollisions<StyledProps, RNTextProps>;
type AnimatedTextProps = ExtractCollisions<StyledProps, RNAnimatedTextProps>;

export { TextProps, AnimatedTextProps };
export default [
  variant(variantsConfig),
  compose(space, typography, layout, color)
];
