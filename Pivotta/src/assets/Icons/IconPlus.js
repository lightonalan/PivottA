import * as React from 'react';
import Svg, {Circle, Path} from 'react-native-svg';

function IconPlus() {
  return (
    <Svg width={24} height={24} viewBox="0 0 24 24" fill="none">
      <Circle cx={12} cy={12} r={12} fill="#004FAC" />
      <Path
        d="M17.4 11.4h-4.8V6.6a.6.6 0 00-1.2 0v4.8H6.6a.6.6 0 000 1.2h4.8v4.8a.6.6 0 001.2 0v-4.8h4.8a.6.6 0 000-1.2z"
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </Svg>
  );
}

export default IconPlus;
