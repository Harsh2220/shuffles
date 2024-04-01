import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BarOutline = (props: SvgProps) => (
  <Svg
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <Path
      opacity={0.28}
      d="M6.5 21.6666L6.5 15.1666M19.5 21.6666V10.8333"
      stroke={props.color}
      strokeWidth={2.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M13 21.6666L13 4.33325"
      stroke={props.color}
      strokeWidth={2.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BarOutline;
