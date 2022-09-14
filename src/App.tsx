import React from "react";
import {
  ChakraProvider,
  Box,
  Text,
  Button,
  List,
  Divider,
  Select,
  Avatar,
  IconButton,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
} from "@chakra-ui/react";
import {
  BellIcon,
  ChevronDownIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  RepeatIcon,
  CopyIcon,
  DeleteIcon,
} from "@chakra-ui/icons";
import { MapItems } from "./mapitems";

const myList = [
  "dev",
  "prod",
  "Test Room",
  "Test Room 3",
  "Test Room 5",
  "New Room",
];

const App = () => (
  <ChakraProvider resetCSS>
    <Box
      backgroundColor="#ffffff"
      display="flex"
      justifyContent="space-between"
      alignItems="center"
      p={0}
      pl={18}
      pt={2}
      pb={2}
      boxShadow="lg"
    >
      <Text
        display="inline"
        fontWeight="bold"
        textAlign="left"
        fontSize="2xl"
        color="facebook.500"
        letterSpacing="widest"
        overflow="visible"
      >
        GFI software
      </Text>
      <Box display="flex" alignItems="center" mr={8}>
        <BellIcon color="blackAlpha.500" mr={4} boxSize={6} />
        <Avatar size="md" showBorder />
      </Box>
    </Box>
    <Box display="flex" alignItems="stretch" justifyContent="space-around">
      <Box
        display="flex"
        backgroundColor="#f1f1f1"
        width="15%"
        flexDirection="column"
        alignItems="stretch"
      >
        <Box>
          <Box display="flex" justifyContent="center" pt={4} pb={4} mt={23}>
            <CopyIcon mr={2} color="#0E2F6C" />
            <Text display="flex" alignItems="center" color="#0E2F6C">
              My Storage Rooms
            </Text>
          </Box>
          <Divider borderColor="blackAlpha.500" />
        </Box>
      </Box>
      <Box
        display="inline-block"
        backgroundColor="#f7f7f7"
        width="85%"
        pl={8}
        pr={8}
        pt={2}
        pb={2}
      >
        <Breadcrumb>
          <BreadcrumbItem>
            <BreadcrumbLink mt={6} color="#0E2F6C">
              Storage Rooms
            </BreadcrumbLink>
          </BreadcrumbItem>
        </Breadcrumb>
        <Box backgroundColor="#0E2F6C" borderRadius={10} mt={2} mb={8}>
          <Text
            color="#ffffff"
            fontWeight="bold"
            fontSize="2xl"
            pt={2.5}
            pb={2.5}
            ml={4}
          >
            Storage Rooms
          </Text>
        </Box>
        <Box>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            mt={-3}
            mb={6}
          >
            <Button
              variant="solid"
              size="md"
              colorScheme="whiteAlpha"
              backgroundColor="#F7F7F7"
              color="messenger.500"
              leftIcon={<RepeatIcon />}
            >
              REFRESH TABLE
            </Button>
            <Button
              variant="solid"
              size="md"
              backgroundColor="#3056D9"
              color="whiteAlpha.900"
              ml={3}
              colorScheme="messenger"
            >
              NEW STORAGE ROOM
            </Button>
          </Box>
        </Box>
        <Box backgroundColor="whiteAlpha.900">
          <Box backgroundColor="twitter.50" border="1px">
            <Text
              fontWeight="bold"
              fontSize="sm"
              pt={4}
              pb={4}
              ml={2}
              boxShadow="lg"
            >
              Name
            </Text>
          </Box>
          <List
            display="block"
            alignItems="center"
            justifyContent="space-between"
          >
            <Divider borderColor="blackAlpha.500" />
            <MapItems
              list={myList}
              Child={({ item }: any) => (
                <Box
                  display="flex"
                  justifyContent="space-between"
                  alignItems="center"
                  pt={4}
                  pb={4}
                  border="1px"
                  opacity={1}
                >
                  <Box display="flex" alignItems="center">
                    <CopyIcon color="#0E2F6C" ml={4} mr={2} />
                    <Text display="flex" color="#0E2F6C">
                      {item}
                    </Text>
                  </Box>
                  <IconButton
                    aria-label="icon"
                    icon={<DeleteIcon />}
                    size="sm"
                    backgroundColor="whiteAlpha.500"
                    color="red.500"
                    mr={3}
                  />
                </Box>
              )}
            />
          </List>
          <Box
            display="flex"
            justifyContent="flex-end"
            alignItems="center"
            border="1px"
            mt={4}
            pb={6}
            pt={6}
          >
            <Text fontSize="xs" display="inline" mr={3}>
              Rows per page:{" "}
            </Text>
            <Select
              icon={<ChevronDownIcon />}
              variant="unstyled"
              size="sm"
              display="inline"
              maxWidth="20%"
            />
            <Text fontSize="xs" mr={6} ml={8}>
              1-6 of 6
            </Text>
            <ChevronLeftIcon />
            <ChevronRightIcon mr={4} ml={4} />
          </Box>
        </Box>
      </Box>
    </Box>
  </ChakraProvider>
);

export default App;
