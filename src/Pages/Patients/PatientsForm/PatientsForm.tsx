import { TextFormField } from '@/Components/FormFields/TextFormField'
import { Button } from '@/Components/ui/button'
import { Stack } from '@chakra-ui/react'
import React from 'react'

export const PatientsForm = () => {
    return (
        <Stack spacing={4} mb={3}>
            <TextFormField
                label='Nome'
                name='name'
            />
            <TextFormField
                label='Email'
                name='email'
            />
            <TextFormField
                label='Gênero'
                name='gender'
            />
            <TextFormField
                label='Número de telefone'
                name='phoneNumber'
            />
            <Button type='submit'>Salvar</Button>
        </Stack>
    )
}