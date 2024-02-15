'use client'
import { Text, Icon, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody } from '@chakra-ui/react'
import { IoMdMenu } from "react-icons/io";
import { IoCloseSharp } from "react-icons/io5";



import React, { useState } from 'react'
import { IconStyle } from '@/Helpers/Icon.style';
import DrawerComponent from '../Drawer/DrawerComponent';
import { OptionsMenu } from './OptionsMenu';

export const Header = () => {
    const [open, setOpen] = useState<boolean>(false);
    const onClose = () => setOpen(false);

    return (
        <header className='bg-[#222] text-white p-5 flex justify-between items-center'>
            <Text fontSize='lg'>Sistema de saúde</Text>
            <nav>
                <button className='border-none bg-none outline-none' onClick={() => setOpen(!open)}>
                    {open ? (
                        <IoCloseSharp style={{ ...IconStyle }} />
                    ) : (
                        <IoMdMenu style={{ ...IconStyle }} />
                    )}

                </button>
            </nav>


            <DrawerComponent
                title='Menu'
                isOpen={open}
                Element={<OptionsMenu onCloseMenu={onClose}/>}
                onClose={onClose}
            />
        </header>
    )
}
