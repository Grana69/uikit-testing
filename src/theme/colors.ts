import { Colors } from "./types";

export const baseColors = {
  failure: "#db6265",
  primary: "#4fdc4a",
  primaryBright: "#53DEE9",
  primaryDark: "#0098A1",
  secondary: "#2a45ca",
  success: "#ca492a",
  warning: "#FFB237",
};

export const brandColors = {
  binance: "#F0B90B",
};

export const lightColors: Colors = {
  ...baseColors,
  ...brandColors,
  background: "#FAF9FA",
  backgroundDisabled: "#E9EAEB",
  contrast: "#000000",
  invertedContrast: "#FFFFFF",
  input: "#eeeaf4",
  tertiary: "#EFF4F5",
  text: "#ca492a",
  textDisabled: "#BDC2C4",
  textSubtle: "#ca492a",
  borderColor: "#4fdc4a",
  card: "#FFFFFF",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #E6FDFF 0%, #F3EFFF 100%)",
  },
};

export const darkColors: Colors = {
  ...baseColors,
  ...brandColors,
  secondary: "#2a4cca",
  background: "#100C18",
  backgroundDisabled: "#1f1f1f",
  contrast: "#FFFFFF",
  invertedContrast: "#191326",
  input: "#333333",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#e7e8ea",
  textDisabled: "#666171",
  textSubtle: "#a8a9ad",
  borderColor: "#4fdc4a",
  card: "#27262c",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
