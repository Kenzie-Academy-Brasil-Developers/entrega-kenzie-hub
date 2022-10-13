import { useContext } from "react";
import { Link } from "react-router-dom";
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

export const HomePage = () => {
  const {
    handleNextPage,
    handlePreviusPage,
    isDevs,
    getDevProfile,
  } = useContext(DevsContext);

  return (
    <>
      <DivHeader>
        <h1>Kenzie Hub</h1>

        <div className="routes">
          <Link to={"/login"}>
            <div>Login</div>
          </Link>

          <Link to={"/register"}>
            <div>Cadastro</div>
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
            <Link to={`/users/${item.name}`} key={item.id}>
              <li onClick={() => getDevProfile(item.id)}>
                <h2>{item.name}</h2>
                <h3>{item.bio}</h3>
                <p>{item.contact}</p>
                <span>{item.course_module}</span>
              </li>
            </Link>
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
