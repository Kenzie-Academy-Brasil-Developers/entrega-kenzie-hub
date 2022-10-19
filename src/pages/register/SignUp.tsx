import { useContext } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { Link } from "react-router-dom";
import { FiLogIn } from "react-icons/fi";
import { RiLogoutBoxLine } from "react-icons/ri";

// Utilities
import { UserContext } from "../../context/UserContext";

// Components
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomLabel } from "../../components/CustomLabels/CustomLabels";
import { InputErrorMessage } from "../../components/errorMessage/errorMessage";

// Styles
import {
  DivBackLogin,
  DivForm,
  HeaderRegister,
} from "./registerStyles";
import "react-toastify/dist/ReactToastify.css";

type FormValues = {
  name: string;
  email: string;
  contact: string;
  bio: string;
  password: string;
  course_module: string;
  confirmPass: string;
};

export const SignUp = () => {
  const formSchema = yup.object().shape({
    name: yup.string().required("Nome obrigatório"),
    email: yup
      .string()
      .required("E-mail obrigatório")
      .email("E-mail inválido, tente outro e-mail"),
    password: yup
      .string()
      .required("Senha obrigatória")
      .min(8, "Deve conter no mínimo 8 caracteres")
      .matches(
        /[A-Z]/,
        "Deve conter ao menos uma letra maiúscula"
      )
      .matches(
        /[a-z]/,
        "Deve conter ao menos uma letra minúscula"
      )
      .matches(/[0-9]/, "Deve conter ao menos um número")
      .matches(
        /(\W)|_/,
        "Deve conter ao menos um caracter especial"
      ),
    confirmPass: yup
      .string()
      .required("Confirmação de senha obrigatória")
      .min(8, "Deve conter no mínimo 8 caracteres")
      .matches(
        /[A-Z]/,
        "Deve conter ao menos uma letra maiúscula"
      )
      .matches(
        /[a-z]/,
        "Deve conter ao menos uma letra minúscula"
      )
      .matches(/[0-9]/, "Deve conter ao menos um número")
      .matches(
        /(\W)|_/,
        "Deve conter ao menos um caracter especial"
      ),
    bio: yup.string().required("Bio obrigatória"),
    contact: yup.string().required("Contato obrigatório"),
    course_module: yup
      .string()
      .required("Módulo obrigatório"),
  });

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<FormValues>({
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
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <InputErrorMessage>
          {errors.name?.message}
        </InputErrorMessage>

        <CustomLabel labelName="email">E-mail</CustomLabel>
        <CustomInput
          placeholder="Digite seu e-mail"
          {...register("email")}
        />
        <InputErrorMessage>
          {errors.email?.message}
        </InputErrorMessage>

        <CustomLabel labelName="password">
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

        <CustomLabel labelName="confirmPass">
          Confirmar senha
        </CustomLabel>
        <CustomInput
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
          placeholder="Conte sobre você"
          {...register("bio")}
        />
        <InputErrorMessage>
          {errors.bio?.message}
        </InputErrorMessage>

        <CustomLabel labelName="contact">
          Contato
        </CustomLabel>
        <CustomInput
          placeholder="Opção de contato"
          {...register("contact")}
        />
        <InputErrorMessage>
          {errors.contact?.message}
        </InputErrorMessage>

        <CustomLabel labelName="selectModule">
          Selecionar módulo
        </CustomLabel>
        <select id="" {...register("course_module")}>
          <InputErrorMessage>
            {errors.course_module?.message}
          </InputErrorMessage>
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
