import React from 'react'
import { ChakraProvider, Button, Box } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Box m={2}>
      <Button
        variant="solid"
        size="md"
        colorScheme="cyan"
        color="#ffffff"
        minWidth={200}
      >
        Create Meeting
      </Button>
    </Box>
    <Box m={2}>
      <Button
        variant="solid"
        size="md"
        colorScheme="cyan"
        color="#ffffff"
        minWidth={200}
      >
        Zoom Integration
      </Button>
    </Box>
  </ChakraProvider>
)

export default App