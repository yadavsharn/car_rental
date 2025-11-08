import "./App.css";
import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import BookingCar from "./pages/BookingCar";
import UserBookings from "./pages/UserBookings";
import AddCar from "./pages/AddCar";
import AdminHome from "./pages/AdminHome";
import EditCar from "./pages/EditCar";

export const ProtectedRoute = ({ children }) => {
  return localStorage.getItem("user") ? children : <Navigate to="/login" />;
};

const router = createBrowserRouter([
  { path: "/", element: <ProtectedRoute><Home /></ProtectedRoute> },
  { path: "/login", element: <Login /> },
  { path: "/register", element: <Register /> },
  { path: "/booking/:carid", element: <ProtectedRoute><BookingCar /></ProtectedRoute> },
  { path: "/userbookings", element: <ProtectedRoute><UserBookings /></ProtectedRoute> },
  { path: "/addcar", element: <ProtectedRoute><AddCar /></ProtectedRoute> },
  { path: "/editcar/:carid", element: <ProtectedRoute><EditCar /></ProtectedRoute> },
  { path: "/admin", element: <ProtectedRoute><AdminHome /></ProtectedRoute> },
]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
