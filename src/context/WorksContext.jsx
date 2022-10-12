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
      api.post("/users/works");
      toast.success("Novo Trabalho");
    } catch (error) {
      toast.error("Algo deu errado");
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
