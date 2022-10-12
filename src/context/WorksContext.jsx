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

  const {
    isOpen: isOpenPutWork,
    onOpen: onOpenPutWork,
    onClose: onClosePutWork,
  } = useDisclosure();

  const { getProfile } = useContext(UserContext);

  const [getWork, setGetWork] = useState([]);

  const [getWorkId, setGetWorkId] = useState("");

  useEffect(() => {
    getProfile.map((work) => setGetWork(work.works));
  }, [getProfile]);

  const newWork = (data) => {
    try {
      api.post("/users/works", data);
      toast.success("Projeto adicionado com sucesso!", {
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

  const deleteWork = () => {
    try {
      api.delete(`/users/works/${getWorkId}`);
      toast.success("Projeto excluído com sucesso!", {
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

  const handlePutWork = (data) => {
    try {
      api.put(`/users/works/${getWorkId}`, data);
      toast.success("deu certo");
    } catch (error) {
      toast.error("deu errado");
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
        isOpenPutWork,
        onClosePutWork,
        onOpenPutWork,
        setGetWorkId,
        deleteWork,
        handlePutWork,
      }}
    >
      {children}
    </WorksContext.Provider>
  );
};
