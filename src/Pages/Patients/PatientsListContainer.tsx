'use client'
import React, { useState } from 'react'
import { PatientsList } from './PatientsList'
import { PatientsFull, useCreateOrEditPatientMutation, useDeletePatientMutation, usePatientServicesHook } from '@/Hooks/PatientServicesHook'
import { ModalComponent } from '@/Components/Modal/Modal'
import { FormContextProvider } from '@/Contexts/FormContext'
import { PatientsForm } from './PatientsForm/PatientsForm'
import { contactPatientsFormSchema, defaultValuesPatientsForm } from './PatientsForm/PatientsFormSchema'
import { FieldValues } from 'react-hook-form'
import { Button } from '@/Components/ui/button'
import { Spinner, Stack } from '@chakra-ui/react'

export const PatientsListContainer = () => {
  const [actionStep, setActionStep] = useState<string | undefined>(undefined);
  const [rowSelected, setRowSelected] = useState<PatientsFull | null>(null);
  const { data: patientsData, refetch, isFetching, status } = usePatientServicesHook();

  const onCloseStep = () => setActionStep(undefined)

  const handleActionCreate = () => {
    setActionStep('create');
    setRowSelected(null)
  }

  const handleSuccessPromise = () => {
    refetch();
    onCloseStep()
  }

  const { mutate, status: statusCreateOrEdit } = useCreateOrEditPatientMutation(rowSelected?.id ?? 'new', handleSuccessPromise);
  const { mutate: deletePatientMutation, status: statusDelete } = useDeletePatientMutation(handleSuccessPromise);

  const onSubmit = (values: FieldValues) => {
    mutate(values as PatientsFull);
  }

  const isLoading = status === 'pending' || isFetching;

  return (
    <div>

      <Stack direction='row' alignItems='center'>
        <Button onClick={handleActionCreate}>
          Criar paciente
        </Button>
        <Button onClick={() => refetch()} variant='outline' >
          Atualizar
        </Button>

      </Stack>

      {isLoading ?
        <div style={{margin: "10px 0"}}>
          <Spinner />
        </div>
        :
        <PatientsList
          setActionStep={setActionStep}
          data={patientsData?.data ?? []}
          setRowSelected={(values) => setRowSelected(values)}
        />
      }

      <ModalComponent
        title={actionStep === 'edit' ? "Editar paciente" : "Criar paciente"}
        isOpen={['edit', 'create'].includes(actionStep!)}
        size='xl'
        Element={
          <FormContextProvider
            defaultValues={rowSelected ?? defaultValuesPatientsForm}
            validationSchema={contactPatientsFormSchema}
            onSubmit={onSubmit}
          >
            <PatientsForm
              isLoading={statusCreateOrEdit === 'pending'}
            />

          </FormContextProvider>
        }
        onClose={onCloseStep}
      />
      <ModalComponent
        title={`Remover ${rowSelected?.name}`}
        description="Tem certeza que deseja excluir esse registro?"
        isOpen={actionStep === 'delete'}
        size='xl'
        Element={
          <Stack direction='row' alignItems='center'>
            <Button style={{ width: '100%' }} onClick={onCloseStep} variant='outline'>
              Cancelar
            </Button>
            <Button style={{ width: '100%' }} onClick={() => deletePatientMutation(rowSelected?.id!)}>
              Confirmar
            </Button>

          </Stack>
        }
        onClose={onCloseStep}
      />
    </div>
  )
}
