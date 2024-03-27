import { RouterProvider, createBrowserRouter } from "react-router-dom";
import "./App.css";
import { GlobalStyle } from "./style/global";
import Home from "./pages/Home";
import { ThemeProvider } from "styled-components";
import { theme } from "./style/theme";
import Login from "./pages/Login";
import Note from "./pages/Note";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/signup",
        element: <Signup />,
    },
    {
        path: "/notes",
        element: <Note />,
    },

]);

function App() {
    return (
        <ThemeProvider theme={theme}>
            <GlobalStyle />
            <RouterProvider router={router} />
        </ThemeProvider>
    );
}

export default App;
