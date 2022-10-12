import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { AiOutlineEdit } from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
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
import { WorksContext } from "../../context/WorksContext";

// Styles
import { DivModal } from "./ModalStyles";
import { InputErrorMessage } from "../errorMessage/errorMessage";

export const PutWorkModal = () => {
  const {
    handlePutWork,
    isOpenPutWork,
    onClosePutWork,
    deleteWork,
  } = useContext(WorksContext);

  const changeWorkSchema = yup.object().shape({
    title: yup
      .string()
      .required(
        <InputErrorMessage>
          Nome do projeto obrigatório
        </InputErrorMessage>
      ),
    description: yup
      .string()
      .required(
        <InputErrorMessage>
          Descrição do projeto obrigatório
        </InputErrorMessage>
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
        isOpen={isOpenPutWork}
        onClose={onClosePutWork}
      >
        <ModalOverlay />
        <ModalContent w={300} top="100">
          <ModalHeader
            bg="#343B41"
            color="#F8F9FA"
            fontSize={15}
            borderTopRadius="5"
          >
            Adicione um novo trabalho
          </ModalHeader>

          <ModalCloseButton color="#F8F9FA" />

          <form onSubmit={handleSubmit(handlePutWork)}>
            <ModalBody pb={6} bg="#212529">
              <FormControl>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Nome do projeto
                </FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Titulo do projeto"
                  color="#F8F9FA"
                  marginBottom="12px"
                  {...register("title")}
                />
                {errors.title?.message}
              </FormControl>

              <FormControl mt={4}>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Descrição do projeto
                </FormLabel>
                <Input
                  placeholder="Descreva seu projeto"
                  color="#F8F9FA"
                  marginBottom="12px"
                  {...register("description")}
                />
                {errors.description?.message}
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
                onClick={deleteWork}
                leftIcon={<BsTrash />}
                type="button"
                bg="#868E96"
                borderColor="#868E96"
                color="#F8F9FA"
                w="110px"
                _hover={{ bg: "#343B41" }}
                transition="0.5s ease"
              >
                Excluir
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </DivModal>
  );
};
