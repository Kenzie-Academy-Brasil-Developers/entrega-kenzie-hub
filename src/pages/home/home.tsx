import React, { useContext, useState } from "react";
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

interface HandleFilterInterface {
  target: any;
  preventDefault: () => void;
  event?:
    | React.ChangeEvent<HTMLInputElement>
    | React.MouseEvent<HTMLElement>;
}

export const HomePage = () => {
  const [isFiltered, setIsFiltered] = useState("");

  const {
    handleNextPage,
    handlePreviusPage,
    isDevs,
    getDevProfile,
    isFilterDevs,
  } = useContext(DevsContext);

  const handleFilter = (event: HandleFilterInterface) => {
    event.preventDefault();

    setIsFiltered(event.target.value);
  };

  const devsFiltered = isFilterDevs.filter(
    (item) =>
      !isFiltered ||
      item.name
        .toLowerCase()
        .normalize("NFD")
        .replace(/[\u0300-\u036f]/g, "")
        .includes(isFiltered)
  );

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
          <CustomInput
            placeholder={"Buscar"}
            onChange={handleFilter}
            value={isFiltered}
          />
          <CustonButton
            onClick={handleFilter}
            type={"submit"}
          >
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
          {!isFiltered
            ? isDevs.map((item) => (
                <Link
                  to={`/users/${item.name}`}
                  key={item.id}
                >
                  <li
                    onClick={() => getDevProfile(item.id)}
                  >
                    <h2>{item.name}</h2>
                    <h3>{item.bio}</h3>
                    <p>{item.contact}</p>
                    <span>{item.course_module}</span>
                  </li>
                </Link>
              ))
            : devsFiltered.map((item) => (
                <Link
                  to={`/users/${item.name}`}
                  key={item.id}
                >
                  <li
                    onClick={() => getDevProfile(item.id)}
                  >
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
