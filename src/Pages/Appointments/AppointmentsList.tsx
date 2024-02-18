import React from 'react'
import { ColumnDef, Row } from '@tanstack/react-table'
import { FaRegTrashCan } from "react-icons/fa6";
import { CiEdit } from "react-icons/ci";
import { IconButton } from '@chakra-ui/react'
import DataGridTable from '@/Components/Table/Table';
import { AppointmentsFull } from '@/Services/Appointmnets/appointments.type';
import { CiLocationArrow1 } from "react-icons/ci";

type AppointmentsListProps = {
  data: AppointmentsFull[];
  setAction: React.Dispatch<React.SetStateAction<{
    action: string;
    data?: AppointmentsFull | undefined;
  } | undefined>>;
}

export const AppointmentsList = ({ data, setAction }: AppointmentsListProps) => {

  const columns: ColumnDef<AppointmentsFull>[] = [
    {
      accessorKey: "patient",
      header: "Nome do paciente",
      cell: ({ row }) => (
        <div >{row.original.patient.name}</div>
      ),
    },
    {
      accessorKey: "reason",
      header: "Razão da consulta",
      cell: ({ row }) => (
        <div >{row.getValue("reason")}</div>
      ),
    },
    {
      accessorKey: "appointmentDateDisplay",
      header: "Data da consulta",
      cell: ({ row }) => {
        return <div>{row.getValue("appointmentDateDisplay")}</div>
      },
    },
    {
      id: "actions",
      enableHiding: false,
      cell: ({ row }) => {
        return (
          <div className='flex items-center justify-end gap-2'>
            <IconButton
              aria-label='action'
              icon={<CiLocationArrow1 />}
              onClick={() => {
                setAction({action: 'showMenu', data: row.original});
              }} />
          </div>
        )
      },
    }
  ]

  return (
    <div>
      <DataGridTable<AppointmentsFull>
        data={data ?? []}
        columns={columns}
        title='Pacientes'

      />
    </div>
  )
}
