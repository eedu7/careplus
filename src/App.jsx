import { Register } from "./pages/Register";
import { Login } from "./pages/Login";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
    const router = createBrowserRouter([
        {
            path: "/",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            // Appointment
        },
        {
            // Profile Information
        },
        {
            // Dashboard
        },
        {
            // Successfull Appointment
        },

    ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
