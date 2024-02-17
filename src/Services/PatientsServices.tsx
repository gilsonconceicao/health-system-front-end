import { PatientsFull } from "@/Hooks/PatientServicesHook"
import axios from "axios"

const url = "http://localhost:8080/Patient"; 

export const getPatientsListAsync = async () => {
   return await axios.get(url, {
      params: {
         page: 0, 
         size: 100
      }
   }) 
}

export const createOrEditPatientAsync = async (payload: PatientsFull, id: string) => {
   const isCreate = id === 'new';

   const axiosMethod = isCreate ? axios.post : axios.put;
   const urlMethod = isCreate ? url : `${url}/${id}` 
   return await axiosMethod(urlMethod, payload) 
}

export const deletePatientByIdAsync = async (id: string) => {
   return await axios.delete(`${url}/${id}`) 
}