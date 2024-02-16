'use client'
import React, { useState } from 'react'
import { PatientsList } from './PatientsList'
import { usePatientServicesHook } from '@/Hooks/PatientServicesHook'
import { ModalComponent } from '@/Components/Modal/Modal'
import { FormContextProvider } from '@/Contexts/FormContext'
import { PatientsForm } from './PatientsForm/PatientsForm'
import { contactPatientsFormSchema, defaultValuesPatientsForm } from './PatientsForm/PatientsFormSchema'
import { FieldValues } from 'react-hook-form'

export const PatientsListContainer = () => {
  const [actionStep, setActionStep] = useState<string | undefined>(undefined);
  const { data: patientsData } = usePatientServicesHook();

  const onSubmit = (values: FieldValues) => {
    
  }

  return (
    <div>

      <PatientsList
        setActionStep={setActionStep}
        data={patientsData?.data ?? []}
      />

      <ModalComponent
        title={actionStep === 'edit' ? "Editar paciente" : "Criar paciente"}
        isOpen={actionStep === 'edit'}
        size='xl'
        Element={
          <FormContextProvider
            defaultValues={defaultValuesPatientsForm}
            validationSchema={contactPatientsFormSchema}
            onSubmit={onSubmit}
          >
            <PatientsForm 
            
            />

          </FormContextProvider>
        }
        onClose={() => setActionStep(undefined)}
      />
    </div>
  )
}
