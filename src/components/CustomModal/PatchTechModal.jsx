import { useContext, useRef } from "react";
import { useForm } from "react-hook-form";
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
  Select,
} from "@chakra-ui/react";

// Utilities
import { TechContext } from "../../context/TachContext";

// Styles
import { DivModal, Options } from "./ModalStyles";

export const PatchTechModal = () => {
  const { register, handleSubmit } = useForm();

  const {
    handlePathTech,
    isOpenTech,
    onCloseTech,
    handleDeleteTeach,
    getId,
  } = useContext(TechContext);

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <DivModal>
      <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpenTech}
        onClose={onCloseTech}
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
          <form onSubmit={handleSubmit(handlePathTech)}>
            <ModalBody pb={6} bg="#212529">
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
              display="flex"
              justifyContent="center"
              gap="10px"
              bg="#212529"
              borderBottomRadius="5"
            >
              <Button
                type="submit"
                onClick={() => handleSubmit(getId)}
                leftIcon={<IoMdBuild />}
                bg="#59323F"
                borderColor="#59323F"
                color="#F8F9FA"
                w="195px"
                _hover={{ bg: "#FF427F" }}
                transition="0.5s ease"
              >
                Editar
              </Button>

              <Button
                type="button"
                bg="#868E96"
                borderColor="#868E96"
                color="#F8F9FA"
                w="98px"
                _hover={{ bg: "#343B41" }}
                transition="0.5s ease"
                onClick={() => handleDeleteTeach(getId)}
              >
                Deletar
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </DivModal>
  );
};
