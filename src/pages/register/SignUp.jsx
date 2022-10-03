import { useState } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { toast } from "react-toastify";
import { FiLogIn } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

// Utilities
import { api } from "../../services/api";

// Components
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomLabel } from "../../components/CustomLabels/CustomLabels";

// Styles
import { DivForm, HeaderRegister } from "./registerStyles";
import "react-toastify/dist/ReactToastify.css";
import { InputErrorMessage } from "../../components/errorMessage/errorMessage";

export const SignUp = () => {
  const [newUser, setNewUser] = useState([]);

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
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Formato inválido"
      ),
    confirmPass: yup
      .string()
      .required(
        <InputErrorMessage>
          Confirmação de senha obrigatória
        </InputErrorMessage>
      )
      .matches(
        "^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$",
        "Formato inválido"
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

  const navigate = useNavigate();

  const goHome = () => {
    navigate("/");
  };

  const onSubmit = (data) => {
    api
      .post("/users", data)
      .then((response) => response.data)
      .then((response) => {
        toast.success("Conta criada com sucesso!", {
          position: "top-right",
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        });
        goHome();
        console.log(response);
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
  // console.log(newUser);

  return (
    <>
      <HeaderRegister>
        <h1>Kenzie Hub</h1>
        <CustonButton onClick={() => goHome()}>
          Voltar
        </CustonButton>
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

        <CustomLabel labelName="password">
          Senha
        </CustomLabel>
        <CustomInput
          name="password"
          placeholder="Digite sua senha"
          {...register("password", { minLength: 8 })}
        />
        {errors.password?.message}

        <CustomLabel labelName="confirmPass">
          Confirmar senha
        </CustomLabel>
        <CustomInput
          name="confirmsPass"
          placeholder="Confirme a senha"
          {...register("confirmPass", {
            minLength: 8,
            validate: (value) => {
              return value === watchPassword;
            },
          })}
        />
        {errors.confirmPass?.message}

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

        <CustonButton type="submit" startIcon={<FiLogIn />}>
          Cadastrar
        </CustonButton>
      </DivForm>
    </>
  );
};