import "react-native";
import * as React from "react";
import * as renderer from "react-test-renderer";

import { App } from "./App";

// Note: test renderer must be required after react-native.

it("renders correctly", () => {
  renderer.act(() => {
    renderer.create(<App />);
  });
});
