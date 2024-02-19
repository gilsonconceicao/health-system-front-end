import { Stack } from '@chakra-ui/react'
import React, { ReactElement, ReactNode } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


type SkeletonListProps = {
    isLoading: boolean;
    children: ReactElement<any, any>
}

export const SkeletonList: React.FC<SkeletonListProps> = ({ isLoading, children }) => {
    return (
        <div>

            {!isLoading ? (
                <Stack mt={2}>
                    <Stack direction='row' alignItems='center' justifyContent='space-between'>
                        <Skeleton height='50px' width='200px' />
                        <Skeleton height='50px' width='200px' />
                    </Stack>
                    <Skeleton height='400px' width='100%' />
                </Stack>
            ) : (
                <>{children}</>
            )}
        </div>
    )
}
