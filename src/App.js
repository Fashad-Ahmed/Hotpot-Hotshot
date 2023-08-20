import { ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/fonts.css";

const App = () => {
  return (
    <ChakraProvider>
      <RoutesProvider />
    </ChakraProvider>
  );
};

export default App;
