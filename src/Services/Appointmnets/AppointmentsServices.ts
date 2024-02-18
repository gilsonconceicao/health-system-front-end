import axios from "axios"
import { AppointmentsFull, OptionsTypeSteps } from "./appointments.type";

const url = "http://localhost:8080/Appointment"; 

export const getAppointmentsListAsync = async () => {
   return await axios.get(url) 
}

export const createOrEditAppointmentAsync = async (payload: AppointmentsFull, id: string) => {
   const isCreate = id === 'new';

   const axiosMethod = isCreate ? axios.post : axios.put;
   const urlMethod = isCreate ? url : `${url}/${id}` 
   return await axiosMethod(urlMethod, payload) 
}

export const deleteAppointmentsByIdAsync = async (id: string) => {
   return await axios.delete(`${url}/${id}`) 
}

export const jumpEveryStepsAppointmentsAsync = async (id: string, type: OptionsTypeSteps) => {
   return await axios.put(`${url}/${id}/${type}`)
}

export const feedbackAppointmentsAsync = async (id: string, feedbackMessage: string) => {
   return await axios.post(`${url}/${id}/Feedback`, {
      feedbackMessage
   })
}