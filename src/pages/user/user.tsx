import { useContext } from "react";
import { Link } from "react-router-dom";
import { HiOutlineEmojiSad } from "react-icons/hi";

// Utilities
import { DevsContext } from "../../context/DevsContext";

// Styles
import { DevContainer, DivHeader } from "./userStyles";

export const User = () => {
  const { isDevSelect, isDevTechs, isDevWorks } =
    useContext(DevsContext);

  return (
    <>
      <DivHeader>
        <Link to={"/home"}>
          <h1>Kenzie Hub</h1>
        </Link>
        <Link to={"/home"}>Voltar</Link>
        <div className="routes">
          <Link to={"/login"}>
            <div>Login</div>
          </Link>

          <Link to={"/register"}>
            <div>Cadastro</div>
          </Link>
        </div>
      </DivHeader>

      <DevContainer>
        {isDevSelect.map((dev) => (
          <div key={dev.id}>
            <div className="userData">
              <h2>{dev.name}</h2>
              <span>{dev.course_module}</span>
            </div>

            <div className="information">
              <h2>Bio: {dev.bio}</h2>
              <h3>Contato: {dev.contact}</h3>
            </div>
          </div>
        ))}

        <div className="techs">
          {isDevTechs.length ? (
            <ul>
              <h2>Tecnologias: </h2>
              {isDevTechs.map((tech) => (
                <li key={tech.id}>
                  <div className="eachTech">
                    <p>{tech.title}</p>
                    <span>{tech.status}</span>{" "}
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="badNotifications">
              <p>Não possuí tecnologias cadastrada </p>
              <HiOutlineEmojiSad
                size={22}
                color={"#343B41"}
              />
            </div>
          )}
        </div>

        <div className="works">
          {isDevWorks.length ? (
            <ul>
              <p>Projetos: </p>
              {isDevWorks.map((work) => (
                <li key={work.id}>
                  <div className="eachWork">
                    <p>{work.title}</p>
                    <span>{work.description}</span>
                    <a
                      href={work.deploy_url}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Link do projeto
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          ) : (
            <div className="badNotifications">
              <p>Não possuí projetos cadastrado </p>
              <HiOutlineEmojiSad
                size={22}
                color={"#343B41"}
              />
            </div>
          )}
        </div>
      </DevContainer>
    </>
  );
};
