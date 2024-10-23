import * as yup from 'yup'

export const userValidationSchema = yup.object().shape({
    fullname: yup.string().required('Nome Completo Obrigatório'),
    email: yup.string().email('E-mail Inválido').required('E-mail Obrigatório'),
    telefone: yup.string().required('Telefone é obrigatório'),
    cargo: yup.string().required('Selecione um Cargo'),

})