import { useToast } from "@/Components/ui/use-toast";
import { createOrEditPatientAsync, deletePatientByIdAsync, getPatientsListAsync } from "@/Services/Patients/PatientsServices"
import { PatientsFull } from "@/Services/Patients/patients.type";
import { ApiReponseError } from "@/Validations/MapperErrorMessage";
import { handlerErrorMessage } from "@/Validations/handlerErrorsMessage";
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
    const { toast } = useToast();
    return useMutation({
        mutationFn: async (params: PatientsFull) => {
            await createOrEditPatientAsync(params, id)
        },
        onSuccess: (success, _) => {
            toast({
                title: id != 'new' ? "Sucesso ao editar o paciente" : "Sucesso ao criar o paciente"
            })
            onSuccess && onSuccess(); 
        }, 
        onError: (error: ApiReponseError, _) => handlerErrorMessage(error)

    })
}

export const useDeletePatientMutation = (onSuccess?: () => void) => {
    const { toast } = useToast();
    return useMutation({
        mutationFn: async (id: string) => {
            await deletePatientByIdAsync(id)
        },
        onSuccess: (success, _) => {
            toast({
                title: "Sucessso", 
                description: "Paciente foi excluído com êxito"
            })
            onSuccess && onSuccess(); 
        }, 
        onError: (error: ApiReponseError, _) => handlerErrorMessage(error)

    })
}
