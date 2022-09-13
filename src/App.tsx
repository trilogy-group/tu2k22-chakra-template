import React from 'react'
import { ChakraProvider, Box, Text } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Box
      display="flex"
      justifyContent="flex-end"
      minHeight="100vh"
      flexDirection="column"
    >
      <Text display="flex" justifyContent="center">
        Ⓒ 2022, Devfactory | Devfactory is an ESW Capital Group Company
      </Text>
    </Box>
  </ChakraProvider>
)

export default App