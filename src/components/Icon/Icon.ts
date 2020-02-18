import { createIconSetFromIcoMoon } from "@expo/vector-icons";
import styled from "styled-components/native";

import { fonts } from "assets";
import { IconProps, iconConfig } from "styles/config";
import { withAnimated } from "hocs";

import icoMoonConfig from "./icoMoonConfig.json";

const IconSet = createIconSetFromIcoMoon(
  icoMoonConfig,
  "FeatherIcons",
  fonts.FeatherIcons
);

const Icon = styled(IconSet)<IconProps>(() => iconConfig);
const AnimatedIcon = withAnimated<typeof IconSet, IconProps>(
  IconSet,
  iconConfig
);

export { Icon, AnimatedIcon };
