import React from 'react'
import { ChakraProvider, Box, Divider, Text } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Box>
      <Divider borderColor="blackAlpha.500" />
      <Box backgroundColor="linkedin.500" width={40} mt={10}>
        <Text color="whiteAlpha.900">Update Profile</Text>
      </Box>
    </Box>
  </ChakraProvider>
)

export default App