import { Route, Routes } from "react-router-dom";
import "./App.css";
import { Dashboard } from "./pages/dashboard/dashboard";
import { Login } from "./pages/login/login";
import { Notfound } from "./pages/notfound/notfound";
import { Register } from "./pages/register/register";

export const App = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="*" element={<Notfound />} />
      </Routes>
    </>
  );
};
