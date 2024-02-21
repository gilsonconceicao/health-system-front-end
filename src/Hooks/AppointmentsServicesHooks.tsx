import { createOrEditAppointmentAsync, deleteAppointmentsByIdAsync, feedbackAppointmentsAsync, getAppointmentsListAsync, jumpEveryStepsAppointmentsAsync } from "@/Services/Appointmnets/AppointmentsServices";
import { appointmentsCreate, OptionsTypeSteps } from "@/Services/Appointmnets/appointments.type";
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
    return useMutation({
        mutationFn: async (params: appointmentsCreate) => {
            const payload = {
                appointmentDate: params.appointmentDate,
                reason: params.reason
            }
            await createOrEditAppointmentAsync(payload, params.patientId); 
        },
        onSuccess: (success, _) => onSuccess && onSuccess(),
        onError: (error, _) => {
            console.log('mutationError', error)
        }
    })
}

export const useDeleteAppointmentsMutation = (onSuccess?: () => void) => {
    return useMutation({
        mutationFn: async (id: string) => {
            await deleteAppointmentsByIdAsync(id)
        },
        onSuccess: (success, _) => onSuccess && onSuccess(),
        onError: (error, _) => {
            console.log('mutationError', error)
        }
    })
}

export const useJumpStepsAppointmentsMutation = (type: OptionsTypeSteps, onSuccess?: () => void) => {
    return useMutation({
        mutationFn: async (id: string) => {
            await jumpEveryStepsAppointmentsAsync(id, type)
        },
        onSuccess: (success, _) => onSuccess && onSuccess(),
        onError: (error, _) => {
            console.log('mutationError', error)
        }
    })
}

export const useAddFeedbackMutation = (id: string, onSuccess?: () => void) => {
    return useMutation({
        mutationFn: async (message: string) => {
            await feedbackAppointmentsAsync(id, message)
        },
        onSuccess: (success, _) => onSuccess && onSuccess(),
        onError: (error, _) => {
            console.log('mutationError', error)
        }
    })
}
