import DataGridTable from '@/Components/Table/Table'
import { Button } from '@/Components/ui/button'
import { PatientsFull } from '@/Hooks/PatientServicesHook'
import { ColumnDef } from '@tanstack/react-table'
import { Trash } from 'lucide-react'
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";

import React from 'react'
import { IconButton } from '@chakra-ui/react'

type PatientsListProps = {
  data: PatientsFull[]; 
  setActionStep: React.Dispatch<React.SetStateAction<string | undefined>>
}

export const PatientsList = ({ data, setActionStep }: PatientsListProps) => {

  const columns: ColumnDef<PatientsFull>[] = [
    {
      accessorKey: "name",
      header: "Nome",
      cell: ({ row }) => (
        <div >{row.getValue("name")}</div>
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
      accessorKey: "birthDate",
      header: "Data de nascimento",
      cell: ({ row }) => <div>{new Date(row.getValue("birthDate")).toLocaleDateString('pt-BR')}</div>,
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
        const payment = row.original

        return (
          <div className='flex items-center justify-end gap-2'>
            <IconButton aria-label='Search database' icon={<CiEdit />}  onClick={() => setActionStep('edit')}/>
            <IconButton aria-label='Search database' icon={<FaRegTrashCan />} />
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
