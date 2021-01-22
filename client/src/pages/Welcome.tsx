import React, { useRef } from "react";
import { Link } from "react-router-dom";
// Chakra UI
import { Box, Heading, Input, Button, Divider, VStack } from "@chakra-ui/react";

const Welcome: React.FC = () => {
  // Refs
  const nicknameRef = useRef<HTMLInputElement>(null);
  const idRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
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
      <Link to="/create-room">
        <Button colorScheme="red" w="100%" variant="solid">
          Create Room
        </Button>
      </Link>
    </Box>
  );
};

export default Welcome;
