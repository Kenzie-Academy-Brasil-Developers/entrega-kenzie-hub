import { DivContainer, DivForm } from "./loginStyles";
import { CustonButton } from "../../components/CustomButton/CustonButton";
import { CustomInput } from "../../components/CustomInput/CustomInput";
import { CustomLabel } from "../../components/CustomLabels/CustomLabels";

export const Login = () => {
  return (
    <DivContainer>
      <h1>Kenzie Hub</h1>

      <DivForm>
        <form>
          <CustomLabel labelName={"email"}>
            E-mail
          </CustomLabel>
          <CustomInput
            name={"email"}
            placeholder="Digite seu e-mail"
          />
          <CustomLabel labelName={"password"}>
            Senha
          </CustomLabel>
          <CustomInput
            name={"password"}
            placeholder="Digite sua senha"
          />
          <h2>Login</h2>
          <CustonButton>Entrar</CustonButton>
        </form>
        <span>Ainda não possui uma conta?</span>
        <CustonButton>Cadastre-se</CustonButton>
      </DivForm>
    </DivContainer>
  );
};
