import { Dimensions } from "react-native";

import { theme } from "styles";

export const WINDOW_WIDTH = Dimensions.get("window").width;
export const DEFAULT_PADDING = theme.space[3];
export const HORIZONTAL_GUTTER = DEFAULT_PADDING * 2;
export const CONTAINER_WIDTH = WINDOW_WIDTH - HORIZONTAL_GUTTER;
export const NUM_TABS = 4;
export const ICON_SIZE = 24;
export const EQUAL_TAB_WIDTH = CONTAINER_WIDTH / NUM_TABS;
export const ACTIVE_TAB_PERCENT_INCREASE = 8;
export const ACTIVE_TAB_WIDTH = percentage(
  EQUAL_TAB_WIDTH,
  100 + ACTIVE_TAB_PERCENT_INCREASE
);
export const ACTIVE_GRADIENT_OFFSET = percentage(EQUAL_TAB_WIDTH, 8);
export const ACTIVE_ICON_COLOR = theme.colors.primary;
export const ACTIVE_GRADIENT_START = "rgba(244,186,0,0.20)";
export const ACTIVE_GRADIENT_END = "rgba(244,186,0,0.20)";
export const ACTIVE_TEXT_OFFSET = ICON_SIZE + DEFAULT_PADDING + 8;

export const INACTIVE_TAB_WIDTH = percentage(
  EQUAL_TAB_WIDTH,
  100 - ACTIVE_TAB_PERCENT_INCREASE
);
export const INACTIVE_ICON_OFFSET =
  percentage(EQUAL_TAB_WIDTH, 50) - ICON_SIZE / 2;
export const INACTIVE_ICON_COLOR = theme.colors.mediumGreys[0];
export const INACTIVE_TEXT_OFFSET = ICON_SIZE + DEFAULT_PADDING;
export const INACTIVE_GRADIENT_START = "rgba(244,186,0,0)";
export const INACTIVE_GRADIENT_END = "rgba(244,155,0,0)";

function percentage(input: number, percent: number): number {
  return (input / 100) * percent;
}
