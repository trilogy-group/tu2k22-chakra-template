import { ChakraProvider, Text, Box, List, ListItem, Button } from '@chakra-ui/react';
import { useState } from 'react';

export type WelcomeProps = {
  name: string;
};

export const Welcome = ({ name }: WelcomeProps) => {
    const [newName, setNewName] = useState('User')
    return <ChakraProvider>
    <Text textAlign="center" fontWeight="bold">
    Welcome {newName}
    </Text>
    <Box>
      <Box>
        <List>
          <ListItem>list</ListItem>
          <ListItem>list</ListItem>
          <ListItem>list</ListItem>
        </List>
      </Box>
    </Box>
    <Button onClick={()=>setNewName(name)}> Test </Button>
  </ChakraProvider>
}