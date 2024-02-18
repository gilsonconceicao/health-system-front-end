import * as yup from "yup";

export const contactPatientsFormSchema = yup.object({
  name: yup.string().required("Nome é obrigatório").typeError("Campo inválido"),
  lastName: yup.string().required("Sobrenome é obrigatório").typeError("Campo inválido"),
  email: yup.string().required("Email é obrigatório").typeError("Campo inválido"),
  gender: yup.string().required("Gênero é obrigatório").typeError("Campo inválido"),
  phoneNumber: yup.string().required("Telefone é obrigatório").typeError("Campo inválido"),
  birthDate: yup.string().required("Data de nascimento é obrigatório").typeError("Campo inválido"),
  address: yup.object().shape({
    street: yup.string().required("Rua é obrigatório").typeError("Campo inválido"),
    state: yup.string().required("Estado é obrigatório").typeError("Campo inválido"),
    zipCode: yup.string().required("CEP é obrigatório").typeError("Campo inválido"),
    city: yup.string().required("Cidade é obrigatório").typeError("Campo inválido"),
    number: yup.string().required("Número é obrigatório").typeError("Campo inválido"),
  })
});

export const defaultValuesPatientsForm = {
  name: null,
  lastName: null,
  email: null,
  phoneNumber: null,
  birthDate: null, 
  gender: null, 
  address: null
}; 