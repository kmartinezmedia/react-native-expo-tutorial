import React, { useContext } from "react";
import styled, { ThemeContext } from "styled-components/native";
import { LinearGradient as ReactLinearGradient } from "expo-linear-gradient";

import { withAnimated, withClass } from "~/hocs";
import viewConfig, { ViewProps } from "~/styles/config/viewConfig";
import { ThemeGradient } from "~/styles";

type RNLinearGradientProps = React.ComponentProps<typeof ReactLinearGradient>;
interface LinearGradientProps extends RNLinearGradientProps, ViewProps {
  color1?: string;
  color2?: string;
  locations?: number[];
  variant?: ThemeGradient;
  children?: React.ReactNode;
}

const StyledReactLinearGradient = styled(ReactLinearGradient)<
  LinearGradientProps
>(() => viewConfig);

const LinearGradient = (props: LinearGradientProps) => {
  const {
    variant,
    color1,
    color2,
    children = null,
    start,
    end,
    ...otherProps
  } = props;
  const theme = useContext(ThemeContext);

  let colors: string[] = [];

  if (variant) {
    colors = theme[variant];
  }

  if (color1 && color2) {
    colors = [color1, color2];
  }

  return (
    <StyledReactLinearGradient
      colors={colors}
      start={start || [0, 0]}
      end={end || [1, 1]}
      {...otherProps}
    >
      {children}
    </StyledReactLinearGradient>
  );
};

const LinearGradientClass = withClass<typeof LinearGradient>(LinearGradient);
const AnimatedLinearGradient = withAnimated<
  typeof LinearGradientClass,
  LinearGradientProps
>(LinearGradientClass, []);

export { LinearGradient, AnimatedLinearGradient };
