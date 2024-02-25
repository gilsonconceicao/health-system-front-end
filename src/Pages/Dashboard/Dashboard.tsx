'use client'
import { Card } from '@/Components/Card/Card'
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineUsers } from "react-icons/hi2";
import { RiHealthBookLine } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa6";
import { TextCustom } from './TextCustom';
import Feedback from '@/Components/Feedback/Feedback';
import { IoMdCheckboxOutline } from "react-icons/io";
import { DashboardType } from '@/Services/Dashboard/Dashboard.type';
import { MdOutlineCancel } from "react-icons/md";
import { IoCheckmarkDoneSharp } from "react-icons/io5";


type DashboardProps = {
    data: DashboardType
}

export const Dashboard = ({ data }: DashboardProps) => {

    return (
        <div>
            <Grid
                h='400px'
                gap={6}
            >
                <GridItem colSpan={3} h={'150'}>
                    <Card
                        title='Total de pacientes'
                        icon={<HiOutlineUsers style={{ height: 30, width: 30 }} />}
                        content={<TextCustom value={data?.totalPatients} style={{ position: 'absolute', bottom: 0 }} />}
                    />
                </GridItem>
                <GridItem colSpan={3} h={'150'}>
                    <Card
                        title='Total de consultas'
                        icon={<RiHealthBookLine style={{ height: 30, width: 30 }} />}
                        content={<TextCustom value={data?.totalsAppointments ?? 0} style={{ position: 'absolute', bottom: 0 }} />}
                    />
                </GridItem>
                <GridItem colSpan={2} h={'200'}>
                    <Card
                        title='Consultas canceladas'
                        icon={<MdOutlineCancel style={{ height: 30, width: 30 }} />}
                        content={<TextCustom value={data?.totalsAppointmentsCancelled ?? 0} style={{ position: 'absolute', bottom: 0 }} />}
                    />
                </GridItem>
                <GridItem colSpan={2} h={'200'}>
                    <Card
                        title='Consultas confirmadas'
                        icon={<IoMdCheckboxOutline style={{ height: 30, width: 30 }} />}
                        content={<TextCustom value={data?.totalsAppointmentsConfirmed ?? 0} style={{ position: 'absolute', bottom: 0 }} />}
                    />
                </GridItem>
                <GridItem colSpan={2} h={'200'}>
                    <Card
                        title='Consultas concluídas'
                        icon={<IoCheckmarkDoneSharp style={{ height: 30, width: 30 }} />}
                        content={<TextCustom value={data?.totalsAppointmentsFinished ?? 0} style={{ position: 'absolute', bottom: 0 }} />}
                    />
                </GridItem>
                <GridItem colSpan={6} minHeight={'200'}>
                    <Card
                        title='Comentários'
                        icon={<FaRegComments style={{ height: 30, width: 30 }} />}
                        content={<Feedback list={data?.feedbackPatients ?? []} />}
                    />
                </GridItem>
            </Grid>
        </div>
    )
}
