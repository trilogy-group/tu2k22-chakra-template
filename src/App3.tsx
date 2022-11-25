import {
  myTheme,
  myProTheme,
  componentTheme,
  globalStyles,
  defaultColorTheme,
} from "./theme3";
import React from "react";

import {
  ChakraProvider,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  Text,
  AccordionIcon,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  AvatarGroup,
  Avatar,
  Badge,
  Box,
  Button,
  Center,
  CircularProgress,
  Code,
  FormControl,
  FormLabel,
  Input,
  FormHelperText,
  FormErrorMessage,
  Grid,
  Heading,
  Icon,
  IconButton,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Link,
  List,
  ListItem,
  NumberInput,
  Progress,
  RadioGroup,
  Radio,
  Spinner,
  Select,
  Skeleton,
  Switch,
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  Tag,
  Textarea,
  useColorMode,
  Container,
  extendTheme,
} from "@chakra-ui/react";
import { CopyIcon, ChevronDownIcon } from "@chakra-ui/icons";

const ToggleMode = () => {
  const { toggleColorMode } = useColorMode();
  return <Button onClick={toggleColorMode}>Toggle Mode</Button>;
};

const App3 = () => (
  <ChakraProvider resetCSS theme={defaultColorTheme}>
    <>
      <ToggleMode />
      <Container>
        <Accordion>
          <AccordionItem>
            <AccordionButton>
              <Text>Text value</Text>
              <AccordionIcon />
              <Progress value={60} max={100} />
            </AccordionButton>
            <AccordionPanel>
              <Text>Text value</Text>
            </AccordionPanel>
          </AccordionItem>
        </Accordion>
        <Alert>
          <AlertIcon />
          <AlertTitle mr={1} fontWeight="bold">
            Alert title
          </AlertTitle>
          <AlertDescription>Alert description</AlertDescription>
        </Alert>
        <AvatarGroup spacing={-3} max={3} size="md">
          <Avatar />
          <Avatar />
          <Avatar />
        </AvatarGroup>
        <Badge variant="subtle">Badge</Badge>
        <Box>
          <Button variant="solid" size="md">
            Toggle Button
          </Button>
          <Center>
            <CircularProgress size="48px" value={60} max={100} />
            <FormControl>
              <FormLabel>Label</FormLabel>
              <Input />
              <FormHelperText>Helper message</FormHelperText>
              <FormErrorMessage>Error message</FormErrorMessage>
            </FormControl>
            <Progress value={60} max={100} />
          </Center>
          <Code>Code value</Code>
          <Link>Link text</Link>
          <NumberInput />
          <Spinner />
          <Select icon={<ChevronDownIcon />} variant="outline" size="md" />
          <Switch />
        </Box>
      </Container>
      <Grid templateColumns="repeat(5, 1fr)" gap={6}>
        <Heading>Heading title</Heading>
        <CopyIcon />
        <IconButton aria-label="icon" icon={<CopyIcon />} size="md" />
      </Grid>
      <InputGroup>
        <InputLeftAddon>Email</InputLeftAddon>
        <Input />
        <InputRightElement>
          <CopyIcon name="email" />
        </InputRightElement>
      </InputGroup>
      <List>
        <ListItem>list</ListItem>
        <ListItem>list</ListItem>
        <Progress value={60} max={100} />
      </List>
      <RadioGroup>
        <Radio>Radio</Radio>
        <Radio>Radio</Radio>
        <Radio>Radio</Radio>
      </RadioGroup>
      <Skeleton height={50} />
      <Tabs size="md">
        <TabList>
          <Tab>One</Tab>
          <Tab>Two</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>One !</TabPanel>
          <TabPanel>Two !</TabPanel>
        </TabPanels>
      </Tabs>
      <Tag>Tag name</Tag>
      <Text>Text value</Text>
      <Textarea />
    </>
  </ChakraProvider>
);

export default App3;
