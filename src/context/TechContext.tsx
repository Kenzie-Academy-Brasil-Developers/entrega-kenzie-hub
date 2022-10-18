import { createContext, useContext, useState } from "react";
import { toast } from "react-toastify";
import { useDisclosure } from "@chakra-ui/react";

// Utilities
import { api } from "../services/api";
import { UserContext } from "./UserContext";

interface UserPropsInterface {
  children: React.ReactNode;
}

interface NewTechInterface {
  title: string;
  status: string;
}

interface PutTechInterface {
  status: string;
}

export const TechContext = createContext({});

export const TechProvider = ({
  children,
}: UserPropsInterface) => {
  const {
    isOpen: isOpenAdd,
    onOpen: onOpenAdd,
    onClose: onCloseAdd,
  } = useDisclosure();

  const {
    isOpen: isOpenTech,
    onOpen: onOpenTech,
    onClose: onCloseTech,
  } = useDisclosure();

  const { getTecs, setGetTecs } = useContext(UserContext);

  const handleFormTech = async (data: NewTechInterface) => {
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

  const [getId, setGetId] = useState("");

  const handleDeleteTeach = async (id: number) => {
    try {
      await api.delete(`/users/techs/${id}`);
      toast.success("Tecnologia removida!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error(
        "Ops, não conseguimos deletar essa tecnologia!",
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

  const handlePathTech = (data: PutTechInterface) => {
    try {
      api.put(`/users/techs/${getId}`, data);
      toast.success("Nível editado!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    } catch (error) {
      toast.error(
        "Ops, não conseguimos editar esse nível!",
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

  return (
    <TechContext.Provider
      value={{
        handleFormTech,
        isOpenAdd,
        onOpenAdd,
        onCloseAdd,
        handleDeleteTeach,
        isOpenTech,
        onOpenTech,
        onCloseTech,
        setGetId,
        getId,
        handlePathTech,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
