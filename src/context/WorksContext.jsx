import {
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { UserContext } from "./UserContext";

export const WorksContext = createContext({});

export const WorksProvider = ({ children }) => {
  const { getProfile } = useContext(UserContext);

  const [getWork, setGetWork] = useState([]);

  useEffect(() => {
    getProfile.map((work) => setGetWork(work.works));
  }, [getProfile]);

  return (
    <WorksContext.Provider value={{ getWork }}>
      {children}
    </WorksContext.Provider>
  );
};
