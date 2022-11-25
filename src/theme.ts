import { extendTheme, type ThemeConfig } from "@chakra-ui/react";

const breakpoints = {
  sm: "30em",
  md: "48em",
  lg: "62em",
  xl: "80em",
  "2xl": "96em",
};

const myTheme = {
  fontSizes: {
    lg: "18px",
  },
  colors: {
    gray: {
      100: "#fafafa",
      200: "#f7f7f7",
    },
  },
  semanticTokens: {
    colors: {
      error: "red.500",
      success: "green.500",
      primary: {
        default: "red.500",
        _dark: "red.400",
      },
      secondary: {
        default: "red.800",
        _dark: "red.700",
      },
    },
  },
  styles: {
    global: (props: any) => ({
      "html, body": {
        fontSize: "md",
        color: props.colorMode === "dark" ? "white" : "gray.600",
        lineHeight: "tall",
      },
      a: {
        color: props.colorMode === "dark" ? "teal.300" : "teal.500",
      },
      button: {
        backgroundColor: "red",
      },
    }),
  },
};

// Dark Mode
const config: ThemeConfig = {
  useSystemColorMode: false,
  initialColorMode: "dark",
};

const theme = extendTheme({ config, ...myTheme });

export default theme;
