import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Button } from '../ui/button'

type ModalConfirmProps = {
    onClick: () => void;
    onClose: () => void;
}

export const ModalConfirm = ({ onClick, onClose}: ModalConfirmProps) => {
    return (
        <Stack direction='row' alignItems='center'>
            <Button style={{ width: '100%' }} onClick={onClose} variant='outline'>
                Cancelar
            </Button>
            <Button style={{ width: '100%' }} onClick={onClick}>
                Confirmar
            </Button>
        </Stack>
    )
}
