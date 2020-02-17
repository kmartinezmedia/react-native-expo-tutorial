import { ViewProps as RNViewProps, ViewStyle } from "react-native";
import { compose, system, space, border } from "styled-system";
import { css } from "@styled-system/css";

import {
  AliasConfig,
  ModifierConfig,
  BorderProps,
  ModifierProps,
  SpaceProps,
  ThemeColor
} from "../types";
import getModifiers from "./getModifiers";

interface AliasProps {
  bg?: ThemeColor;
  size?: number | string;
  align?: ViewStyle["alignItems"];
  justify?: ViewStyle["justifyContent"];
  wrap?: ViewStyle["flexWrap"];
  flex?: ViewStyle["flex"];
  width?: ViewStyle["width"];
  height?: ViewStyle["height"];
  top?: ViewStyle["top"];
  left?: ViewStyle["left"];
  bottom?: ViewStyle["bottom"];
  right?: ViewStyle["right"];
  opacity?: ViewStyle["opacity"];
}

type ModifierKeys =
  | "hasFlexGrow"
  | "hasFlexGrowWithPadding"
  | "isCentered"
  | "isColumn"
  | "isRow";
export type ViewProps = RNViewProps &
  BorderProps &
  SpaceProps &
  AliasProps &
  ModifierProps<ModifierKeys>;

const modifierConfig: ModifierConfig<ModifierKeys, ViewStyle> = {
  hasFlexGrow: {
    flexGrow: 1
  },
  hasFlexGrowWithPadding: {
    flexGrow: 1,
    paddingTop: 3,
    paddingHorizontal: 4
  },
  isCentered: {
    justifyContent: "center",
    alignItems: "center"
  },
  isColumn: {
    flexDirection: "column",
    justifyContent: "flex-start",
    alignItems: "center",
    alignContent: "stretch",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto"
  },
  isRow: {
    flexDirection: "row",
    alignItems: "stretch",
    justifyContent: "flex-start",
    alignSelf: "auto",
    alignContent: "stretch",
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto",
    flexWrap: "wrap",
    width: "100%"
  }
};

const aliasConfig: AliasConfig<AliasProps> = {
  bg: {
    property: "backgroundColor",
    scale: "colors"
  },
  size: {
    properties: ["width", "height"]
  },
  align: {
    property: "alignItems"
  },
  justify: {
    property: "justifyContent"
  },
  wrap: {
    property: "flexWrap"
  },
  flex: true,
  width: true,
  height: true,
  top: true,
  left: true,
  bottom: true,
  right: true,
  opacity: true
};

export default [
  css({
    flexGrow: 0,
    flexShrink: 1,
    flexBasis: "auto"
  }) as Record<string, any>,
  compose(space, border),
  system(aliasConfig),
  getModifiers(modifierConfig)
];