import * as yup from "yup";

export const feedbackFormSchema = yup.object({
  feedbackMessage: yup.string().required("Feedback é obrigatório").typeError("Campo inválido")
});

export const defaultValuesFeedbackForm = {
  feedbackMessage: null
}; 