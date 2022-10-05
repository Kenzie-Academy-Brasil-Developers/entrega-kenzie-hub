import { DivContainer, DivForm } from "./loginStyles";
import { FiLogIn } from "react-icons/fi";
import { toast } from "react-toastify";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Utilities
import { api } from "../../services/api";

// Components
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomLabel } from "../../components/CustomLabels/CustomLabels";
import { useNavigate } from "react-router-dom";
import { InputErrorMessage } from "../../components/errorMessage/errorMessage";

export const Login = () => {
  const navigate = useNavigate();

  const goDashboard = () => {
    navigate("/dashboard");
  };

  const goSignUp = () => {
    navigate("/register");
  };

  const loginScheme = yup.object().shape({
    email: yup
      .string()
      .required(
        <InputErrorMessage>
          E-mail obrigatório
        </InputErrorMessage>
      )
      .email(
        <InputErrorMessage>
          E-mail inválido, tente outro e-mail
        </InputErrorMessage>
      ),
    password: yup
      .string()
      .required(
        <InputErrorMessage>
          Senha obrigatória
        </InputErrorMessage>
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(loginScheme),
  });

  const handleForm = (user) => {
    api
      .post("/sessions", { ...user })
      .then((response) => {
        window.localStorage.clear();
        window.localStorage.setItem(
          "KenzieHub:token",
          response.data.token
        );
        window.localStorage.setItem(
          "KenzieHub:ID",
          response.data.user.id
        );
        toast.success("Login realizado!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        goDashboard();
      })
      .catch((err) => {
        toast.error(
          "Ops, algo deu errado, confira os dados e tente novamente!",
          {
            position: "top-right",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
          }
        );
        console.log(err);
      });
  };

  return (
    <DivContainer>
      <h1>Kenzie Hub</h1>

      <DivForm>
        <form onSubmit={handleSubmit(handleForm)}>
          <CustomLabel labelName={"email"}>
            E-mail
          </CustomLabel>
          <CustomInput
            name={"email"}
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          {errors.email?.message}
          <CustomLabel labelName={"password"}>
            Senha
          </CustomLabel>
          <CustomInput
            name={"password"}
            placeholder="Digite sua senha"
            type="password"
            {...register("password")}
          />
          {errors.password?.message}
          <h2>Login</h2>
          <CustonButton startIcon={<FiLogIn size={18} />}>
            Entrar
          </CustonButton>
        </form>
        <span>Ainda não possui uma conta?</span>
        <CustonButton onClick={() => goSignUp()}>
          Cadastre-se
        </CustonButton>
      </DivForm>
    </DivContainer>
  );
};
