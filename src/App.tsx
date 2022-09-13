import React from 'react'
import { ChakraProvider, Box, Text, Input } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Box display="flex" width="s" justifyContent="center">
      <Text
        display="flex"
        justifyContent="center"
        alignItems="center"
        fontSize="3xl"
      >
        Your Profile
      </Text>
    </Box>
    <Box display="flex" justifyContent="space-around">
      <Box display="block" justifyContent="center" width={80}>
        <Text mb={2} fontSize="lg">
          Email Address
        </Text>
        <Input />
      </Box>
      <Box width={80}>
        <Text mb={2} fontSize="lg">
          Full Name
        </Text>
        <Input />
      </Box>
    </Box>
  </ChakraProvider>
)

export default App