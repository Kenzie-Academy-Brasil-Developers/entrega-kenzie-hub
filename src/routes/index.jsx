import { Navigate, Route, Routes } from "react-router-dom";
import { Dashboard } from "../pages/dashboard/dashboard";
import { HomePage } from "../pages/home/home";
import { Login } from "../pages/login/login";
import { SignUp } from "../pages/register/SignUp";

export const RoutesMain = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/login" element={<Login />} />
    <Route path="/register" element={<SignUp />} />
    <Route path="/dashboard" element={<Dashboard />} />
    <Route path="*" element={<Navigate to={"/"} />} />
  </Routes>
);
