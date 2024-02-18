import { createOrEditPatientAsync, deletePatientByIdAsync, getPatientsListAsync } from "@/Services/Patients/PatientsServices"
import { PatientsFull } from "@/Services/Patients/patients.type";
import { useMutation, useQuery } from "@tanstack/react-query"

export const usePatientServicesHook = () => {

    const { data, ...rest } = useQuery({
        queryKey: ["get-patients"],
        refetchInterval: false,
        refetchOnWindowFocus: 'always',
        refetchOnMount: 'always',
        queryFn: async () => {
            const response = await getPatientsListAsync();

            return response?.data;
        }
    })

    return {
        data,
        ...rest
    }
}

export const useCreateOrEditPatientMutation = (id: string, onSuccess?: () => void) => {
    return useMutation({
        mutationFn: async (params: PatientsFull) => {
            await createOrEditPatientAsync(params, id)
        },
        onSuccess: (success, _) => onSuccess && onSuccess(), 
        onError: (error, _) => {
            console.log('mutationError', error)
        }
    })
}

export const useDeletePatientMutation = (onSuccess?: () => void) => {
    return useMutation({
        mutationFn: async (id: string) => {
            await deletePatientByIdAsync(id)
        },
        onSuccess: (success, _) => onSuccess && onSuccess(), 
        onError: (error, _) => {
            console.log('mutationError', error)
        }
    })
}
