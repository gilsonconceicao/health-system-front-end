import { Actions } from '@/Components/Actions/Actions';
import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa6";
import { useAddFeedbackMutation, useDeleteAppointmentsMutation, useJumpStepsAppointmentsMutation } from '@/Hooks/AppointmentsServicesHooks';
import { AppointmentsFull, OptionsTypeSteps } from '@/Services/Appointmnets/appointments.type';
import { ModalComponent } from '@/Components/Modal/Modal';
import { ModalConfirm } from '@/Components/ModalConfirm/ModalConfirm';
import { FaRegTrashAlt } from "react-icons/fa";
import { FormContextProvider } from '@/Contexts/FormContext';
import { FeedbackForm } from './FeedbackForm/FeedbackForm';
import { defaultValuesFeedbackForm, feedbackFormSchema } from './FeedbackForm/FeedbackFormSchema';

type AppointmentsActionsProps = {
    rowSelected: AppointmentsFull
    handleSuccess: () => void
}

type OptionsProps = {
    title: string,
    onClick: () => void;
    component: React.ReactNode
    description?: string;
}

export const AppointmentsActions: React.FC<AppointmentsActionsProps> = ({
    rowSelected,
    handleSuccess 
}) => {
    const [action, setAction] = useState<string | undefined>(undefined);
    const onClose = () => setAction(undefined);
    const currentStatus = rowSelected.statusDisplay; 

    const optionsEndpoint: { [type: string]: OptionsTypeSteps } = {
        "cancelAppointment": "Cancel",
        "confirmPresence": "ConfirmParticipation",
        "finished": "Completed"
    }

    const {
        mutate: deletePatientMutate,
        isPending: isLoadingDeleteMutation
    } = useDeleteAppointmentsMutation(handleSuccess);
    const {
        mutate: genericMutateAsync,
        isPending: isLoadingJumpAppointmentsMutation
    } = useJumpStepsAppointmentsMutation(optionsEndpoint[action!], handleSuccess);
    const {
        mutate: addFeedbackMutate,
        isPending: isLoadingFeedbackMutation
    } = useAddFeedbackMutation(rowSelected?.id, handleSuccess);

    const GenericComponentModal = () => {
        return <ModalConfirm
            onClose={onClose}
            onClick={() => genericMutateAsync(rowSelected?.id)}
            loading={isLoadingJumpAppointmentsMutation}
        />
    }

    const optionsActions: { [type: string]: OptionsProps } = {
        "cancelAppointment": {
            onClick: () => { },
            title: "Cancelar consulta",
            component: <GenericComponentModal />
        },
        "addFeedback": {
            onClick: () => { },
            title: "Adicionar feedback",
            description: "Informe um feedback: Seja elogios, críticas ou sugestões", 
            component: (
                <FormContextProvider
                    validationSchema={feedbackFormSchema}
                    defaultValues={defaultValuesFeedbackForm}
                    onSubmit={(values) => addFeedbackMutate(values?.feedbackMessage)}
                >
                    <FeedbackForm
                        isLoading={isLoadingFeedbackMutation}
                    />
                </FormContextProvider>
            )
        },
        "confirmPresence": {
            onClick: () => { },
            title: "Confirmar presença",
            description: "Tem certeza que deseja confirmar a presença do paciente a consulta? ", 
            component: <GenericComponentModal />
        },
        "finished": {
            onClick: () => { },
            title: "Finalizar consulta",
            description: "Tem certeza que deseja finalizar a consulta? ", 
            component: <GenericComponentModal />
        },
        "delete": {
            onClick: () => { },
            title: "Excluir consulta",
            description: "Tem certeza que deseja excluir essa consulta?",
            component: <ModalConfirm onClose={onClose} loading={isLoadingDeleteMutation} onClick={() => deletePatientMutate(rowSelected?.id)} />
        },
    }

    const optionSelected = optionsActions[action!];
    const disableAction = !["Cancelada", "Concluída"].includes(currentStatus);
    return (
        <div>
            <Actions
                options={[
                    {
                        action: () => setAction('cancelAppointment'),
                        label: "Cancelar consulta",
                        icon: <MdOutlineCancel />,
                        enable: disableAction
                    },
                    {
                        action: () => setAction('addFeedback'),
                        label: "Adicionar feedback",
                        icon: <FaRegCommentAlt />,
                        enable: currentStatus !== 'Cancelada'
                    },
                    {
                        action: () => setAction('delete'),
                        label: "Excluir",
                        icon: <FaRegTrashAlt />,
                        enable: true
                    },
                    {
                        action: () => setAction('confirmPresence'),
                        label: "Confirmar presença",
                        icon: <GiConfirmed />,
                        enable: disableAction
                    },
                    {
                        action: () => setAction('finished'),
                        label: "Concluir",
                        icon: <FaCalendarCheck />,
                        enable: disableAction
                    },
                ]}
            />

            <ModalComponent
                title={optionSelected?.title}
                description={optionSelected?.description ?? ""}
                isOpen={!!action}
                size='xl'
                Element={optionSelected?.component}
                onClose={onClose}
            />
        </div>
    )
}
