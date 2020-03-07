import * as React from "react";
import { Animated } from "react-native";
import styled from "styled-components/native";
import { Interpolation } from "styled-components";
/* 
  React-native-web throws error if Animated.createAnimatedComponent
  is called on a Functional component. So with wrap with HOC as workaround
*/

type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;

type Component<T> =
  | React.ComponentType<ComponentProps<T>>
  | React.Component<ComponentProps<T>>;

function withAnimated<T extends Component<T>, P extends ComponentProps<T>>(
  WrappedComponent: T,
  config: Interpolation<P>[]
) {
  const AnimatedRNView = Animated.createAnimatedComponent<T>(WrappedComponent);
  return (styled(AnimatedRNView)`
    ${config}
  ` as React.ComponentType<any>) as React.ComponentType<
    Animated.AnimatedProps<P>
  >;
}

export default withAnimated;
