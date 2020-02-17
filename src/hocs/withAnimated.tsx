import React from "react";
import { Animated } from "react-native";

function withAnimated<T>(WrappedComponent: React.ComponentType<T>): any {
  return Animated.createAnimatedComponent(withClass<T>(WrappedComponent));
}

function withClass<T>(
  WrappedComponent: React.ComponentType<T>
): React.ComponentClass<T> {
  // eslint-disable-next-line react/display-name, react/prefer-stateless-function
  return class extends React.Component<T> {
    render() {
      return <WrappedComponent {...(this.props as T)} />;
    }
  };
}

export default withAnimated;
