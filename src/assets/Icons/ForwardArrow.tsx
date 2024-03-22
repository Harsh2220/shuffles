import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ForwardArrow = (props: SvgProps) => (
  <Svg viewBox="0 0 12 13" fill="none" {...props}>
    <Path
      d="M7.5848 3.5C8.6365 4.27778 9.58108 5.18639 10.3952 6.20284C10.4651 6.29004 10.5 6.39502 10.5 6.5M7.5848 9.5C8.6365 8.72222 9.58108 7.81361 10.3952 6.79716C10.4651 6.70996 10.5 6.60498 10.5 6.5M10.5 6.5H1.5"
      stroke={props.color}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ForwardArrow;
