import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";
const Clock = (props: SvgProps) => (
  <Svg
    viewBox="0 0 22 22"
    fill="none"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0.00427246 11.0002C0.00427246 4.9274 4.92727 0.00439453 11.0001 0.00439453C17.0729 0.00439453 21.9959 4.9274 21.9959 11.0002C21.9959 17.0731 17.0729 21.9961 11.0001 21.9961C4.92727 21.9961 0.00427246 17.0731 0.00427246 11.0002ZM12.0833 6.55859C12.0833 5.96028 11.5983 5.47525 11 5.47525C10.4017 5.47525 9.91667 5.96028 9.91667 6.55859V11.8847C9.91667 12.4403 10.2005 12.9574 10.6692 13.2557L13.7157 15.1944C14.2205 15.5156 14.8901 15.3668 15.2113 14.862C15.5325 14.3572 15.3837 13.6876 14.879 13.3664L12.0833 11.5874V6.55859Z"
      fill="#111111"
    />
  </Svg>
);
export default Clock;
