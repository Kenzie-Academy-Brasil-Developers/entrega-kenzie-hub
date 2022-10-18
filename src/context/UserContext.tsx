import {
  createContext,
  useState,
  useEffect,
  Dispatch,
  SetStateAction,
} from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useDisclosure } from "@chakra-ui/react";

// Utilities
import { api } from "../services/api";
import { ProfileInterface } from "../types/profileTypes";
import {
  EditFormInterface,
  LoginFormInterface,
  RegisterFormInterface,
} from "../types/userTypes";

interface UserPropsInterface {
  children: React.ReactNode;
}

interface UserProviderInterface {
  getTecs: ProfileInterface[];
  setGetTecs: Dispatch<SetStateAction<ProfileInterface[]>>;
  handleForm: (data: LoginFormInterface) => Promise<void>;
  onSubmit: (data: RegisterFormInterface) => Promise<void>;
  newUser: null | LoginFormInterface[];
  getProfile: ProfileInterface[];
  isOpenEditProfile: boolean;
  onCloseEditProfile: () => void;
  onOpenEditProfile: () => void;
  handleEditProfile: (
    data: EditFormInterface
  ) => Promise<void>;
}

export const UserContext =
  createContext<UserProviderInterface>(
    {} as UserProviderInterface
  );

export const UserProvider = ({
  children,
}: UserPropsInterface) => {
  const [newUser, setNewUser] = useState(null);

  const navigate = useNavigate();

  const {
    isOpen: isOpenEditProfile,
    onOpen: onOpenEditProfile,
    onClose: onCloseEditProfile,
  } = useDisclosure();

  const handleForm = async (data: LoginFormInterface) => {
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

  const onSubmit = async (data: RegisterFormInterface) => {
    try {
      await api.post("/users", data);
      toast.success("Conta criada com sucesso!", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
      navigate("/login", { replace: true });
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

  const [getProfile, setGetProfile] = useState<
    ProfileInterface[]
  >([]);
  const [getTecs, setGetTecs] = useState<
    ProfileInterface[]
  >([]);

  useEffect(() => {
    async function profile() {
      const token = localStorage.getItem("KenzieHub:token");

      if (token) {
        try {
          const response = await api.get("/profile");

          setGetProfile([response.data]);
          setGetTecs(response.data.techs);
        } catch (error) {
          console.log(error);
        }
      }
    }
    profile();
  }, [getTecs, getProfile]);

  const handleEditProfile = async (
    data: EditFormInterface
  ) => {
    try {
      await api.put("/profile", data);

      toast.success("Usuario editado com sucesso!", {
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

  return (
    <UserContext.Provider
      value={{
        handleForm,
        onSubmit,
        newUser,
        getProfile,
        getTecs,
        setGetTecs,
        isOpenEditProfile,
        onCloseEditProfile,
        onOpenEditProfile,
        handleEditProfile,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};