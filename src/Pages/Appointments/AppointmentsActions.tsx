import { Actions } from '@/Components/Actions/Actions';
import React, { useState } from 'react';
import { MdOutlineCancel } from "react-icons/md";
import { FaRegCommentAlt } from "react-icons/fa";
import { GiConfirmed } from "react-icons/gi";
import { FaCalendarCheck } from "react-icons/fa6";
import { useDeleteAppointmentsMutation } from '@/Hooks/AppointmentsServicesHooks';
import { AppointmentsFull } from '@/Services/Appointmnets/appointments.type';
import { ModalComponent } from '@/Components/Modal/Modal';
import { Stack } from '@chakra-ui/react';
import { Button } from '@/Components/ui/button';
import { ModalConfirm } from '@/Components/ModalConfirm/ModalConfirm';

type AppointmentsActionsProps = {
    rowSelected: AppointmentsFull
}

type OptionsProps = {
    title: string,
    onClick: () => void;
    component: React.ReactNode
    description?: string;
}

export const AppointmentsActions: React.FC<AppointmentsActionsProps> = ({
    rowSelected
}) => {
    const [action, setAction] = useState<string | undefined>(undefined);
    const { mutate: deletePatientMutation, status: statusDelete } = useDeleteAppointmentsMutation();
    const onClose = () => setAction(undefined);

    const optionsActions: { [type: string]: OptionsProps } = {
        "cancelAppointment": {
            onClick: () => { },
            title: "Cancelar consulta",
            component: <ModalConfirm onClose={onClose} onClick={() => { }} />
        },
        "addFeedback": {
            onClick: () => { },
            title: "Adicionar feedback",
            component: <></>
        },
        "confirmPresence": {
            onClick: () => { },
            title: "Confirmar presença",
            component: <ModalConfirm onClose={onClose} onClick={() => { }} />
        },
        "finished": {
            onClick: () => { },
            title: "Finalizar consulta",
            component: <ModalConfirm onClose={onClose} onClick={() => { }} />
        },
    }

    const optionSelected = optionsActions[action!];

    return (
        <div>
            <Actions
                options={[
                    {
                        action: () => setAction('cancelAppointment'),
                        label: "Cancelar consulta",
                        icon: <MdOutlineCancel />,
                        enable: true
                    },
                    {
                        action: () => setAction('addFeedback'),
                        label: "Adicionar feedback",
                        icon: <FaRegCommentAlt />,
                        enable: true
                    },
                    {
                        action: () => setAction('confirmPresence'),
                        label: "Confirmar presença",
                        icon: <GiConfirmed />,
                        enable: true
                    },
                    {
                        action: () => setAction('finished'),
                        label: "Finalizada",
                        icon: <FaCalendarCheck />,
                        enable: true
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
