import * as yup from "yup";

export const appointmentsFormSchema = yup.object({
  patientId: yup.string().required("Paciente é obrigatório").typeError("Campo inválido"),
  appointmentDate: yup.string().required("Data da consulta é obrigatório").typeError("Campo inválido"),
  reason: yup.string().required("Razão é obrigatório").typeError("Campo inválido")
});

export const defaultValuesAppointmentsForm = {
  appointmentDate: null,
  patientId: null,
  reason: null
}; 