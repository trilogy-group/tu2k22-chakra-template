import React from 'react'
import {
  ChakraProvider,
  SimpleGrid,
  Text,
  Button,
  Input,
  Box,
  Icon
} from '@chakra-ui/react'
import { CopyIcon } from '@chakra-ui/icons'

const App = () => (
  <ChakraProvider resetCSS>
    <SimpleGrid
      columns={4}
      spacingX="10px"
      spacingY={3}
      display="flex"
      alignItems="space-around"
      minChildWidth={2}
      justifyContent="space-between"
      color="blackAlpha.500"
      flexDirection="row-reverse"
    >
      <Box display="flex" flexDirection="row-reverse">
        <Button
          variant="solid"
          size="md"
          colorScheme="red"
          minWidth={20}
          display="flex"
        >
          Logout
        </Button>
        <Input
          mr="10px"
          minWidth={2}
          maxWidth={200}
          color="pink.500"
          display="flex"
          value="Hi Ankush Pandey"
          placeholder="Your name"
          isReadOnly
        />
      </Box>
      <Box display="flex" flexDirection="row-reverse">
        <Box>
          <Text display="flex" color="linkedin.500">
            Live meeting analysis
          </Text>
        </Box>
        <CopyIcon
          display="flex"
          flexDirection="row-reverse"
          alignItems="space-around"
        />
      </Box>
    </SimpleGrid>
  </ChakraProvider>
)

export default App