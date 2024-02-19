'use client'
import React, { useState } from 'react'
import { ModalComponent } from '@/Components/Modal/Modal'
import { FormContextProvider } from '@/Contexts/FormContext'
import { FieldValues } from 'react-hook-form'
import { Button } from '@/Components/ui/button'
import { Spinner, Stack } from '@chakra-ui/react'
import { appointmentsCreate, AppointmentsFull } from '@/Services/Appointmnets/appointments.type'
import { AppointmentsList } from './AppointmentsList'
import { useCreateOrEditAppointmentsMutation, useAppointmentsServicesHook, useDeleteAppointmentsMutation } from '@/Hooks/AppointmentsServicesHooks'
import { appointmentsFormSchema, defaultValuesAppointmentsForm } from './AppointmentForm/AppointmentFormSchema'
import { AppointmentForm } from './AppointmentForm/AppointmentForm'
import DrawerComponent from '@/Components/Drawer/DrawerComponent'
import { AppointmentsActions } from './AppointmentsActions'

export const AppointmentsListContainer = () => {
  const [action, setAction] = useState<{ action: string, data?: AppointmentsFull } | undefined>(undefined);
  const { data: appointmentsData, refetch, isPending, isFetching } = useAppointmentsServicesHook();

  const onCloseStep = () => setAction(undefined)

  const handleSuccess = () => {
    refetch();
    onCloseStep();
  }

  const { mutate, status: statusCreateOrEdit } = useCreateOrEditAppointmentsMutation(handleSuccess);

  const onSubmit = (values: FieldValues) => mutate(values as appointmentsCreate);

  return (
    <div>

      <Stack direction='row' alignItems='center'>
        <Button onClick={() => setAction({ action: 'create' })}>
          Adicionar consulta
        </Button>
        <Button onClick={() => refetch()} variant='outline' >
          Atualizar
        </Button>

      </Stack>


      <AppointmentsList
        setAction={(preferences) => setAction(preferences)}
        data={appointmentsData?.data ?? []}
        isLoading={isPending || isFetching}
      />


      <DrawerComponent
        isOpen={action?.action === 'showMenu'}
        onClose={() => setAction(undefined)}
        title='Ações'
        placement='left'
        size='md'
        Element={<AppointmentsActions rowSelected={action?.data!} handleSuccess={handleSuccess} />}
      />

      <ModalComponent
        title="Adicionar nova consulta"
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
