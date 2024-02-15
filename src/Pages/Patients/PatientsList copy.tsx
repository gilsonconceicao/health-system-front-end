'use client'
import React from 'react'
import { PatientsList } from './PatientsList'
import { usePatientServicesHook } from '@/Hooks/PatientServicesHook'

export const PatientsListContainer = () => {

  const { data } = usePatientServicesHook();

  console.log(data)

  return (
    <div>

      <PatientsList

      />
    </div>
  )
}
