import { DatePickerFormField } from '@/Components/FormFields/DatePickerFormField'
import { SelectFormField } from '@/Components/FormFields/SelectFormField'
import { TextFormField } from '@/Components/FormFields/TextFormField'
import { Button } from '@/Components/ui/button'
import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

type PatientsFormProps = {
    isLoading: boolean
}

export const PatientsForm: React.FC<PatientsFormProps> = ({
    isLoading
}) => {
    return (
        <Stack spacing={4} mb={3}>
            <Text fontSize='20px' fontWeight='bold'>
                Informações pessoais
            </Text>
            <TextFormField
                label='Nome'
                name='name'
            />
            <TextFormField
                label='Sobrenome'
                name='lastName'
            />
            <TextFormField
                label='Email'
                name='email'
            />
            <DatePickerFormField
                type='date'
                label='Data de nascimento'
                name='birthDate'
            />
            <SelectFormField
                label='Gênero'
                name='gender'
                options={[
                    { label: "Feminino", value: "feminino" },
                    { label: "Masculino", value: "masculino" },
                    { label: "Prefiro não informar", value: "prefiro_nao_informar" },
                ]}
            />
            <TextFormField
                label='Número de telefone'
                name='phoneNumber'
            />
            <Text fontSize='20px' fontWeight='bold'>
                Endereços
            </Text>
            <TextFormField
                label='Rua'
                name='address.street'
            />
            <TextFormField
                label='Cidade'
                name='address.city'
            />
            <TextFormField
                label='Estado'
                name='address.state'
            />
            <TextFormField
                label='CEP'
                name='address.zipCode'
                type='number'
            />
            <TextFormField
                label='Número'
                name='address.number'
                type='number'
            />
            <Button type='submit' disabled={isLoading}>Salvar</Button>
        </Stack>
    )
}