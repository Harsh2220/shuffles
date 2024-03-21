import * as React from "react";
import Svg, { SvgProps, Path } from "react-native-svg";

const SwapIcon = (props: SvgProps) => (
  <Svg viewBox="0 0 24 24" fill="none" {...props}>
    <Path
      d="M20.804 17.7077C21.0365 17.3934 21.0644 16.9724 20.8756 16.6301C20.6868 16.2878 20.3158 16.0869 19.926 16.1158L17.7027 16.2809C17.4686 16.2982 17.2344 16.312 17 16.3222V7C17 6.44772 16.5523 6 16 6C15.4477 6 15 6.44772 15 7V16.3222C14.7656 16.312 14.5314 16.2982 14.2973 16.2809L12.074 16.1158C11.6842 16.0869 11.3132 16.2878 11.1244 16.6301C10.9355 16.9724 10.9635 17.3934 11.196 17.7077C12.2842 19.1791 13.5557 20.5011 14.9786 21.6408C15.276 21.879 15.6375 22 16 22C16.3625 22 16.724 21.879 17.0214 21.6408C18.4442 20.5011 19.7158 19.1791 20.804 17.7077Z"
      fill={props.color}
    />
    <Path
      d="M11.926 7.88419C12.3158 7.91313 12.6868 7.71223 12.8756 7.36992C13.0644 7.0276 13.0365 6.60665 12.804 6.29233C11.7158 4.82086 10.4442 3.49888 9.02137 2.35919C8.72403 2.12102 8.36247 2 8 2C7.63752 2 7.27596 2.12102 6.97862 2.35919C5.55574 3.49888 4.2842 4.82086 3.19598 6.29233C2.96352 6.60664 2.93555 7.0276 3.12437 7.36992C3.31318 7.71223 3.68416 7.91313 4.07403 7.88419L6.29731 7.71915C6.53137 7.70177 6.76562 7.68799 7 7.67779L6.99999 17C6.99999 17.5523 7.44771 18 7.99999 18C8.55228 18 8.99999 17.5523 8.99999 17L9 7.67779C9.23437 7.68799 9.46862 7.70177 9.70268 7.71915L11.926 7.88419Z"
      fill={props.color}
    />
  </Svg>
);

export default SwapIcon;