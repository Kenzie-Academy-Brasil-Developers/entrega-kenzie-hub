import { createContext, useContext } from "react";
import { toast } from "react-toastify";
import { useDisclosure } from "@chakra-ui/react";

import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const TechContext = createContext({});

export const TechProvider = ({ children }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const { getTecs, setGetTecs } = useContext(UserContext);

  const handleFormTech = async (data) => {
    try {
      const response = await api.post("/users/techs", data);
      toast.success("Tecnologia inserida!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setGetTecs([...getTecs, response.data]);
    } catch (error) {
      console.log(error);

      toast.error(
        "Ops, não conseguimos cadastrar, verifique os campos e tente novamente!",
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
    }
  };

  const handleDeleteTeach = async (id) => {
    try {
      await api.delete(`/users/techs/${id}`);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <TechContext.Provider
      value={{
        handleFormTech,
        isOpen,
        onOpen,
        onClose,
        handleDeleteTeach,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
