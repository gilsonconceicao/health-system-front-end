import { useToast } from "@/Components/ui/use-toast";
import { createOrEditAppointmentAsync, deleteAppointmentsByIdAsync, feedbackAppointmentsAsync, getAppointmentsListAsync, jumpEveryStepsAppointmentsAsync } from "@/Services/Appointmnets/AppointmentsServices";
import { appointmentsCreate, OptionsTypeSteps } from "@/Services/Appointmnets/appointments.type";
import { ApiReponseError, MapperErrorMessage } from "@/Validations/MapperErrorMessage";
import { handlerErrorMessage } from "@/Validations/handlerErrorsMessage";
import { useMutation, useQuery } from "@tanstack/react-query"
import { isArray } from "util";

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
        onSuccess: (success, _) => {
            toast({
                title: "Consulta criada com sucesso"
            })
            onSuccess && onSuccess(); 
        },
        onError: (error: ApiReponseError, _) => handlerErrorMessage(error)
    })
}

export const useDeleteAppointmentsMutation = (onSuccess?: () => void) => {
    const { toast } = useToast();

    return useMutation({
        mutationFn: async (id: string) => {
            await deleteAppointmentsByIdAsync(id)
        },
        onSuccess: (success, _) => {
            toast({
                title: "Sucesso ao excluir à consulta"
            })
            onSuccess && onSuccess(); 
        },
        onError: (error: ApiReponseError, _) => handlerErrorMessage(error)

    })
}

export const useJumpStepsAppointmentsMutation = (type: OptionsTypeSteps, onSuccess?: () => void) => {
    const { toast } = useToast();

    return useMutation({
        mutationFn: async (id: string) => {
            await jumpEveryStepsAppointmentsAsync(id, type)
        },
        onSuccess: (success, _) => {
            const successMessage: {[typr:string] : string} = {
                "Completed": "Booa! Consulta concluída com sucesso!", 
                "Cancel": "Consulta concelada com sucesso!", 
                "ConfirmParticipation": "Participação confirmada com sucesso!", 
            }
            toast({
                title: successMessage[type!]
            })
            onSuccess && onSuccess(); 
        },
        onError: (error: ApiReponseError, _) => handlerErrorMessage(error)

    })
}

export const useAddFeedbackMutation = (id: string, onSuccess?: () => void) => {
    const { toast } = useToast();

    return useMutation({
        mutationFn: async (message: string) => {
            await feedbackAppointmentsAsync(id, message)
        },
        onSuccess: (success, _) => {
            toast({
                title: "Booa!", 
                description: "Agora você pode acompanhar o seu e outros comentários na tela inicial"
            })
            onSuccess && onSuccess(); 
        },
        onError: (error: ApiReponseError, _) => handlerErrorMessage(error)
    })
}
