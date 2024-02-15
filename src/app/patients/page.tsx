'use client'
import { PatientsListContainer } from "@/Pages/Patients/PatientsList copy";
import { Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
     <Text fontSize='6x1'>Gerenciar Pacientes</Text>

     <PatientsListContainer />
    </React.Fragment>
  );
}
