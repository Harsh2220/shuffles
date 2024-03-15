import React from "react";
import {
  ActivityIndicator,
  StyleProp,
  TextStyle,
  TouchableOpacity,
  ViewStyle,
} from "react-native";
import { Heading } from "./Heading";
import { black, primary, white } from "@/src/constants/color";

interface IButton {
  children: React.ReactNode;
  variant?: "filled" | "outlined";
  size?: "small" | "medium" | "large";
  style?: StyleProp<ViewStyle>;
  textStyle?: StyleProp<TextStyle>;
  icon?: JSX.Element;
  iconPosition?: "left" | "right";
  isLoading?: boolean;
  onPress: () => void;
}

export default function Button({
  children,
  variant = "filled",
  size = "medium",
  style,
  textStyle,
  icon,
  iconPosition = "right",
  isLoading = false,
  onPress,
}: IButton) {
  return (
    <TouchableOpacity
      style={[
        {
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          paddingHorizontal:
            size === "small" ? 36 : size === "medium" ? 48 : 60,
          paddingVertical: size === "small" ? 12 : size === "medium" ? 16 : 20,
          borderRadius: 50,
          backgroundColor: variant === "filled" ? primary : "transparent",
          borderWidth: variant === "outlined" ? 1 : 0,
          borderColor: white[300],
        },
        style,
      ]}
      onPress={() => {
        if (isLoading === true) {
          return;
        }
        onPress();
      }}
    >
      {isLoading ? (
        <ActivityIndicator size={"small"} animating={true} color={"black"} />
      ) : (
        <>
          {icon && iconPosition === "left" ? icon : null}
          <Heading
            style={[
              {
                color: variant === "filled" ? white[700] : black[700],
                fontSize: size === "small" ? 14 : size === "medium" ? 16 : 20,
                fontWeight: "400",
                textAlign: "center",
              },
              textStyle,
            ]}
          >
            {children}
          </Heading>
          {icon && iconPosition === "right" ? icon : null}
        </>
      )}
    </TouchableOpacity>
  );
}
