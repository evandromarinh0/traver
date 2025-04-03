import React from "react";
import { View } from "react-native";
import Svg, { Circle, Text } from "react-native-svg";

const ProgressCircle = ({ progress = 70, size = 100, strokeWidth = 10 }) => {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference * (1 - progress / 100);

  return (
    <View style={{ alignItems: "center", justifyContent: "center" }}>
      <Svg width={size} height={size} viewBox={`0 0 ${size} ${size}`}>
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#E0E0E0"
          strokeWidth={strokeWidth}
          fill="none"
        />
        <Circle
          cx={size / 2}
          cy={size / 2}
          r={radius}
          stroke="#FFA07A"
          strokeWidth={strokeWidth}
          fill="none"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          transform={`rotate(-90, ${size / 2}, ${size / 2})`}
        />
        <Text
          x={size / 2}
          y={size / 2 + 5}
          fontSize={size * 0.2}
          fill="#fff"
          textAnchor="middle"
          fontWeight="bold"
        >
          {`${progress}%`}
        </Text>
      </Svg>
    </View>
  );
};

export default ProgressCircle;