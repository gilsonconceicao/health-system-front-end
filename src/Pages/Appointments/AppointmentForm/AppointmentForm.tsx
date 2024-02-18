import { DatePickerFormField } from '@/Components/FormFields/DatePickerFormField'
import { SelectFormField, SelectOptionType } from '@/Components/FormFields/SelectFormField'
import { TextFormField } from '@/Components/FormFields/TextFormField'
import { Button } from '@/Components/ui/button'
import { usePatientServicesHook } from '@/Hooks/PatientServicesHook'
import { PatientsFull } from '@/Services/Patients/patients.type'
import { Spinner, Stack, Text } from '@chakra-ui/react'
import React from 'react'

type AppointmentFormProps = {
    isLoading: boolean; 
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
    isLoading, 
}) => {
    const { data: patientsData, status: patientsStatus} = usePatientServicesHook();

    const options: SelectOptionType[] = patientsData?.data.map((item: PatientsFull) => {
        return {
            label: `${item.name} | ${item.email}`, 
            value: item.id
        }
    }); 

    if (patientsStatus === 'pending') {
        return <Spinner />
    }

    return (
        <Stack spacing={4} mb={3}>
            <SelectFormField
                label='Paciente'
                name='patientId'
                options={options ?? []}
            />
            <TextFormField
                label='Motivo da consulta'
                name='reason'
            />
            <DatePickerFormField
                label='Data da consulta'
                name='appointmentDate'
            />
            <Button type='submit' disabled={isLoading}>Salvar</Button>
        </Stack>
    )
}