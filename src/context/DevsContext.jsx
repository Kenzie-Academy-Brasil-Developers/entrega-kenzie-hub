import { createContext, useEffect, useState } from "react";
import { api } from "../services/api";

export const DevsContext = createContext({});

export const DevsProvider = ({ children }) => {
  const [isDevs, setIsDevs] = useState([]);
  const [isPage, setIsPage] = useState(1);

  const handleNextPage = () => {
    setIsPage(isPage + 1);
  };

  const handlePreviusPage = () => {
    if (isPage > 0) {
      setIsPage(isPage - 1);
    }
  };

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
  }, [isPage, isDevs]);

  return (
    <DevsContext.Provider
      value={{ handleNextPage, handlePreviusPage, isDevs }}
    >
      {children}
    </DevsContext.Provider>
  );
};
