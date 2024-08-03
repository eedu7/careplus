import { Register } from "./pages/Register";
import { Login } from "./pages/Login";
import { Appointment } from "./pages/Appointment";
import { ProfileInformation } from "./pages/ProfileInformation";
import { Dashboard } from "./pages/Dashboard";
import { SuccessfullAppointment } from "./pages/SuccessfullAppointment";

import { createBrowserRouter, RouterProvider } from "react-router-dom";


function App() {
    const router = createBrowserRouter([
        {
            path: "/register",
            element: <Register />,
        },
        {
            path: "/login",
            element: <Login />
        },
        {
            path: "/appointment",
            element: <Appointment />
        },
        {
            path: "/profile-information",
            element: <ProfileInformation />
        },
        {
            path: "/dashboard",
            element: <Dashboard />
        },
        {
            path: "/appointment/success",
            element: <SuccessfullAppointment />
        },

    ]);

  return (
    <RouterProvider router={router} />
  );
}

export default App;
