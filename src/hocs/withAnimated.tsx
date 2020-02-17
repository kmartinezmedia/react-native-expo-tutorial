import * as React from "react";
import { Animated } from "react-native";
import styled, { DefaultTheme } from "styled-components/native";
import { Interpolation, StyledComponent } from "styled-components";
/* 
  React-native-web throws error if Animated.createAnimatedComponent
  is called on a Functional component. So with wrap with HOC as workaround
*/
function withAnimated<T extends React.ComponentType<any>, P extends object>(
  WrappedComponent: T,
  config: Interpolation<P>[]
): StyledComponent<Animated.AnimatedComponent<T>, DefaultTheme, P> {
  const AnimatedRNView = Animated.createAnimatedComponent(WrappedComponent);
  return styled(AnimatedRNView)<T>(() => config);
}

function withClass(WrappedComponent) {
  // eslint-disable-next-line react/display-name, react/prefer-stateless-function
  return class extends React.Component {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export { withClass };
export default withAnimated;
