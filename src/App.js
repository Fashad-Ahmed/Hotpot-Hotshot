import { ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";

import "bootstrap/dist/css/bootstrap.min.css";
import "./fonts/fonts.css";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';

const App = () => {
  return (
    <ChakraProvider>
      <ToastContainer />
      <RoutesProvider />
    </ChakraProvider>
  );
};

export default App;
