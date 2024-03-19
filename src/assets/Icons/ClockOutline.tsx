import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const ClockOutline = (props: SvgProps) => (
  <Svg
    viewBox="0 0 26 26"
    fill="none"
    {...props}
  >
    <Path
      d="M13 8.66671V13.8845C13 14.0697 13.0946 14.2421 13.2509 14.3415L16.25 16.25M22.9126 13.0001C22.9126 18.4747 18.4746 22.9126 13.0001 22.9126C7.52559 22.9126 3.08762 18.4747 3.08762 13.0001C3.08762 7.52562 7.52559 3.08765 13.0001 3.08765C18.4746 3.08765 22.9126 7.52562 22.9126 13.0001Z"
      stroke={props.color}
      strokeWidth={2.16667}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default ClockOutline;
