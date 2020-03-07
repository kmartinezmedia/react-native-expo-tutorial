import React from "react";
/* 
  React-native-web throws error if Animated.createAnimatedComponent
  is called on a Functional component. So with wrap with HOC as workaround
*/

type ComponentProps<T> = T extends
  | React.ComponentType<infer P>
  | React.Component<infer P>
  ? P
  : never;

function withClass<T>(WrappedComponent: T) {
  // eslint-disable-next-line react/display-name, react/prefer-stateless-function
  return class extends React.Component<ComponentProps<T>> {
    render() {
      return <WrappedComponent {...this.props} />;
    }
  };
}

export default withClass;
