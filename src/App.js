import { ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/fonts.css";
import { ToastContainer } from "react-toastify";

const App = () => {
  return (
    <ChakraProvider>
      <ToastContainer />
      <RoutesProvider />
    </ChakraProvider>
  );
};

export default App;
