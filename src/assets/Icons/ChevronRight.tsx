import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const ChevronRight = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M10 8.13916C11.4619 9.20122 12.7713 10.4462 13.8942 11.8413C14.0353 12.0165 14.0353 12.2618 13.8942 12.437C12.7713 13.8321 11.4619 15.0771 10 16.1392"
      stroke={props.color}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);

export default ChevronRight;
