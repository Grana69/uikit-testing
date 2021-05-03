import { Colors } from "./types";

export const baseColors = {
  failure: "#dc2625",
  primary: "#218CFF",
  primaryBright: "#459fff",
  primaryDark: "#218CFF",
  secondary: "#2a45ca",
  success: "#11b981",
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
  text: "#5E7FA3",
  textDisabled: "#BDC2C4",
  textSubtle: "#5E7FA3",
  borderColor: "#262948",
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
  input: "#1b1d31",
  primaryDark: "#0098A1",
  tertiary: "#353547",
  text: "#e7e8ea",
  textDisabled: "#666171",
  textSubtle: "#a8a9ad",
  borderColor: "#262948",
  card: "#1b1d31",
  gradients: {
    bubblegum: "linear-gradient(139.73deg, #313D5C 0%, #3D2A54 100%)",
  },
};
