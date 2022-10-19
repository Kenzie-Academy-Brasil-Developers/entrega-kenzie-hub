import { createContext, useEffect, useState } from "react";

import { api } from "../services/api";
import {
  ProfileInterface,
  TechsInterface,
  UserInterface,
  WorksInterface,
} from "../types/profileTypes";

interface UserPropsInterface {
  children: React.ReactNode;
}

// interface DevsSelectInterface {
//   id: string;
//   name: string;
//   contact: string;
//   email: string;
//   couse_module: string;
//   token: string;
// }

interface DevsProviderInterface {
  handleNextPage: () => void;
  handlePreviusPage: () => void;
  isDevs: ProfileInterface[];
  isDevSelect: UserInterface[];
  getDevProfile: (id: string) => Promise<void>;
  isDevTechs: TechsInterface[];
  isDevWorks: WorksInterface[];
  isFilterDevs: ProfileInterface[];
}

export const DevsContext =
  createContext<DevsProviderInterface>(
    {} as DevsProviderInterface
  );

export const DevsProvider = ({
  children,
}: UserPropsInterface) => {
  const [isPage, setIsPage] = useState(1);
  const [isDevs, setIsDevs] = useState<ProfileInterface[]>(
    []
  );

  const [isDevSelect, setIsDevSelect] = useState<
    UserInterface[]
  >([]);

  const [isDevTechs, setIsDevTechs] = useState<
    TechsInterface[]
  >([]);

  const [isDevWorks, setIsDevWorks] = useState<
    WorksInterface[]
  >([]);

  const [isFilterDevs, setIsFilterDevs] = useState<
    ProfileInterface[]
  >([]);

  useEffect(() => {
    async function getAllDevs() {
      try {
        const response = await api.get(
          `/users?perPage=10000`
        );

        setIsFilterDevs(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getAllDevs();
  }, [isPage]);

  useEffect(() => {
    async function getDevs() {
      try {
        const response = await api.get(
          `/users?perPage=8&page=${isPage}`
        );

        setIsDevs(response.data);
      } catch (error) {
        console.log(error);
      }
    }
    getDevs();
  }, [isPage]);

  const getDevProfile = async (id: string) => {
    try {
      const response = await api.get(`/users/${id}`);

      setIsDevSelect([response.data]);
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
        getDevProfile,
        isDevTechs,
        isDevWorks,
        isFilterDevs,
      }}
    >
      {children}
    </DevsContext.Provider>
  );
};
