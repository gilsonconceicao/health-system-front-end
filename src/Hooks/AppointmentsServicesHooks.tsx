import { createOrEditAppointmentAsync, deleteAppointmentsByIdAsync, feedbackAppointmentsAsync, getAppointmentsListAsync, jumpEveryStepsAppointmentsAsync } from "@/Services/Appointmnets/AppointmentsServices";
import { AppointmentsFull, OptionsTypeSteps } from "@/Services/Appointmnets/appointments.type";
import { useMutation, useQuery } from "@tanstack/react-query"

export const useAppointmentsServicesHook = () => {

    const { data, ...rest } = useQuery({
        queryKey: ["get-appointmens-data"],
        refetchInterval: false,
        refetchOnWindowFocus: false,
        refetchOnMount: false,
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

export const useCreateOrEditAppointmentsMutation = (id: string, onSuccess?: () => void) => {
    return useMutation({
        mutationFn: async (params: AppointmentsFull) => {
            await createOrEditAppointmentAsync(params, id)
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
