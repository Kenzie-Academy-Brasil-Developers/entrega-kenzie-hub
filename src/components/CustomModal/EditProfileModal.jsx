import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEdit } from "react-icons/ai";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Button,
  FormControl,
  FormLabel,
  Input,
} from "@chakra-ui/react";

// Utilities
import { UserContext } from "../../context/UserContext";

// Styles
import { DivModal } from "./ModalStyles";
import { InputErrorMessage } from "../errorMessage/errorMessage";

export const EditProfileModal = () => {
  const {
    handleEditProfile,
    isOpenEditProfile,
    onCloseEditProfile,
  } = useContext(UserContext);

  const changeWorkSchema = yup.object().shape({
    name: yup
      .string()
      .required(
        <InputErrorMessage>
          Nome obrigatório
        </InputErrorMessage>
      ),
    contact: yup
      .string()
      .required(
        <InputErrorMessage>
          Contato obrigatório
        </InputErrorMessage>
      ),
    old_password: yup
      .string()
      .required(
        <InputErrorMessage>
          Senha antiga obrigatório
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
          Deve conter no mínimo 8 caracteres
        </InputErrorMessage>
      )
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
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(changeWorkSchema),
  });

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <DivModal>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenEditProfile}
        onClose={onCloseEditProfile}
      >
        <ModalOverlay />
        <ModalContent w={300} top="100">
          <ModalHeader
            bg="#343B41"
            color="#F8F9FA"
            fontSize={15}
            borderTopRadius="5"
          >
            Editar Perfil
          </ModalHeader>

          <ModalCloseButton color="#F8F9FA" />

          <form onSubmit={handleSubmit(handleEditProfile)}>
            <ModalBody pb={6} bg="#212529">
              <FormControl>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Nome
                </FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Atualize seu nome"
                  color="#F8F9FA"
                  marginBottom="12px"
                  {...register("name")}
                />
                {errors.title?.message}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Contato
                </FormLabel>
                <Input
                  placeholder="Atualize seu contato"
                  color="#F8F9FA"
                  marginBottom="12px"
                  {...register("contact")}
                />
                {errors.contact?.message}
              </FormControl>

              <FormControl>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Senha antiga
                </FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Digite sua senha antiga"
                  color="#F8F9FA"
                  marginBottom="12px"
                  {...register("old_password")}
                />
                {errors.old_password?.message}
              </FormControl>

              <FormControl>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Nova Senha
                </FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Digite sua nova senha"
                  color="#F8F9FA"
                  marginBottom="12px"
                  {...register("password")}
                />
                <InputErrorMessage>
                  {errors.password?.message}
                </InputErrorMessage>
              </FormControl>
            </ModalBody>

            <ModalFooter
              display="flex"
              justifyContent="center"
              gap="10px"
              bg="#212529"
              borderBottomRadius="5"
            >
              <Button
                type="submit"
                leftIcon={<AiOutlineEdit />}
                bg="#FF577F"
                borderColor="#FF577F"
                color="#F8F9FA"
                w="220px"
                _hover={{ bg: "#FF427F" }}
              >
                Atualizar
              </Button>
              <Button
                onClick={onCloseEditProfile}
                type="button"
                bg="#868E96"
                borderColor="#868E96"
                color="#F8F9FA"
                w="110px"
                _hover={{ bg: "#343B41" }}
                transition="0.5s ease"
              >
                Cancelar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </DivModal>
  );
};
