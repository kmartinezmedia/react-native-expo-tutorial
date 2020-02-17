import { StyleProp } from "react-native";
import { DefaultTheme } from "styled-components/native";
import {
  SpaceProps as SSpaceProps,
  BorderProps as SBorderProps,
  FlexboxProps as SFlexboxProps,
  PositionProps as SPositionProps,
  LayoutProps as SLayoutProps,
  ThemeValue as SThemeValue,
  ConfigStyle
} from "styled-system";

export type VariantConfig<T extends string, K> = Record<
  "variants",
  Record<T, K>
>;
export type AliasConfig<T> = Record<keyof T, ConfigStyle | boolean>;
export type ModifierConfig<T extends string, K> = Record<T, StyleProp<K>>;
export type ModifierProps<T extends string> = Partial<Record<T, boolean>>;

export type BorderProps = SBorderProps<DefaultTheme>;
export type SpaceProps = SSpaceProps<DefaultTheme>;
export type FlexboxProps = SFlexboxProps<DefaultTheme>;
export type PositionProps = SPositionProps<DefaultTheme>;
export type LayoutProps = SLayoutProps<DefaultTheme>;

export type ThemeValue<T extends keyof DefaultTheme> = SThemeValue<
  T,
  DefaultTheme
>;
export type ThemeBorderRadius = ThemeValue<"radii">;
export type ThemeFontSize = ThemeValue<"fontSizes">;
export type ThemeFont = ThemeValue<"fonts">;
export type ThemeFontWeight = ThemeValue<"fontWeights">;
export type ThemeLineHeight = ThemeValue<"lineHeights">;
export type ThemeLetterSpacing = ThemeValue<"letterSpacings">;
export type ThemeGradient = ThemeValue<"gradients">;
export type ThemeColor =
  | "primary"
  | "primary2"
  | "primaryLight"
  | "secondary"
  | "dark"
  | "textDark"
  | "textMedium"
  | "textLight"
  | "textLightest"
  | "darkGreys.0"
  | "darkGreys.1"
  | "darkGreys.2"
  | "darkGreys.3"
  | "darkGreys.4"
  | "mediumGrey"
  | "mediumGreys.0"
  | "mediumGreys.1"
  | "mediumGreys.2"
  | "mediumGreys.3"
  | "mediumGreys.4"
  | "lightGrey"
  | "lightGreys.0"
  | "lightGreys.1"
  | "lightGreys.2"
  | "lightGreys.3"
  | "lightGreys.4"
  | "extraLightGrey"
  | "extraLightGreys.0"
  | "extraLightGreys.1"
  | "extraLightGreys.2"
  | "extraLightGreys.3"
  | "extraLightGreys.4"
  | "white"
  | "success"
  | "error"
  | "placeholder";
