import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import styled from "styled-components/native";
import { system } from "styled-system";

import { fonts } from "assets";
import { AliasConfig, ThemeColor } from "styles";
import { withAnimated } from "hocs";

import { IconName } from "./types";
import icoMoonConfig from "./icoMoonConfig.json";

export interface FeatherIconProps {
  name: IconName;
  color: ThemeColor;
  size: number;
}

const aliasConfig: AliasConfig<{ color: ThemeColor }> = {
  color: {
    property: "color",
    scale: "colors"
  }
};

const IconSet = createIconSetFromIcoMoon(
  icoMoonConfig,
  "FeatherIcons",
  fonts.FeatherIcons
);

const iconConfig = [system(aliasConfig)];

const Icon = styled(IconSet)<FeatherIconProps>(() => iconConfig);
const AnimatedIcon = withAnimated<typeof IconSet, FeatherIconProps>(
  IconSet,
  iconConfig
);

export { Icon, AnimatedIcon };
