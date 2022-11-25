import {
  extendTheme,
  withDefaultColorScheme,
  withDefaultSize,
  withDefaultVariant,
  withDefaultProps,
  theme,
} from "@chakra-ui/react";
import { theme as proTheme } from "@chakra-ui/pro-theme";
import type { StyleFunctionProps } from "@chakra-ui/styled-system";
// import "@fontsource/inter/variable.css";

export const componentTheme = extendTheme({
  components: {
    Button: {
      // 1. We can update the base styles
      baseStyle: {
        fontWeight: "bold", // Normally, it is "semibold"
      },
      // 2. We can add a new button size or extend existing
      sizes: {
        xl: {
          h: "56px",
          fontSize: "lg",
          px: "32px",
        },
      },
      // 3. We can add a new visual variant
      variants: {
        "with-shadow": {
          bg: "red.400",
          boxShadow: "0 0 2px 2px #efdfde",
        },
        // 4. We can override existing variants
        solid: (props: StyleFunctionProps) => ({
          bg: props.colorMode === "dark" ? "red.300" : "red.500",
        }),
        // 5. We can add responsive variants
        sm: {
          bg: "teal.500",
          fontSize: "md",
        },
      },
      // 6. We can overwrite defaultProps
      defaultProps: {
        size: "lg", // default is md
        variant: "sm", // default is solid
        colorScheme: "green", // default is gray
      },
    },
  },
});

export const globalStyles = extendTheme({
  styles: {
    global: {
      body: {
        fontFamily: "body",
        lineHeight: "base",
        bg: "gray.200",
        color: "black.600",
      },
    },
  },
});

export const myProTheme = extendTheme(
  {
    colors: { ...proTheme.colors, brand: proTheme.colors.purple },
    fonts: {
      heading: "Fira Code, -apple-system, system-ui, sans-serif",
      body: "Fira Code, -apple-system, system-ui, sans-serif",
    },
  },
  proTheme
);

export const myTheme = extendTheme(
  {
    colors: { ...theme.colors, brand: theme.colors.orange },
  },
  theme
);

export const defaultColorTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: "red" }),
  // OR this
  // withDefaultColorScheme({ colorScheme: "brand" }),
  withDefaultSize({
    size: "lg",
    components: ["Button", "Badge"],
  }),
  withDefaultVariant({
    variant: "outline",
    components: ["Input", "NumberInput", "PinInput"],
  }),
  withDefaultProps({
    defaultProps: {
      variant: "outline",
      size: "lg",
    },
    components: ["Input", "NumberInput", "PinInput"],
  }),
  {
    colors: {
      brand: theme.colors.teal,
    },
    components: {
      Alert: {
        defaultProps: {
          colorScheme: "purple",
        },
      },
      Button: {
        defaultProps: {
          colorScheme: "teal",
        },
      },
    },
  }
);
