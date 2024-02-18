'use client'
import React, { useState } from 'react'
import { ModalComponent } from '@/Components/Modal/Modal'
import { FormContextProvider } from '@/Contexts/FormContext'
import { FieldValues } from 'react-hook-form'
import { Button } from '@/Components/ui/button'
import { Spinner, Stack } from '@chakra-ui/react'
import { AppointmentsFull } from '@/Services/Appointmnets/appointments.type'
import { AppointmentsList } from './AppointmentsList'
import { useCreateOrEditAppointmentsMutation, useAppointmentsServicesHook, useDeleteAppointmentsMutation } from '@/Hooks/AppointmentsServicesHooks'
import { appointmentsFormSchema, defaultValuesAppointmentsForm } from './AppointmentForm/AppointmentFormSchema'
import { AppointmentForm } from './AppointmentForm/AppointmentForm'
import DrawerComponent from '@/Components/Drawer/DrawerComponent'
import { AppointmentsActions } from './AppointmentsActions'
import { usePatientServicesHook } from '@/Hooks/PatientServicesHook'

export const AppointmentsListContainer = () => {
  const [action, setAction] = useState<{ action: string, data?: AppointmentsFull } | undefined>(undefined);
  const { data: appointmentsData, refetch, isFetching, status } = useAppointmentsServicesHook();
  const selectedId = action?.data?.id;

  const onCloseStep = () => setAction(undefined)

  const { mutate, status: statusCreateOrEdit } = useCreateOrEditAppointmentsMutation(
    selectedId ?? 'new',
    () => {
      refetch();
      onCloseStep()
    }
  );

  const onSubmit = (values: FieldValues) => {
    mutate(values as AppointmentsFull);
  }

  const isLoading = status === 'pending' || isFetching;

  return (
    <div>

      <Stack direction='row' alignItems='center'>
        <Button onClick={() => setAction({ action: 'create' })}>
          Criar paciente
        </Button>
        <Button onClick={() => refetch()} variant='outline' >
          Atualizar
        </Button>

      </Stack>

      {isLoading ?
        <div style={{ margin: "10px 0" }}>
          <Spinner />
        </div>
        :
        <AppointmentsList
          setAction={(preferences) => setAction(preferences)}
          data={appointmentsData?.data ?? []}
        />
      }

      <DrawerComponent
        isOpen={action?.action === 'showMenu'}
        onClose={() => setAction(undefined)}
        title='Ações'
        placement='left'
        size='md'
        Element={<AppointmentsActions rowSelected={action?.data!}/>}
      />

      <ModalComponent
        title="Criar consulta"
        isOpen={['create'].includes(action?.action!)}
        size='xl'
        Element={
          <FormContextProvider
            defaultValues={defaultValuesAppointmentsForm}
            validationSchema={appointmentsFormSchema}
            onSubmit={onSubmit}
          >
            <AppointmentForm
              isLoading={statusCreateOrEdit === 'pending'}

            />
          </FormContextProvider>
        }
        onClose={onCloseStep}
      />
    </div>
  )
}
