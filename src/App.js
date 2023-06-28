import { RouterProvider, createBrowserRouter } from "react-router-dom";
import ShoppingCart from "./pages/screens/ShoppingCart";
import { Provider } from "react-redux";
import store from "./store/store";
import { ThemeProvider, createTheme } from "@mui/material";

function App() {
  const routes = createBrowserRouter([{ path: "", element: <ShoppingCart /> }]);
  const theme = createTheme({
    typography: {
      fontFamily: "Rubik, sans-serif",
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <Provider store={store}>
        <RouterProvider router={routes} />
      </Provider>
    </ThemeProvider>
  );
}

export default App;
