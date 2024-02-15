import { Text } from '@chakra-ui/react';
import React, { HTMLAttributes } from 'react';
import './Card.style.css';


type CardProps = {
    title: string;
    content: React.ReactNode
    icon?: React.ReactNode;
    style?: React.CSSProperties
}
 
export const Card = ({ content, icon, title, style }: CardProps) => {
    return (
        <div style={{position: 'relative', ...style}} className='card'>
            <div className='flex items-center justify-between'>
                <Text fontSize='2xl'>{title}</Text>
                {icon}
            </div>
            {content}
        </div>
    )
}
