import { ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";
import "./fonts/fonts.css";

const App = () => {
  return (
    <ChakraProvider>
      <RoutesProvider />
    </ChakraProvider>
  );
};

export default App;
