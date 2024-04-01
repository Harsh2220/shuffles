import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const BarIcon = (props: SvgProps) => (
  <Svg
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <Path
      d="M6.5 21.6666L6.5 15.1666M13 21.6666L13 4.33325M19.5 21.6666V10.8333"
      stroke={props.color}
      strokeWidth={2.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default BarIcon;
