import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";
import { Toaster } from "../ui/toaster";

type ModalComponentProps = {
    title: string;
    onClose: () => void;
    isOpen: boolean;
    Element: React.ReactNode
    description?: string;
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function ModalComponent({ Element, title, description,  ...rest}: ModalComponentProps) {

    return (
        <Modal {...rest}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <Text  style={{fontSize: '13px', margin: '-10px 0 20px 23px'}}>{description}</Text>
                <ModalCloseButton />
                <ModalBody>
                   {Element}
                </ModalBody>
                <Toaster />
            </ModalContent>
        </Modal>
    )
}