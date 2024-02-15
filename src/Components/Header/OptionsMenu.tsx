import React from 'react';
import { useRouter } from 'next/navigation';
import { Text } from '@chakra-ui/react';
import { HiUsers } from "react-icons/hi2";
import { GiHealthNormal } from "react-icons/gi";
import { MdSpaceDashboard } from "react-icons/md";

import './OptionsMenu.style.css';

type OptionsMenuProps ={
    onCloseMenu: () => void
}

export const OptionsMenu = ({ onCloseMenu }:OptionsMenuProps) => {
    const { push } = useRouter();
    const handleRedirect = (path: string) => {
        push(path); 
        onCloseMenu();
    }
    return (
        <div>
            <ul className='list'>
                <li className='option' onClick={() => handleRedirect('/')}>
                    <MdSpaceDashboard />
                    <Text>Dashboard</Text>
                </li>
                <li className='option' onClick={() => handleRedirect('/patients')}>
                    <HiUsers />
                    <Text>Gerenciar pacientes</Text>
                </li>
                <li className='option' onClick={() => handleRedirect('/appointments')}>
                    <GiHealthNormal />
                    <Text>Gerenciar consultas</Text>
                </li>
            </ul>
        </div>
    )
}
