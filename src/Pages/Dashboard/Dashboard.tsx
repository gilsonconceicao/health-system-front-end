'use client'
import { Card } from '@/Components/Card/Card'
import { Grid, GridItem } from '@chakra-ui/react'
import React from 'react'
import { HiOutlineUsers } from "react-icons/hi2";
import { RiHealthBookLine } from "react-icons/ri";
import { FaRegComments } from "react-icons/fa6";
import { TextCustom } from './TextCustom';
import Feedback, { IListfeedback } from '@/Components/Feedback/Feedback';
import { IoMdCheckboxOutline } from "react-icons/io";


export const Dashboard = () => {

    const listFeedback: IListfeedback[] = [
        {name: "Gilson", date: "20/01", comment: "Very good!"}, 
        {name: "Ana", date: "20/01", comment: "Muito bom o atendimento !"}, 
        {name: "Ana", date: "20/01", comment: "Muito bom o atendimento !"}, 
        {name: "Ana", date: "20/01", comment: "Muito bom o atendimento !"}, 
        {name: "Ana", date: "20/01", comment: "Muito bom o atendimento !"}, 
        {name: "Gustavo", date: "20/01", comment: "Gostei da recepção!"}, 
    ];
    
    return (
        <div>
            <Grid
                h='400px'
                gap={6}
            >
                <GridItem colSpan={2} h={'200'}>
                    <Card
                        title='Total de pacientes'
                        icon={<HiOutlineUsers style={{ height: 30, width: 30 }} />}
                        content={<TextCustom value='8' style={{ position: 'absolute', bottom: 0 }} />}
                    />
                </GridItem>
                <GridItem colSpan={2} h={'200'}>
                    <Card
                        title='Total de consultas'
                        icon={<RiHealthBookLine style={{ height: 30, width: 30 }} />}
                        content={<TextCustom value='10' style={{ position: 'absolute', bottom: 0 }} />}
                    />
                </GridItem>
                <GridItem colSpan={2} h={'200'}>
                    <Card
                        title='Consultas confirmadas'
                        icon={<IoMdCheckboxOutline style={{ height: 30, width: 30 }} />}
                        content={<TextCustom value='7' style={{ position: 'absolute', bottom: 0 }} />}
                    />
                </GridItem>
                <GridItem colSpan={6} minHeight={'200'}>
                    <Card
                        title='Comentários'
                        icon={<FaRegComments style={{ height: 30, width: 30 }} />}
                        content={<Feedback list={[]}/>}
                    />
                </GridItem>
            </Grid>
        </div>
    )
}
