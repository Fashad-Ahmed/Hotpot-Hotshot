import { ChakraProvider } from "@chakra-ui/react";
import RoutesProvider from "./routes";
import { ToastContainer } from "react-toastify";
import { Provider } from "react-redux";
import { PersistGate } from "redux-persist/integration/react";
import store, { persistor } from "./redux/store";
import "bootstrap/dist/css/bootstrap.min.css";
import "react-toastify/dist/ReactToastify.css";
import "./fonts/fonts.css";

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ChakraProvider>
          <ToastContainer />
          <RoutesProvider />
        </ChakraProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;
