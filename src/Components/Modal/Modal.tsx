import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text } from "@chakra-ui/react";

type ModalComponentProps = {
    title: string;
    onClose: () => void;
    isOpen: boolean;
    Element: React.ReactNode
    size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'full'
}

export function ModalComponent({ Element, title, ...rest}: ModalComponentProps) {

    return (
        <Modal {...rest}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>{title}</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                   {Element}
                </ModalBody>
            </ModalContent>
        </Modal>
    )
}