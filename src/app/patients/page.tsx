'use client'
import { PatientsListContainer } from "@/Pages/Patients/PatientsListContainer";
import { Text } from "@chakra-ui/react";
import React from "react";

export default function Home() {
  return (
    <React.Fragment>
     <PatientsListContainer />
    </React.Fragment>
  );
}
