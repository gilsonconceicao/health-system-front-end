'use client'
import React from 'react'
import { PatientsList } from './PatientsList'
import { usePatientServicesHook } from '@/Hooks/PatientServicesHook'

export const PatientsListContainer = () => {

  const { data:patientsData } = usePatientServicesHook();

  return (
    <div>

      <PatientsList
        data={patientsData?.data ?? []}
      />
    </div>
  )
}
