import { Drawer, DrawerBody, DrawerCloseButton, DrawerContent, DrawerHeader, DrawerOverlay } from '@chakra-ui/react'
import React from 'react'

type DrawerComponentProps = {
    title: string;
    onClose: () => void;
    isOpen: boolean;
    Element: React.ReactNode
}

export default function DrawerComponent (props: DrawerComponentProps) {
    const { Element, isOpen, onClose, title } = props;
    return (
        <Drawer onClose={onClose} isOpen={isOpen} size={'md'}>
            <DrawerOverlay />
            <DrawerContent>
                <DrawerCloseButton />
                <DrawerHeader>{title}</DrawerHeader>
                <DrawerBody>
                  {Element}
                </DrawerBody>
            </DrawerContent>
        </Drawer>
    )
}
