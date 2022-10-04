import { useEffect, useState } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

import { CustonButton } from "../../components/CustomButton/CustonButton";
import { api } from "../../services/api";
import { Container, HeaderDash } from "./dashboardStyles";

export const Dashboard = () => {
  const [getProfile, setGetProfile] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    api
      .get("/profile")
      .then((response) => {
        window.localStorage.getItem("KenzieHub:token");
        setGetProfile([response.data]);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(getProfile);
  const goLogin = () => {
    window.localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <HeaderDash>
        <h1>Kenzie Hub</h1>
        <CustonButton
          onClick={() => goLogin()}
          startIcon={<RiLogoutBoxLine size={16} />}
        >
          Sair
        </CustonButton>
      </HeaderDash>
      <Container>
        <ul>
          {getProfile.map((item) => (
            <li key={item.id}>
              <h2>Olá, {item.name}</h2>
              <p>{item.course_module}</p>
            </li>
          ))}
        </ul>
        <div>
          <h3>Que pena! Estamos em desenvolvimento :(</h3>
          <span>
            Nossa aplicação está em desenvolvimento, em
            breve teremos novidades
          </span>
        </div>
      </Container>
    </>
  );
};
