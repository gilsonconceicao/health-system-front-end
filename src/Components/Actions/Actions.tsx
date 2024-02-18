import { Grid, Stack, Text, IconButton } from '@chakra-ui/react';
import { FaRegArrowAltCircleRight } from "react-icons/fa";
import React from 'react'

type OnlyAction = {
    label: string;
    action: () => void;
    icon?: React.ReactNode;
    enable?: boolean
}

type ActionsProps = {
    options: OnlyAction[];
}

export const Actions: React.FC<ActionsProps> = ({ options }) => {
    return (
        <Stack direction='column' gap={3}>
            {options.map((item, indice) => {
                return (
                    <>
                        {item.enable &&
                            <Stack key={indice} direction='row' justifyContent='space-between' cursor='pointer' onClick={item.action} p='5px' alignItems='center' borderRadius='8px' border='1px solid grey'>
                                <div>
                                    <Text fontSize='19px'>{item.label}</Text>
                                </div>
                                <IconButton aria-label={`aria-${item.label}`} style={{ cursor: 'pointer' }} onClick={item.action}>
                                    {item.icon}
                                </IconButton>
                            </Stack>
                        }
                    </>
                )
            })}
        </Stack>
    )
}
