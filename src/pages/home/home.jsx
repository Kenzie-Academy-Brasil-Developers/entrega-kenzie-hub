import { useContext } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { CustonButton } from "../../components/CustomButton/CustonButton";

// Utilities
import { DevsContext } from "../../context/DevsContext";

// Components
import { CustomInput } from "../../components/CustomInput/CustomInput";

// Style
import {
  DivHeader,
  DivListDevs,
  DivSearch,
} from "./homeStyles";
import { Link } from "react-router-dom";

export const HomePage = () => {
  const { handleNextPage, handlePreviusPage, isDevs } =
    useContext(DevsContext);

  return (
    <>
      <DivHeader>
        <h1>Kenzie Hub</h1>
        <div className="routes">
          <Link to={"/login"}>
            <div className="navigation">Login</div>
          </Link>

          <Link to={"/register"}>
            <div className="navigation">Cadastro</div>
          </Link>
        </div>
      </DivHeader>
      <DivSearch>
        <form className="search">
          <CustomInput placeholder={"Buscar"} />
          <CustonButton>
            <AiOutlineSearch
              size={25}
              color={"#F8F9FA"}
              className="iconSearch"
            />
          </CustonButton>
        </form>
      </DivSearch>
      <DivListDevs>
        <ul>
          {isDevs.map((item) => (
            <li key={item.id}>
              <h2>{item.name}</h2>
              <h3>{item.bio}</h3>
              <p>{item.contact}</p>
              <span>{item.course_module}</span>
            </li>
          ))}
        </ul>
        <div className="listPages">
          <CustonButton onClick={handlePreviusPage}>
            Anterior
          </CustonButton>
          <CustonButton onClick={handleNextPage}>
            Proxima
          </CustonButton>
        </div>
      </DivListDevs>
    </>
  );
};
