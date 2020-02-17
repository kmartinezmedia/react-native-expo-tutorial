const colors = {
  primary: "#F4BA00",
  primary2: "#F49B00",
  primaryLight: "#FDEDCC",
  secondary: "#78B1C4",
  dark: "#4C4B5E",
  textDark: "#4D4D4D",
  textMedium: "#9F9FAF",
  textLight: "#F2F2F9",
  textLightest: "rgba(242, 242, 249, 0.7)",
  darkGreys: [
    "rgba(76, 75, 94, 0.9)",
    "rgba(76, 75, 94, 0.8)",
    "rgba(76, 75, 94, 0.4)",
    "rgba(76, 75, 94, 0.2)",
    "rgba(76, 75, 94, 0.05)"
  ],
  mediumGrey: "#D1D4D7",
  mediumGreys: [
    "rgba(209, 215, 215, 0.9)",
    "rgba(209, 215, 215, 0.8)",
    "rgba(209, 215, 215, 0.4)",
    "rgba(209, 215, 215, 0.2)",
    "rgba(209, 215, 215, 0.05)"
  ],
  lightGrey: "#EAEBF1",
  lightGreys: [
    "rgba(234, 235, 241, 0.9)",
    "rgba(234, 235, 241, 0.8)",
    "rgba(234, 235, 241, 0.4)",
    "rgba(234, 235, 241, 0.2)",
    "rgba(234, 235, 241, 0.05)"
  ],
  extraLightGrey: "#F6F7FC",
  extraLightGreys: [
    "rgba(246, 247, 252, 0.9)",
    "rgba(246, 247, 252, 0.8)",
    "rgba(246, 247, 252, 0.4)",
    "rgba(246, 247, 252, 0.2)",
    "rgba(246, 247, 252, 0.05)"
  ],
  white: "#ffffff",
  success: "#38C2B7",
  error: "#E14161"
};

export default {
  space: [0, 4, 8, 16, 24, 32, 64, 96, 128, 160, 192],
  radii: {
    none: 0,
    small: 5,
    medium: 10,
    big: 20,
    huge: 38
  },
  fonts: {
    regular: "Poppins-Regular",
    medium: "Poppins-Medium",
    semibold: "Poppins-SemiBold",
    extrabold: "Poppins-ExtraBold"
  },
  fontSizes: {
    headline1: 56,
    headline2: 32,
    headline3: 18,
    subline1: 16,
    body1: 14,
    body2: 12
  },
  fontWeights: {
    regular: 400,
    medium: 500,
    semibold: 600,
    extrabold: 800
  },
  lineHeights: {
    headline1: "64px",
    headline2: "40px",
    headline3: "24px",
    subline1: "24px",
    body1: "24px",
    body2: "20px"
  },
  letterSpacings: {
    headline1: 0.2,
    headline2: 0.2,
    headline3: 0.4,
    subline1: 0.3,
    body1: 0.3,
    body2: 0.3
  },
  colors,
  gradients: {
    primary: [colors.primary, "#F49B00"],
    primaryLight: ["rgba(244,186,0,0.20)", "rgba(244,155,0,0.20)"],
    secondary: [colors.secondary, "#6B99B1"],
    extraLightGrey: [colors.extraLightGrey, colors.extraLightGrey],
    dark: ["#3A3F41", "#141416"],
    overlay: ["rgba(0,0,0,0)", "rgba(0,0,0,0.8)"]
  }
};
