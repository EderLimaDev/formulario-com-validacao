import * as yup from "yup";
import optionList from "../utils/roles";

export const userValidationSchema = yup.object().shape({
  fullname: yup.string().required("Nome Completo Obrigatório"),
  email: yup
    .string()
    .email("E-mail Inválido, utilize o formato email@email.com")
    .required("E-mail Obrigatório"),
  telefone: yup.string().required("Telefone é obrigatório"),
  cargo: yup
    .string()
    .required("Selecione um Cargo")
    .oneOf(
      optionList.map((option) => option.value),
      "Selecione uma opção válida"
    ),
});
