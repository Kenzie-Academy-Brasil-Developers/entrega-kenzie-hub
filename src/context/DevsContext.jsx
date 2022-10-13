import { useDisclosure } from "@chakra-ui/react";
import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";

export const DevsContext = createContext({});

export const DevsProvider = ({ children }) => {
  const [isDevs, setIsDevs] = useState([]);
  const [isPage, setIsPage] = useState(1);
  const [isDevSelect, setIsDevSelect] = useState([]);
  const [isDevTechs, setIsDevTechs] = useState([]);
  const [isDevWorks, setIsDevWorks] = useState([]);

  const { isOpen, onOpen, onClose } = useDisclosure();

  useEffect(() => {
    const getDevs = async () => {
      try {
        const response = await api.get(
          `/users?perPage=8&page=${isPage}`
        );

        setIsDevs(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    return getDevs;
  }, [isPage]);

  const getDevProfile = async (id) => {
    try {
      const response = await api.get(`/users/${id}`);

      setIsDevSelect(response.data);
      setIsDevTechs(response.data.techs);
      setIsDevWorks(response.data.works);
    } catch (error) {
      console.log(error);
    }
  };

  const handleNextPage = () => {
    setIsPage(isPage + 1);
  };

  const handlePreviusPage = () => {
    if (isPage > 0) {
      setIsPage(isPage - 1);
    }
  };

  return (
    <DevsContext.Provider
      value={{
        handleNextPage,
        handlePreviusPage,
        isDevs,
        isDevSelect,
        isOpen,
        onOpen,
        onClose,
        getDevProfile,
        isDevTechs,
        isDevWorks,
      }}
    >
      {children}
    </DevsContext.Provider>
  );
};
