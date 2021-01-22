import React, { useRef } from "react";
// Chakra UI
import {
  Center,
  Box,
  Heading,
  Input,
  Button,
  Divider,
  VStack,
} from "@chakra-ui/react";

const Welcome: React.FC = () => {
  // Refs
  const nicknameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Center bg="purple.800" h="100vh" w="100vw" color="white" px={5}>
      <Box bg="white" color="black" p={5} w="450px">
        <Heading size="lg" textAlign="center">
          Enter Quiz ID
        </Heading>
        <form onSubmit={handleSubmit}>
          <VStack mt={10} mb={5} spacing={4}>
            <Input placeholder="Nickname" required ref={nicknameRef} />
            <Input placeholder="Quiz ID" required ref={idRef} />
          </VStack>
          <Button type="submit" colorScheme="blue" w="100%" variant="solid">
            Join
          </Button>
        </form>
        <Divider my={3} orientation="horizontal" />
        <Button colorScheme="red" w="100%" variant="solid">
          Create Room
        </Button>
      </Box>
    </Center>
  );
};

export default Welcome;
