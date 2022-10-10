import { createContext, useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

// Utilities
import { api } from "../services/api";
import { useForm } from "react-hook-form";

export const UserContext = createContext({});

export const UserProvider = ({ children }) => {
  const [newUser, setNewUser] = useState(null);

  const { reset } = useForm();

  const navigate = useNavigate();

  const goSignUp = () => {
    navigate("/register");
  };

  const goHome = () => {
    navigate("/login");
  };

  const handleForm = async (data) => {
    try {
      const response = await api.post("/sessions", {
        ...data,
      });
      window.localStorage.clear();

      window.localStorage.setItem(
        "KenzieHub:token",
        response.data.token
      );
      window.localStorage.setItem(
        "KenzieHub:ID",
        response.data.user.id
      );
      toast.success("Login realizado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      const user = response.data;
      setNewUser(user);
      navigate("/dashboard", { replace: true });
    } catch (error) {
      toast.error(
        "Ops, algo deu errado, confira os dados e tente novamente!",
        {
          position: "top-right",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log(error);
    }
  };

  const onSubmit = async (data) => {
    try {
      const response = await api.post("/users", data);
      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/", { replace: true });
    } catch (error) {
      toast.error(
        "Ops, algo deu errado, confira os dados e tente novamente!",
        {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        }
      );
      console.log(error);
    }
  };

  return (
    <UserContext.Provider
      value={{
        goSignUp,
        handleForm,
        onSubmit,
        goHome,
        newUser,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
