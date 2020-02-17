import "react-native";
import React from "react";
import renderer, { act } from "react-test-renderer";

import { App } from "./App";

// Note: test renderer must be required after react-native.

it("renders correctly", () => {
  act(() => {
    renderer.create(<App />);
  });
});
