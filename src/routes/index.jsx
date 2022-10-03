import { Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { Login } from "../pages/login/login";
import { Notfound } from "../pages/notfound/notfound";
import { SignUp } from "../pages/register/SignUp";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<Login />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<Notfound />} />
  </Routes>
);
