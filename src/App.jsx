import { ToastContainer } from "react-toastify";
import "./App.css";
import { RoutesMain } from "./routes";

export const App = () => {
  return (
    <>
      <RoutesMain />
      <ToastContainer></ToastContainer>
    </>
  );
};
