import React from 'react'
import { ChakraProvider, Container, Input, Text } from '@chakra-ui/react'

const App = () => (
  <ChakraProvider resetCSS>
    <div style={{
      width:"100%",
      
    }}>
    
    <div style={{
      display:"flex",
      flexDirection:"column",
      justifyContent: "center",
      width: "300px",
      margin:"auto",
      padding:"20px"
    }}>
      <h1>Conventional Coding</h1>
      <label style={{
        marginTop:"20px",
        marginBottom:"5px"
      }} >Email</label>
      <input type="text" style={{
        padding:"10px",
        borderRadius: "8px",
        border:"1px grey solid",
      }} placeholder='Enter your email address' />
      <label style={{
        marginTop:"20px",
        marginBottom:"10px"
      }}>Password</label>
      <input type="text" style={{
        padding:"10px",
        borderRadius: "8px",
        border:"1px grey solid",
      }} placeholder='Enter your password' />

    </div>
    </div>

  <Container
      display="block"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      width="100%"
    >
      <Container display="flex" flexDirection="column" width="300px" m="auto">
        <h1>OpenChakra builder</h1>
        <Text mt="20px" mb="5px">
          Email
        </Text>
        <Input
          placeholder="Enter email address"
          p="10px"
          borderRadius="8px"
          border="1px grey solid"
        />
        <Text mt="20px" mb="5px">
          Password
        </Text>
        <Input
          placeholder="Enter email address"
          p="10px"
          borderRadius="8px"
          border="1px grey solid"
        />
      </Container>
    </Container>
  </ChakraProvider>
)

export default App