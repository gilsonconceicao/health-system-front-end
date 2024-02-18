import { DatePickerFormField } from '@/Components/FormFields/DatePickerFormField'
import { SelectFormField } from '@/Components/FormFields/SelectFormField'
import { TextFormField } from '@/Components/FormFields/TextFormField'
import { Button } from '@/Components/ui/button'
import { Stack, Text } from '@chakra-ui/react'
import React from 'react'

type FeedbackFormProps = {
    isLoading: boolean
}

export const FeedbackForm: React.FC<FeedbackFormProps> = ({
    isLoading
}) => {
    return (
        <Stack spacing={4} mb={3}>
            <TextFormField
                label='Feedmack'
                placeholder='Escreva um comentário para o feedback'
                name='FeedbackMessage'
            />
            <Button type='submit' disabled={isLoading}>Salvar</Button>
        </Stack>
    )
}