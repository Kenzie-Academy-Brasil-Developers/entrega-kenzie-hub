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
import { Link } from "react-router-dom";

// Components
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomLabel } from "../../components/CustomLabels/CustomLabels";
import { InputErrorMessage } from "../../components/errorMessage/errorMessage";

// Utilities
import { UserContext } from "../../context/UserContext";

type FormValues = {
  email: string;
  password: string;
};

export const Login = () => {
  const { handleForm } = useContext(UserContext);

  const loginScheme = yup.object().shape({
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido, tente outro e-mail"),
    password: yup.string().required("Senha obrigatória"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(loginScheme),
  });

  return (
    <DivContainer>
      <Link to={"/home"}>
        <h1>Kenzie Hub</h1>
      </Link>

      <DivForm>
        <form onSubmit={handleSubmit(handleForm)}>
          <CustomLabel labelName={"email"}>
            E-mail
          </CustomLabel>
          <CustomInput
            placeholder="Digite seu e-mail"
            {...register("email")}
          />
          <InputErrorMessage>
            {errors.email?.message}
          </InputErrorMessage>
          <CustomLabel labelName={"password"}>
            Senha
          </CustomLabel>
          <CustomInput
            placeholder="Digite sua senha"
            type="password"
            {...register("password")}
          />
          <InputErrorMessage>
            {errors.password?.message}
          </InputErrorMessage>
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
