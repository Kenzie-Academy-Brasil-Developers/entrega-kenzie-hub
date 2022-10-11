import { useContext } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { Navigate, useNavigate } from "react-router-dom";

// Utilities
import { UserContext } from "../../context/UserContext";

// Components
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { CustomModal } from "../../components/CustomModal/CustomModal";

// Styles
import {
  Container,
  ContainerTecs,
  HeaderDash,
} from "./dashboardStyles";
import { TechContext } from "../../context/TachContext";

export const Dashboard = () => {
  const { getProfile, getTecs } = useContext(UserContext);

  const { onOpen, handleDeleteTeach } =
    useContext(TechContext);

  const navigate = useNavigate();

  const goLogin = () => {
    window.localStorage.clear();
    navigate("/");
  };
  return (
    <>
      {getProfile ? (
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
            <div className="tecnologias">
              <h3>Tecnologias</h3>
              <button onClick={onOpen}>
                <IoIosAdd size={20} color="#F8F9FA" />
              </button>
            </div>
          </Container>
          <ContainerTecs>
            {getTecs.map((item) => (
              <li key={item.id}>
                <p>{item.title}</p>
                <div className="status">
                  <span>{item.status}</span>
                  <button
                    onClick={() =>
                      handleDeleteTeach(item.id)
                    }
                  >
                    <BsTrash size={15} color="#868E96" />
                  </button>
                </div>
              </li>
            ))}
          </ContainerTecs>
        </>
      ) : (
        <Navigate to="/" replace />
      )}
      <CustomModal />
    </>
  );
};
