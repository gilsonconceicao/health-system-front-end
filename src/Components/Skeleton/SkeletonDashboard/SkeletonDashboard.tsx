import { Stack } from '@chakra-ui/react'
import React, { ReactElement, ReactNode } from 'react'
import Skeleton, { SkeletonTheme } from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'


type SkeletonDashboardProps = {
    isLoading: boolean;
    children: ReactElement<any, any>
}

export const SkeletonDashboard: React.FC<SkeletonDashboardProps> = ({ isLoading, children }) => {
    return (
        <div>

            {!!isLoading ? (
                <Stack mt={2}>
                    <Stack style={{
                        display: 'grid',
                        gridTemplateColumns: 'auto auto auto', 
                    }}>
                        <Skeleton height='200px' width='100%' />
                        <Skeleton height='200px' width='100%' />
                        <Skeleton height='200px' width='100%' />
                    </Stack>
                    <Skeleton height='300px' width='100%' />
                </Stack>
            ) : (
                <>{children}</>
            )}
        </div>
    )
}
