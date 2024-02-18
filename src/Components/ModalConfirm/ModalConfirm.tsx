import { Stack } from '@chakra-ui/react'
import React from 'react'
import { Button } from '../ui/button'

type ModalConfirmProps = { 
    onClick: () => void;
    onClose: () => void;
    loading?: boolean
}

export const ModalConfirm = ({ onClick, onClose, loading}: ModalConfirmProps) => {
    return (
        <Stack direction='row' alignItems='center'>
            <Button style={{ width: '100%' }} onClick={onClose} variant='outline'>
                Cancelar
            </Button>
            <Button style={{ width: '100%' }} disabled={loading} onClick={onClick}>
                Confirmar
            </Button>
        </Stack>
    )
}
