import { getPatientsListAsync } from "@/Services/PatientsServices"
import { useQuery } from "@tanstack/react-query"

export const usePatientServicesHook = () => {
    
    const { data, ...rest } = useQuery({
        queryKey: ["get-patients"], 
        refetchInterval: false, 
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        queryFn: async () => {
            const response =  await getPatientsListAsync();
            
            return response?.data; 
        }
    })

    return {
        data, 
        ...rest
    }
}

export interface PatientsFull {
    id: string
    createdAt: string
    name: string
    lastName: string
    gender: string
    email: string
    phoneNumber: string
    smoker: boolean
    regularExercise: boolean
    birthDate: string
    address: Address
    appointments: any[]
  }
  
  export interface Address {
    id: string
    street: string
    state: string
    zipCode: string
    city: string
    number: string
    patientId: string
  }
  