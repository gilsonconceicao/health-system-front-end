import { useToast } from "@/Components/ui/use-toast";
import { ErrorType } from "@/Contexts/ErrorsContext";
import { createOrEditAppointmentAsync, deleteAppointmentsByIdAsync, feedbackAppointmentsAsync, getAppointmentsListAsync, jumpEveryStepsAppointmentsAsync } from "@/Services/Appointmnets/AppointmentsServices";
import { appointmentsCreate, OptionsTypeSteps } from "@/Services/Appointmnets/appointments.type";
import { ApiReponseError, MapperErrorMessage } from "@/Validations/MapperErrorMessage";
import { useMutation, useQuery } from "@tanstack/react-query"

export const useAppointmentsServicesHook = () => {

    const { data, ...rest } = useQuery({
        queryKey: ["appointmens-data-list-data"],
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnMount: 'always',
        queryFn: async () => {
            const response = await getAppointmentsListAsync();
            return response?.data;
        }
    })

    return {
        data,
        ...rest
    }
}

export const useCreateOrEditAppointmentsMutation = (onSuccess?: () => void) => {
    const { toast } = useToast(); 

    return useMutation({
        mutationFn: async (params: appointmentsCreate) => {
            const payload = {
                appointmentDate: params.appointmentDate,
                reason: params.reason
            }
            await createOrEditAppointmentAsync(payload, params.patientId); 
        },
        onSuccess: (success, _) => onSuccess && onSuccess(),
        onError: (error: ApiReponseError, _) => {
            const {errorMessage} = MapperErrorMessage(error); 
            toast({
                variant: 'destructive', 
                description: errorMessage
            })
        }
    })
}

export const useDeleteAppointmentsMutation = (onSuccess?: () => void) => {
    const { toast } = useToast(); 

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteAppointmentsByIdAsync(id)
        },
        onSuccess: (success, _) => onSuccess && onSuccess(),
        onError: (error: ApiReponseError, _) => {
            const {errorMessage} = MapperErrorMessage(error); 
            toast({
                variant: 'destructive', 
                description: errorMessage
            })
        }
    })
}

export const useJumpStepsAppointmentsMutation = (type: OptionsTypeSteps, onSuccess?: () => void) => {
    const { toast } = useToast(); 

    return useMutation({
        mutationFn: async (id: string) => {
            await jumpEveryStepsAppointmentsAsync(id, type)
        },
        onSuccess: (success, _) => onSuccess && onSuccess(),
        onError: (error: ApiReponseError, _) => {
            const {errorMessage} = MapperErrorMessage(error); 
            toast({
                variant: 'destructive', 
                description: errorMessage
            })
        }
    })
}

export const useAddFeedbackMutation = (id: string, onSuccess?: () => void) => {
    const { toast } = useToast(); 

    return useMutation({
        mutationFn: async (message: string) => {
            await feedbackAppointmentsAsync(id, message)
        },
        onSuccess: (success, _) => onSuccess && onSuccess(),
        onError: (error: ApiReponseError, _) => {
            const {errorMessage} = MapperErrorMessage(error); 
            toast({
                variant: 'destructive', 
                description: errorMessage
            })
        }
    })
}
