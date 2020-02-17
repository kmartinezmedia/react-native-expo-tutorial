import { TextProps as RNTextProps } from "react-native";
import { compose, space, system, variant } from "styled-system";

import {
  AliasConfig,
  SpaceProps,
  ThemeColor,
  ThemeFont,
  ThemeFontSize,
  ThemeFontWeight,
  ThemeLineHeight,
  ThemeLetterSpacing,
  VariantConfig
} from "../types";

interface AliasProps {
  color?: ThemeColor;
  fontFamily?: ThemeFont;
  fontSize?: ThemeFontSize;
  fontWeight?: ThemeFontWeight;
  lineHeight?: ThemeLineHeight;
  letterSpacing?: ThemeLetterSpacing;
}

type VariantKeys = ThemeFontSize;

interface TextProps extends AliasProps, SpaceProps, RNTextProps {
  variant?: VariantKeys;
}

const variantsConfig: VariantConfig<VariantKeys, AliasProps> = {
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

const aliasConfig: AliasConfig<AliasProps> = {
  color: {
    property: "color",
    scale: "colors"
  },
  fontFamily: {
    property: "fontFamily",
    scale: "fonts"
  },
  fontSize: {
    property: "fontSize",
    scale: "fontSizes"
  },
  fontWeight: {
    property: "fontWeight",
    scale: "fontWeights"
  },
  lineHeight: {
    property: "lineHeight",
    scale: "lineHeights"
  },
  letterSpacing: {
    property: "letterSpacing",
    scale: "letterSpacings"
  }
};

export { TextProps };
export default [variant(variantsConfig), compose(space, system(aliasConfig))];
