import { useDisclosure } from "@chakra-ui/react";
import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useEffect,
  useState,
} from "react";
import { toast } from "react-toastify";
import { api } from "../services/api";
import { WorksInterface } from "../types/profileTypes";
import { UserContext } from "./UserContext";

interface WorkPropsInterface {
  children: React.ReactNode;
}

interface WorkProvidersInterface {
  getWork: WorksInterface[];
  newWork: (data: NewWorkInterface) => void;
  isOpenNewWork: boolean;
  onOpenNewWork: () => void;
  onCloseNewWork: () => void;
  isOpenPutWork: boolean;
  onClosePutWork: () => void;
  onOpenPutWork: () => void;
  setGetWorkId: Dispatch<SetStateAction<string>>;
  deleteWork: () => void;
  handlePutWork: (data: PutWorkInterface) => void;
}

interface NewWorkInterface {
  title: string;
  description: string;
  deploy_url: string;
}

interface PutWorkInterface {
  title: string;
  description: string;
}

export const WorksContext =
  createContext<WorkProvidersInterface>(
    {} as WorkProvidersInterface
  );

export const WorksProvider = ({
  children,
}: WorkPropsInterface) => {
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

  const [getWork, setGetWork] = useState<WorksInterface[]>(
    []
  );

  const [getWorkId, setGetWorkId] = useState("");

  useEffect(() => {
    getProfile.map((work) => setGetWork(work.works));
  }, [getProfile]);

  const newWork = (data: NewWorkInterface) => {
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

  const handlePutWork = (data: PutWorkInterface) => {
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
