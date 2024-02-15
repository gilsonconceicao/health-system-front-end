'use client'
import { Text } from '@chakra-ui/react';
import React, { useState } from 'react'
import { MdOutlineArrowForwardIos } from "react-icons/md";


export interface IListfeedback {
    name: string;
    comment: string;
    date: string | Date;
}

type FeedbackProps = {
    list: IListfeedback[];
}

export default function Feedback({ list }: FeedbackProps) {
    return (
        <React.Fragment>
            {list.length > 0 ? (
                <React.Fragment>
                    {list.map((item, index) => {
                        return (
                            <div key={index} className='p-2 flex items-center bg-[#e9e9e942] m-2 justify-between'>
                                <div>
                                    <Text fontSize='12px'>{item.name}</Text>
                                    <div className='flex items-center'>
                                        <MdOutlineArrowForwardIos />
                                        <Text fontSize='1xl' fontWeight={500}>{item.comment}</Text>
                                    </div>
                                </div>
                                <Text fontSize='sm'>{item.date as string}</Text>
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
