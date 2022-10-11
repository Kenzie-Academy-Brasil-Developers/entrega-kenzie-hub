import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";

import { FiLogIn } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";

// Components
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomLabel } from "../../components/CustomLabels/CustomLabels";

// Styles
import {
  DivBackLogin,
  DivForm,
  HeaderRegister,
} from "./registerStyles";
import "react-toastify/dist/ReactToastify.css";
import { InputErrorMessage } from "../../components/errorMessage/errorMessage";
import { UserContext } from "../../context/UserContext";
import { Link } from "react-router-dom";

export const SignUp = () => {
  const formSchema = yup.object().shape({
    name: yup
      .string()
      .required(
        <InputErrorMessage>
          Nome obrigatório
        </InputErrorMessage>
      ),
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
      )
      .min(
        8,
        <InputErrorMessage>
          A senha deve conter no mínimo 8 caracteres
        </InputErrorMessage>
      )
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Formato inválido, adicione pelo menos uma letra maiuscula e um caracter especial"
      ),
    confirmPass: yup
      .string()
      .required(
        <InputErrorMessage>
          Confirmação de senha obrigatória
        </InputErrorMessage>
      )
      .min(
        8,
        <InputErrorMessage>
          A senha deve conter no mínimo 8 caracteres
        </InputErrorMessage>
      )
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Formato inválido, adicione pelo menos uma letra maiuscula e um caracter especial"
      ),
    bio: yup
      .string()
      .required(
        <InputErrorMessage>
          Bio obrigatória
        </InputErrorMessage>
      ),
    contact: yup
      .string()
      .required(
        <InputErrorMessage>
          Contato obrigatório
        </InputErrorMessage>
      ),
    course_module: yup
      .string()
      .required(
        <InputErrorMessage>
          Módulo obrigatório
        </InputErrorMessage>
      ),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(formSchema),
  });

  const watchPassword = watch("password");

  const { onSubmit } = useContext(UserContext);

  return (
    <>
      <HeaderRegister>
        <h1>Kenzie Hub</h1>
        <Link to={"/login"}>
          <DivBackLogin>
            <RiLogoutBoxLine size={16} />
            Voltar
          </DivBackLogin>
        </Link>
      </HeaderRegister>

      <DivForm onSubmit={handleSubmit(onSubmit)}>
        <h2>Crie sua conta</h2>
        <span>Rápido e grátis, vamos nessa!</span>

        <CustomLabel labelName={"name"}>Nome</CustomLabel>
        <CustomInput
          name="name"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        {errors.name?.message}

        <CustomLabel labelName="email">E-mail</CustomLabel>
        <CustomInput
          name="email"
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        {errors.email?.message}

        <CustomLabel labelName="password" type="password">
          Senha
        </CustomLabel>
        <CustomInput
          name="password"
          placeholder="Digite sua senha"
          type="password"
          {...register("password")}
        />
        <InputErrorMessage>
          {errors.password?.message}
        </InputErrorMessage>

        <CustomLabel labelName="confirmPass">
          Confirmar senha
        </CustomLabel>
        <CustomInput
          name="confirmsPass"
          placeholder="Confirme a senha"
          type="password"
          {...register("confirmPass", {
            validate: (value) => {
              return value === watchPassword;
            },
          })}
        />
        <InputErrorMessage>
          {errors.confirmPass?.message}
        </InputErrorMessage>

        <CustomLabel labelName="bio">Bio</CustomLabel>
        <CustomInput
          name="bio"
          placeholder="Conte sobre você"
          {...register("bio")}
        />
        {errors.bio?.message}

        <CustomLabel labelName="contact">
          Contato
        </CustomLabel>
        <CustomInput
          name="contact"
          placeholder="Opção de contato"
          {...register("contact")}
        />
        {errors.contact?.message}

        <CustomLabel labelName="selectModule">
          Selecionar módulo
        </CustomLabel>
        <select
          name="selectModule"
          id=""
          {...register("course_module")}
        >
          {errors.course_module?.message}
          <option value="">Selecione um módulo</option>

          <option value="Primeiro módulo(Introdução ao Frontend)">
            Primeiro módulo(Introdução ao Frontend)
          </option>

          <option value="Segundo módulo(Frontend Avançado)">
            Segundo módulo(Frontend Avançado)
          </option>

          <option value="Terceiro módulo(Introdução ao Backend)">
            Terceiro módulo(Introdução ao Backend)
          </option>

          <option value="Quarto módulo(Backend Avançado)">
            Quarto módulo(Backend Avançado)
          </option>
        </select>

        <CustonButton
          type="submit"
          startIcon={<FiLogIn size={18} />}
        >
          Cadastrar
        </CustonButton>
      </DivForm>
    </>
  );
};
