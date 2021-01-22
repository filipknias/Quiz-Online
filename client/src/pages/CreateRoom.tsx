import React, { useState, useRef } from "react";
import { v4 as uuid } from "uuid";
// Chakra UI
import { Box, Heading, Input, Button, VStack } from "@chakra-ui/react";

const CreateRoom: React.FC = () => {
  // State
  const [quizId, setQuizId] = useState<string>(uuid());
  // Refs
  const nicknameRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <Box bg="white" color="black" p={5}>
      <Heading size="md" textAlign="center">
        Quiz ID: {quizId}
      </Heading>
      <form onSubmit={handleSubmit}>
        <VStack mt={10} spacing={3}>
          <Input placeholder="Your Nickname" required ref={nicknameRef} />
          <Button type="submit" colorScheme="blue" w="100%">
            Start Quiz
          </Button>
        </VStack>
      </form>
    </Box>
  );
};

export default CreateRoom;
