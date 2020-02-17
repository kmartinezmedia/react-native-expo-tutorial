import { View as RNView } from "react-native";
import styled from "styled-components/native";
import { withAnimated } from "hocs";
import { viewConfig, ViewProps } from "styles/config";

const View = styled(RNView)<ViewProps>(() => viewConfig);
const AnimatedView = withAnimated<ViewProps>(View);

export { View, AnimatedView };
