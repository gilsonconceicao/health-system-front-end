import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay, DrawerProps } from '@chakra-ui/react'
import React from 'react'
import { Toaster } from '../ui/toaster';

type DrawerComponentProps = {
    title: string;
    onClose: () => void;
    isOpen: boolean;
    Element: React.ReactNode
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
    placement?: 'right' | 'left' | 'top' | 'bottom'
}

export default function DrawerComponent(props: DrawerComponentProps) {
    const { Element,title, ...rest } = props;
    return (
        <Drawer {
            ...rest
        }>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{title}</DrawerHeader>
                <DrawerBody>
                    {Element}
                </DrawerBody>
                <Toaster />
            </DrawerContent>
        </Drawer>
    )
}
