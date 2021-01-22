import React from "react";
// React router dom
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// Chakra UI
import { Center } from "@chakra-ui/react";
// Pages
import WelcomePage from "./pages/Welcome";
import CreateRoomPage from "./pages/CreateRoom";

const App: React.FC = () => {
  return (
    <Center bg="purple.800" h="100vh" w="100vw" color="white" px={5}>
      <Router>
        <Switch>
          <Route path="/" exact component={WelcomePage} />
          <Route path="/create-room" component={CreateRoomPage} />
        </Switch>
      </Router>
    </Center>
  );
};

export default App;
