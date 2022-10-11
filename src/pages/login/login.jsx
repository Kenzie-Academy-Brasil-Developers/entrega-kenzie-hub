import { useContext } from "react";
import {
  DivContainer,
  DivForm,
  DivLink,
} from "./loginStyles";
import { FiLogIn } from "react-icons/fi";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

// Components
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomLabel } from "../../components/CustomLabels/CustomLabels";
import { UserContext } from "../../context/UserContext";

import { InputErrorMessage } from "../../components/errorMessage/errorMessage";
import { Link } from "react-router-dom";

export const Login = () => {
  const { handleForm } = useContext(UserContext);

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
        <Link to={"/register"}>
          <DivLink>Cadastre-se</DivLink>
        </Link>
      </DivForm>
    </DivContainer>
  );
};
