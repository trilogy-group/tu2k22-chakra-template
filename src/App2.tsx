import React from "react";
import {
  Box,
  Button,
  ChakraProvider,
  HStack,
  LightMode,
  DarkMode,
  Text,
  useColorMode,
  useColorModeValue,
} from "@chakra-ui/react";
import theme from "./theme";

const ToggleMode = () => {
  const { toggleColorMode } = useColorMode();

  const bg = useColorModeValue("red.500", "blue.500");
  const color = useColorModeValue("white", "gray.800");

  return (
    <>
      <Box mb={4} bg={bg} color={color}>
        This box's style will change based on the color mode.
      </Box>
      <HStack>
        <LightMode>
          <Button size="sm" colorScheme="blue">
            Light Mode Always
          </Button>
        </LightMode>

        <DarkMode>
          <Button size="sm" colorScheme="blue">
            Dark Mode Always
          </Button>
        </DarkMode>
      </HStack>
      <Button size="sm" onClick={toggleColorMode}>
        Toggle Mode
      </Button>
    </>
  );
};

const App2 = () => (
  <ChakraProvider resetCSS theme={theme}>
    <ToggleMode />
    <Box _hover={{ fontWeight: "semibold" }} _groupHover={{ color: "tomato" }}>
      <Text>Hello</Text>
      <h1>Mello</h1>
    </Box>
    <Text colorScheme="facebook" color="blue.500">
      Somethig
    </Text>
    <Box backgroundColor="gray.200">gray.200</Box>
    <Box backgroundColor="#f7f7f7" p={2}>
      #f7f7f7{" "}
    </Box>
    <Button m={2} p={2}>
      HELLO
    </Button>
  </ChakraProvider>
);

export default App2;
