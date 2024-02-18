import * as yup from "yup";

export const appointmentsFormSchema = yup.object({
  appointmentDate: yup.string().required("Data da consulta é obrigatório").typeError("Campo inválido"),
  reason: yup.string().required("Razão é obrigatório").typeError("Campo inválido")
});

export const defaultValuesAppointmentsForm = {
  appointmentDate: null
}; 