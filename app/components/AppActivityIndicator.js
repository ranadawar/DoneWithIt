import React from "react";

import LottieView from "lottie-react-native";

const AppActivityIndicator = ({ visible = false }) => {
  if (!visible) return null;
  return (
    <LottieView
      source={require("../assets/animations/loader.json")}
      autoPlay
      loop
    />
  );
};

export default AppActivityIndicator;
