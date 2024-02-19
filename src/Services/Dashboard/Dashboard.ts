import axios from "axios"

const url = "http://localhost:8080/Dashboard"; 

export const getDashboardData = async () => {
   return await axios.get(url, {
      params: {
         page: 0, 
         size: 15
      }
   }) 
}