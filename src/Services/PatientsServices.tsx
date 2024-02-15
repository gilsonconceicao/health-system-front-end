import axios from "axios"

export const getPatientsListAsync = async () => {
   await axios.get('http://localhost:8080/Patient') 
}