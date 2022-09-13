import React from 'react'
import {
  ChakraProvider,
  Box,
  FormControl,
  FormLabel,
  Input,
  FormErrorMessage
} from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Box
      backgroundColor="blackAlpha.200"
      p={5}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box backgroundColor="whiteAlpha.900" width="35%" p={5} borderRadius={5}>
        <FormControl mb={2.5}>
          <FormLabel>Email Address</FormLabel>
          <Input placeholder="Enter your email address" />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
        <FormControl>
          <FormLabel>Password</FormLabel>
          <Input placeholder="Enter your password" />
          <FormErrorMessage>Error message</FormErrorMessage>
        </FormControl>
      </Box>
    </Box>
  </ChakraProvider>
)

export default App