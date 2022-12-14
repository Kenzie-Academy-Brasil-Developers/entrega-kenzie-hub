import { useContext } from "react";
import { RiLogoutBoxLine } from "react-icons/ri";
import { IoIosAdd } from "react-icons/io";
import { BsTrash } from "react-icons/bs";
import { AiOutlineEdit } from "react-icons/ai";
import { Link, useNavigate } from "react-router-dom";

// Utilities
import { UserContext } from "../../context/UserContext";
import { TechContext } from "../../context/TechContext";
import { WorksContext } from "../../context/WorksContext";

// Components
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { AddTechModal } from "../../components/CustomModal/AddTechModal";
import { PatchTechModal } from "../../components/CustomModal/PatchTechModal";
import { AddWorkModal } from "../../components/CustomModal/AddWorkModal";
import { PutWorkModal } from "../../components/CustomModal/PutWorksModal";
import { EditProfileModal } from "../../components/CustomModal/EditProfileModal";

// Styles
import {
  Container,
  ContainerTecs,
  ContainerWorks,
  HeaderDash,
} from "./dashboardStyles";

export const Dashboard = () => {
  const { getProfile, getTecs, onOpenEditProfile } =
    useContext(UserContext);

  const {
    onOpenAdd,
    handleDeleteTeach,
    onOpenTech,
    setGetId,
  } = useContext(TechContext);

  const {
    getWork,
    onOpenNewWork,
    onOpenPutWork,
    setGetWorkId,
  } = useContext(WorksContext);

  const navigate = useNavigate();

  const goLogin = () => {
    window.localStorage.clear();
    navigate("/login");
  };

  return (
    <>
      <>
        <HeaderDash>
          <h1>
            <Link to={"/home"}> Kenzie Hub</Link>
          </h1>
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
                <div className="userData">
                  <h2>Olá, {item.name}</h2>
                  <p>{item.course_module}</p>
                </div>
                <CustonButton
                  startIcon={<AiOutlineEdit size={16} />}
                  onClick={onOpenEditProfile}
                >
                  Editar
                </CustonButton>
              </li>
            ))}
          </ul>
          <div className="tecnologias">
            <h3>Tecnologias</h3>
            <button onClick={onOpenAdd}>
              <IoIosAdd size={20} color="#F8F9FA" />
            </button>
          </div>
        </Container>
        <ContainerTecs>
          {getTecs.map((item) => (
            <li
              key={item.id}
              onClick={onOpenTech}
              onClickCapture={() => setGetId(item.id)}
            >
              <p>{item.title}</p>
              <div className="status">
                <span>{item.status}</span>
                <button
                  onClick={() => handleDeleteTeach(item.id)}
                >
                  <BsTrash size={15} color="#868E96" />
                </button>
              </div>
            </li>
          ))}
        </ContainerTecs>
        <ContainerWorks>
          <div className="headerWorks">
            <h2>Projetos</h2>
            <button onClick={onOpenNewWork}>
              <IoIosAdd size={20} color="#F8F9FA" />
            </button>
          </div>
          {getWork ? (
            <ul>
              {getWork.map((work) => (
                <li
                  key={work.id}
                  onClick={onOpenPutWork}
                  onClickCapture={() =>
                    setGetWorkId(work.id)
                  }
                >
                  <div className="content">
                    <h3>{work.title}</h3>
                    <p>{work.description}</p>
                  </div>
                  <a
                    className="link"
                    href={work.deploy_url}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Visite o site
                  </a>
                </li>
              ))}
            </ul>
          ) : (
            <h3>Ainda não possuí trabalhos para exibir</h3>
          )}
        </ContainerWorks>
      </>

      <AddTechModal />
      <PatchTechModal />
      <AddWorkModal />
      <PutWorkModal />
      <EditProfileModal />
    </>
  );
};
