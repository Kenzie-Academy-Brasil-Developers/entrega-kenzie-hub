import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { MdAddChart } from "react-icons/md";
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

export const AddWorkModal = () => {
  const { newWork, isOpenNewWork, onCloseNewWork } =
    useContext(WorksContext);

  const techSchema = yup.object().shape({
    title: yup
      .string()
      .required(
        <InputErrorMessage>
          Nome da técnologia obrigatório
        </InputErrorMessage>
      ),
  });

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(techSchema),
  });

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <DivModal>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenNewWork}
        onClose={onCloseNewWork}
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

          <form>
            <ModalBody pb={6} bg="#212529">
              <FormControl>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Nome do projeto
                </FormLabel>
                <Input
                  ref={initialRef}
                  placeholder="Titulo do projeto"
                  color="#F8F9FA"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Descrição do projeto
                </FormLabel>
                <Input
                  placeholder="Descreva seu projeto"
                  color="#F8F9FA"
                />
              </FormControl>

              <FormControl mt={4}>
                <FormLabel color="#F8F9FA" fontSize={12}>
                  Link do projeto
                </FormLabel>
                <Input
                  placeholder="Comparilhe o link do seu projeto"
                  color="#F8F9FA"
                />
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
                leftIcon={<MdAddChart />}
                bg="#FF577F"
                borderColor="#FF577F"
                color="#F8F9FA"
                w="220px"
                _hover={{ bg: "#FF427F" }}
              >
                Adicionar
              </Button>
              <Button
                onClick={onCloseNewWork}
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
