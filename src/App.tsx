import React from 'react'
import { ChakraProvider, Center, Image, Text } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <Center display="flex" flexDirection="column">
      <Image
        height="100px"
        width="140px"
        src="https://hbr.org/resources/images/article_assets/2020/03/Apr20_08_MichalBednarski.jpg"
        mt={22}
      />
      <Text fontWeight="bold" mt={5} fontSize="3xl">
        Live Meeting Analysis
      </Text>
      <Text mt={5} fontStyle="italic">
        Get insights about meeting in real time
      </Text>
    </Center>
  </ChakraProvider>
)

export default App