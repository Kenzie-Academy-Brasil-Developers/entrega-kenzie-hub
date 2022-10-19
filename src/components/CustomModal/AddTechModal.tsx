import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { IoMdBuild } from "react-icons/io";
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
  Select,
} from "@chakra-ui/react";

// Utilities
import { TechContext } from "../../context/TechContext";

// Components
import { InputErrorMessage } from "../errorMessage/errorMessage";

// Styles
import { DivModal, Options } from "./ModalStyles";
import { string } from "yup/lib/locale";

interface ModalPropsInterface {
  children: React.ReactNode;
}

type FormValues = {
  title: string;
  status: string;
};

export const AddTechModal = () => {
  const techSchema = yup.object().shape({
    title: yup
      .string()
      .required("Nome da técnologia obrigatório"),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormValues>({
    resolver: yupResolver(techSchema),
  });

  const { handleFormTech, isOpenAdd, onCloseAdd } =
    useContext(TechContext);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <DivModal>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenAdd}
        onClose={onCloseAdd}
      >
        <ModalOverlay />
        <ModalContent w={300} top="100">
          <ModalHeader
            bg="#343B41"
            color="#F8F9FA"
            fontSize={15}
            borderTopRadius="5"
          >
            Cadastrar Tecnologia
          </ModalHeader>
          <ModalCloseButton color="#F8F9FA" />
          <form onSubmit={handleSubmit(handleFormTech)}>
            <ModalBody pb={6} bg="#212529">
              <FormControl>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Nome
                </FormLabel>
                <Input
                  placeholder="Digite o nome da tecnologia"
                  color="#F8F9FA"
                  borderColor="#F8F9FA"
                  mb={5}
                  {...register("title")}
                />
                <InputErrorMessage>
                  {errors.title?.message}
                </InputErrorMessage>
              </FormControl>

              <FormControl mt={4}>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Selecionar status
                </FormLabel>
                <Select
                  placeholder="Selecione seu nível"
                  bg="#212529"
                  borderColor="#F8F9FA"
                  color="#F8F9FA"
                  {...register("status")}
                >
                  <Options value="Iniciante">
                    Iniciante
                  </Options>
                  <Options value="Intermediário">
                    Intermediário
                  </Options>
                  <Options value="Avançado">
                    Avançado
                  </Options>
                </Select>
              </FormControl>
            </ModalBody>

            <ModalFooter
              bg="#212529"
              borderBottomRadius="5"
            >
              <Button
                type="submit"
                leftIcon={<IoMdBuild />}
                bg="#FF577F"
                borderColor="#FF577F"
                color="#F8F9FA"
                w="259.9px"
                _hover={{ bg: "#FF427F" }}
              >
                Cadastrar Tecnologia
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </DivModal>
  );
};
