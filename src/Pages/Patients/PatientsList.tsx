import DataGridTable from '@/Components/Table/Table'
import { ColumnDef, Row } from '@tanstack/react-table'
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

import React from 'react'
import { IconButton } from '@chakra-ui/react'
import { PatientsFull } from '@/Services/Patients/patients.type';

type PatientsListProps = {
  data: PatientsFull[];
  setActionStep: React.Dispatch<React.SetStateAction<string | undefined>>;
  setRowSelected: (data: PatientsFull) => void;
}

export const PatientsList = ({ data, setActionStep, setRowSelected }: PatientsListProps) => {

  const columns: ColumnDef<PatientsFull>[] = [
    {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => (
        <div >{row.getValue("name")}</div>
      ),
    },
    {
      accessorKey: "lastName",
      header: "Sobrenome",
      cell: ({ row }) => (
        <div >{row.getValue("lastName")}</div>
      ),
    },
    {
      accessorKey: "email",
      header: "Email",
      cell: ({ row }) => <div>{row.getValue("email")}</div>,
    },
    {
      accessorKey: "gender",
      header: "Gênero",
      cell: ({ row }) => <div>{row.getValue("gender")}</div>,
    },
    {
      accessorKey: "birthDateDisplay",
      header: "Data de nascimento",
      cell: ({ row }) => {
        return <div>{row.getValue("birthDateDisplay")}</div>
      },
    },
    {
      accessorKey: "phoneNumber",
      header: "Número de telefone",
      cell: ({ row }) => <div>{row.getValue("phoneNumber")}</div>,
    },
    {
      accessorKey: "smoker",
      header: "Fumante",
      cell: ({ row }) => <div>{row.getValue("smoker") ? "Sim" : "Não"}</div>,
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <div className='flex items-center justify-end gap-2'>
            <IconButton
              aria-label='Search database'
              icon={<CiEdit />}
              onClick={() => {
                setActionStep('edit');
                setRowSelected(row.original)
              }} />
            <IconButton
              aria-label='Search database'
              icon={<FaRegTrashCan />}
              onClick={() => {
                setActionStep('delete');
                setRowSelected(row.original)
              }}
            />
          </div>
        )
      },
    }
  ]

  return (
    <div>
      <DataGridTable<PatientsFull>
        data={data ?? []}
        columns={columns}
        title='Pacientes'

      />
    </div>
  )
}
