import { DatePickerFormField } from '@/Components/FormFields/DatePickerFormField'
import { SelectFormField } from '@/Components/FormFields/SelectFormField'
import { TextFormField } from '@/Components/FormFields/TextFormField'
import { Button } from '@/Components/ui/button'
import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

type AppointmentFormProps = {
    isLoading: boolean
}

export const AppointmentForm: React.FC<AppointmentFormProps> = ({
    isLoading
}) => {
    return (
        <Stack spacing={4} mb={3}>
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