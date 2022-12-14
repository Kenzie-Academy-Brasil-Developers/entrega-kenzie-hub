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
import {
  TechsInterface,
  UserInterface,
} from "../types/profileTypes";
import {
  EditFormInterface,
  LoginFormInterface,
  RegisterFormInterface,
  ResponseLoginInterface,
} from "../types/userTypes";

interface UserPropsInterface {
  children: React.ReactNode;
}

interface UserProviderInterface {
  getTecs: TechsInterface[];
  setGetTecs: Dispatch<SetStateAction<TechsInterface[]>>;
  handleForm: (data: LoginFormInterface) => Promise<void>;
  onSubmit: (data: RegisterFormInterface) => Promise<void>;
  getProfile: UserInterface[];
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
  const navigate = useNavigate();

  const {
    isOpen: isOpenEditProfile,
    onOpen: onOpenEditProfile,
    onClose: onCloseEditProfile,
  } = useDisclosure();

  const handleForm = async (
    dataUser: LoginFormInterface
  ) => {
    try {
      const { data } =
        await api.post<ResponseLoginInterface>(
          "/sessions",
          {
            ...dataUser,
          }
        );
      window.localStorage.clear();

      window.localStorage.setItem(
        "KenzieHub:token",
        data.token!
      );
      window.localStorage.setItem(
        "KenzieHub:ID",
        data.user.id
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
      await api.post<LoginFormInterface>("/users", data);
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
    UserInterface[]
  >([]);
  const [getTecs, setGetTecs] = useState<TechsInterface[]>(
    []
  );

  useEffect(() => {
    async function profile() {
      const token = localStorage.getItem("KenzieHub:token");

      if (token) {
        try {
          const { data } = await api.get<UserInterface>(
            "/profile"
          );

          setGetProfile([data]);
          setGetTecs(data.techs!);
        } catch (error) {
          console.log(error);
        }
      }
    }
    profile();
    autoLogin();
  }, [getTecs]);

  const autoLogin = () => {
    const token = localStorage.getItem("KenzieHub:token");

    if (token) {
      navigate("/dashboard");
    }
  };

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
