import { ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";
import { ToastContainer } from "react-toastify";

import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./fonts/fonts.css";

const App = () => {
  return (
    <ChakraProvider>
      <ToastContainer />
      <RoutesProvider />
    </ChakraProvider>
  );
};

export default App;
