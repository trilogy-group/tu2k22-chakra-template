import {
  Box,
  Button,
  ChakraProvider,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Portal,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";

function BasicUsage() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const initialRef = React.useRef(null);

  return (
    <ChakraProvider resetCSS>
      <Box>
        <Button onClick={onOpen} colorScheme="purple">
          Open Modal
        </Button>
        <Modal
          isCentered
          isOpen={isOpen}
          onClose={onClose}
          autoFocus={false}
          trapFocus={false}
          closeOnOverlayClick={false}
          blockScrollOnMount={false}
          //   lockFocusAcrossFrames={false}
          //   useInert={false}
          portalProps={{ containerRef: initialRef }}
          initialFocusRef={initialRef}
        >
          <ModalOverlay />
          <ModalContent ref={initialRef}>
            <ModalHeader>Modal Title</ModalHeader>
            <ModalCloseButton _focus={{ border: "none" }} />
            <ModalBody>HI How is it going</ModalBody>
            {/* <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button variant="ghost">Secondary Action</Button>
          </ModalFooter> */}
          </ModalContent>
        </Modal>
        <Box
          pos="relative"
          sx={{ ".chakra-modal__content-container": { position: "absolute" } }}
          ref={initialRef}
          // w="80vw"
          // h="80vh"
        />
      </Box>
    </ChakraProvider>
  );
}

const ModalTest = () => {
  return <BasicUsage />;
};

export default ModalTest;
