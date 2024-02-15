import { Text } from '@chakra-ui/react'
import React from 'react'

type TextCustomProps = {
    value: string;
    style?: React.CSSProperties
}

export const TextCustom = ({ value, style }: TextCustomProps) => {
  return (
    <Text style={style} fontSize='5xl' fontWeight={400}>{value}</Text>
  )
}
