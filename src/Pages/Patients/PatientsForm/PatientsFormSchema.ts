import * as yup from "yup";

export const contactPatientsFormSchema = yup.object({
  name: yup.string().required("Nome é obrigatório"),
  email: yup.string().required("Email é obrigatório"),
  gender: yup.string().required("Gênero é obrigatório"),
  phoneNumber: yup.string().required("Telefone é obrigatório"),
//   birthDate: yup.string().nullable()
});

export const defaultValuesPatientsForm = {
  name: null,
  email: null,
  phoneNumber: null,
//   birthDate: null, 
  gender: null
}; 