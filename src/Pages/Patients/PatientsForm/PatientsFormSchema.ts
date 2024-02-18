import * as yup from "yup";

export const contactPatientsFormSchema = yup.object({
  name: yup.string().required("Nome é obrigatório").typeError("Campo inválido"),
  lastName: yup.string().required("Sobrenome é obrigatório").typeError("Campo inválido"),
  email: yup.string().required("Email é obrigatório").typeError("Campo inválido"),
  gender: yup.string().required("Gênero é obrigatório").typeError("Campo inválido"),
  phoneNumber: yup.string().required("Telefone é obrigatório").typeError("Campo inválido"),
  birthDate: yup.string().required("Data de nascimento é obrigatório").typeError("Campo inválido"),
  address: yup.object().shape({
    street: yup.string().nullable(),
    state: yup.string().nullable(),
    zipCode: yup.string().nullable(),
    city: yup.string().nullable(),
    number: yup.string().nullable()
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