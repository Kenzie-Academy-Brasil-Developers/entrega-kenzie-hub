import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from "react";
import { toast } from "react-toastify";
import { useDisclosure } from "@chakra-ui/react";

// Utilities
import { api } from "../services/api";
import { UserContext } from "./UserContext";
import { TechsInterface } from "../types/profileTypes";

interface UserPropsInterface {
  children: React.ReactNode;
}

interface TechProviderInterface {
  handleFormTech: (data: NewTechInterface) => Promise<void>;
  isOpenAdd: boolean;
  onOpenAdd: () => void;
  onCloseAdd: () => void;
  handleDeleteTeach: (id: string) => Promise<void>;
  isOpenTech: boolean;
  onOpenTech: () => void;
  onCloseTech: () => void;
  setGetId: Dispatch<SetStateAction<string>>;
  getId: string;
  handlePathTech: (data: PutTechInterface) => void;
}

interface NewTechInterface {
  title: string;
  status: string;
}

interface PutTechInterface {
  status: string;
}

export const TechContext =
  createContext<TechProviderInterface>(
    {} as TechProviderInterface
  );

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

  const handleFormTech = async (
    dataTech: NewTechInterface
  ) => {
    try {
      const { data } = await api.post<TechsInterface>(
        "/users/techs",
        dataTech
      );
      toast.success("Tecnologia inserida!", {
        position: "top-right",
        autoClose: 2000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });

      setGetTecs([...getTecs, data]);
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

  const handleDeleteTeach = async (id: string) => {
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
