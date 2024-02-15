import { getPatientsListAsync } from "@/Services/PatientsServices"
import { useQuery } from "@tanstack/react-query"

export const usePatientServicesHook = () => {
    
    return useQuery({
        queryKey: ["get-patients"], 
        refetchInterval: false, 
        refetchOnWindowFocus: false,
        refetchOnMount: false,
        queryFn: async () => await getPatientsListAsync()
    })
}