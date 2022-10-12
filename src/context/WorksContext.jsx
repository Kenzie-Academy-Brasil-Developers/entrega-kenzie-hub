import { useDisclosure } from "@chakra-ui/react";
import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { UserContext } from "./UserContext";

export const WorksContext = createContext({});

export const WorksProvider = ({ children }) => {
  const {
    isOpen: isOpenNewWork,
    onOpen: onOpenNewWork,
    onClose: onCloseNewWork,
  } = useDisclosure();

  const { getProfile } = useContext(UserContext);

  const [getWork, setGetWork] = useState([]);

  useEffect(() => {
    getProfile.map((work) => setGetWork(work.works));
  }, [getProfile]);

  const newWork = (data) => {
    try {
      api.post("/users/works", data);
      toast.success("Projeto adicionado com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
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
    <WorksContext.Provider
      value={{
        getWork,
        newWork,
        isOpenNewWork,
        onOpenNewWork,
        onCloseNewWork,
      }}
    >
      {children}
    </WorksContext.Provider>
  );
};
