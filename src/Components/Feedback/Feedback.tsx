'use client'
import { FeedbackType } from '@/Services/Dashboard/Dashboard.type';
import { Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


type FeedbackProps = {
    list: FeedbackType[];
}

export default function Feedback({ list }: FeedbackProps) {
    return (
        <React.Fragment>
            {list.length > 0 ? (
                <React.Fragment>
                    {list.map((item, index) => {
                        debugger
                        return (
                            <div key={index} className='p-2 flex items-center bg-[#e9e9e942] m-2 justify-between'>
                                <div>
                                    <Text fontSize='12px'>{item?.name}</Text> 
                                    <div className='flex items-center'>
                                        <MdOutlineArrowForwardIos style={{display: 'block', width: 10, height: 10}}/>
                                        <Text fontSize='1xl' fontWeight={500}>{item?.feedback}</Text>
                                    </div>
                                </div>
                                 <Text fontSize='sm'>{new Date(item?.createdAt).toLocaleDateString('pt-BR')}</Text> 
                            </div>
                        )
                    })}
                </React.Fragment>
            ) : (
                <div className='p-2 flex items-center bg-[#e9e9e942] m-2 justify-between'>

                    <Text fontSize='sm'>Ainda não contém comentários</Text>
                </div>
            )}
        </React.Fragment>
    )
}
